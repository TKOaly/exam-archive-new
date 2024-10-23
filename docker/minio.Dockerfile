FROM minio/minio:RELEASE.2024-07-16T23-46-41Z

COPY --from=minio/mc:RELEASE.2024-07-15T17-46-06Z /usr/bin/mc /usr/local/bin/mc

COPY ./minio-docker-entrypoint.sh /

COPY ./sample-pdf.pdf /tmp/sample-pdf.pdf
COPY ./sample-jpg.jpg /tmp/sample-jpg.jpg

ENTRYPOINT ["/minio-docker-entrypoint.sh"]
CMD ["--address", ":9001", "--console-address", ":9002"]