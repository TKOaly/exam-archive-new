FROM minio/minio:RELEASE.2022-10-29T06-21-33Z

COPY --from=minio/mc:RELEASE.2022-10-29T10-09-23Z /usr/bin/mc /usr/local/bin/mc

COPY ./minio-docker-entrypoint.sh /

COPY ./sample-pdf.pdf /tmp/sample-pdf.pdf
COPY ./sample-jpg.jpg /tmp/sample-jpg.jpg

ENTRYPOINT ["/minio-docker-entrypoint.sh"]
CMD ["--address", ":9000", "--console-address", ":9001"]