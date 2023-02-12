FROM minio/minio:RELEASE.2023-02-10T18-48-39Z

COPY --from=minio/mc:RELEASE.2023-02-10T18-48-39Z /usr/bin/mc /usr/local/bin/mc

COPY ./minio-docker-entrypoint.sh /

COPY ./sample-pdf.pdf /tmp/sample-pdf.pdf
COPY ./sample-jpg.jpg /tmp/sample-jpg.jpg

ENTRYPOINT ["/minio-docker-entrypoint.sh"]
CMD ["--address", ":9000", "--console-address", ":9001"]