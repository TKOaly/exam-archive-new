#!/bin/bash
set -euo pipefail

MINIO_REGION_NAME="${MINIO_REGION_NAME:-eu-west-1}"
DATA_DIR="/data"
SCRIPT_ARGS=( "$@" )

function wait-for-server() {
    ADDRESS="$1"

    set +e # ignore curl's error code since we need to handle it ourselves
    while true
    do
        # wait until curling the address gives OK return code
        # (see curl manpage for what -f does)
        curl -fs "http://$ADDRESS" &> /dev/null && break
        sleep 1
    done
    set -e # revert set -e so script stops on errors
    return 0
}

function create-buckets() {
    API_ADDRESS="$1"

    MC_USER="${MINIO_ROOT_USER:-minioadmin}"
    MC_PASSWORD="${MINIO_ROOT_PASSWORD:-minioadmin}"
    mc alias -q set local "http://$API_ADDRESS" "$MC_USER" "$MC_PASSWORD" > /dev/null

    for BUCKET in "${@:2}" # $@ = all args, ${@:2} = all args except first
    do
        BUCKET_ADDR="$BUCKET"

        # Check if bucket exists
        # If bucket exists, mc stat returns 0, if not exist, returns error
        # Suppress output with &> /dev/null
        set +e
        mc stat -q "$BUCKET_ADDR" &> /dev/null
        EXISTS_RESULT=$?
        set -e
        if [ $EXISTS_RESULT -eq 0 ]; then
            echo "Bucket '$BUCKET_ADDR' already exists"
            continue
        fi

        echo "Creating bucket '$BUCKET_ADDR'"
        mc mb --region "$MINIO_REGION_NAME" -p "$BUCKET_ADDR"
    done
}

# Did user want to create buckets?
if [ ! -z "$INITIAL_BUCKETS" ];
then
    echo "INITIAL_BUCKETS set; creating buckets if they don't exist."
    # Read INITIAL_BUCKETS into array named BUCKETS,
    # split by a space (IFS=' ')
    IFS=' ' read -r -a BUCKETS <<< "$INITIAL_BUCKETS"

    # Start minio server (bind console to container localhost) in the background
    # so we can create the buckets.
    #
    # We could just use /data/$bucket as the name with mc mb
    # and mc cp and just write the files directly to the file system without
    # starting a server, but setting the bucket public read rights requires
    # the server because it writes the AWS-like JSONs to some binary format
    # file.
    echo ""
    echo "Starting server to check bucket status..."
    API_ADDRESS="127.0.0.1:9000"
    CONSOLE_ADDRESS="127.0.0.1:9001"
    minio server "$DATA_DIR" \
        --quiet \
        --address "$API_ADDRESS" \
        --console-address "$CONSOLE_ADDRESS" \
        & # background process
    SERVER_PID=$!

    echo ""
    echo "Server started. Waiting for console to come up."
    # Wait for the admin console to wake up
    wait-for-server "$CONSOLE_ADDRESS"

    echo ""
    echo "Server awake. Checking bucket status and creating missing buckets."
    # Admin console is up; assume API is too
    create-buckets "$API_ADDRESS" "${BUCKETS[@]}"

    echo ""
    echo "Bucket check complete! Killing local server and starting proper server."
    # Tear down installation server
    kill "$SERVER_PID" && wait "$SERVER_PID"
fi

echo "Starting Minio server."

# Start server and pass any other command args
# from docker-compose.yml to minio server /data
# Specifically use exec so that this process (PID 1) gets replaced
# with the minio server so Docker's signaling works
exec minio server "$DATA_DIR" "${SCRIPT_ARGS[@]}"