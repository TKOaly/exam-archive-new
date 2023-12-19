FROM minio/minio:RELEASE.2023-12-14T18-51-57Z

COPY --from=minio/mc:RELEASE.2023-12-14T00-37-41Z /usr/bin/mc /usr/local/bin/mc

COPY ./minio-docker-entrypoint.sh /

COPY ./sample-pdf.pdf /tmp/sample-pdf.pdf
COPY ./sample-jpg.jpg /tmp/sample-jpg.jpg

ENTRYPOINT ["/minio-docker-entrypoint.sh"]
CMD ["--address", ":9001", "--console-address", ":9002"]