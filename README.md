# exam-archive-new

Actually new exam archive

## Table of contents

- [Development](#development)
  - [Quick guide](#quick-guide)
  - [Other good to know commands](#other-good-to-know-commands)
  - [Needed tools and dependencies](#needed-tools-and-dependencies)
  - [Adding more test files](#adding-more-test-files)
  - [Seeding database with real data](#seeding-database-with-real-data)
- [Docker warning](#docker-warning)
- [Deployment](#deployment)
  - [Manual infra setup with Terraform](#manual-infra-setup-with-terraform)
  - [CI to production](#ci-to-production)
- [Environment variables](#environment-variables)
- [License](#license)

## Development

### Quick guide

1. Run `start-local-env.sh`. This will set up development environment and runs all needed commands. Script will also tell if you are missing some tooling listed below.
2. _(OPTIONAL)_ If you want to test with realish users, set up `user-service` and make sure that there's a service for exam-archive, might need to change the permission bits to `770`. By default, the service will just skip authentication and log you in. If local user service cookie is detected, exam-archive tries to authenticate against it.
3. Then go to <http://127.0.0.1:9000>

### Other good to know commands

- `run-prod.sh` will start prod-like environment locally for testing Docker image. There is `APP_ENV=development` enabled for bypassing user service authentication.
- `run-security-scan.sh` runs ZAProxy's zap-full-scan.py against app. Mainly used in CI, but also working locally.
- `run-tests.sh` runs Playwright test suite against app.
- `seed-dev-db.sh` runs database seeds against local development database. Only needed if you want to have some development test data. Tests handles seeding itself.

### Needed tools and dependencies

- docker and docker-compose
- tmux
- curl
- shasum
- jq
- npm (start-local-env.sh will take care of this with nvm)
- Prettier formatter extension for your editor

### Adding more test files

By default, the local minio s3 is seeded with one PDF and one JPG. You can just upload more files, or see `docker/minio.Dockerfile` and `docker/minio-docker-entrypoint.sh` for how to add more files the Minio image we build. If you add a file, you can then modify `seeds/exams.js` with the correct file name. Make the file an uuidv4 or something.

### Seeding database with real data

1. Download the development database dump (`db.sql`) from [here](https://github.com/TKOaly/exam-archive-dev-db-dump)
2. Start the database and Adminer:
   - `docker-compose up -d db adminer`
3. Open Adminer (navigate to <http://localhost:9003>) and log in with the credentials in `docker-compose.yml`, by default they are:
   | Key      | Value      |
   | -------- | -----------|
   | System   | PostgreSQL |
   | Server   | `db`       |
   | Username | `tarpisto` |
   | Password | `tarpisto` |
   | Database | `tarpisto` |
4. Click on Import on the left sidebar and upload `db.sql`
5. Further possible migrations are runned while starting app.

## Docker warning

The `.dockerignore` is configured to work as a whitelist so if you add new files or folders which you want to include in the Docker image, update [`.dockerignore`](https://github.com/TKOaly/exam-archive-new/blob/master/.dockerignore).

## Deployment

### Manual infra setup with Terraform

1. `cd tf`
2. Set correct AWS CLI profile

   ```shell
   export AWS_PROFILE=default
   export TF_VAR_aws_profile=default
   ```

   - Note: if you've created another `aws` cli profile (e.g. have separate profile for personal and for tkoaly), change `default` to that profile's name
3. `terraform plan`
   - Will ask for `var.image_version_tag`, set to the deployment tag (latest version in Github Releases), specify **without** `v`, e.g. `1.2.30`.
     - If tired of doing it again, `export TF_VAR_image_version_tag=1.2.30`
4. `terraform apply`

### CI to production

To deploy a new release to production, author a new Github Release. Use semver. Make sure the version string is prefixed with `v`, e.g. `v1.2.30` instead of `1.2.30`. The deployment script does a string replace for this, so if you want to release non-v-prefixed versions, update the Github action workflow.

## Environment variables

| Key                       | Value                                                                                                                                                                                               | Needed for                   | Example                                                                     |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------- |
| `PORT`                    | Port where Next.js app process will be running                                                                                                                                                      | App                          | `9000` for dev, `9010` for tests, `9020` for prod                           |
| `NODE_ENV`                | NODE_ENV tells Next.js in which kind of environment app is runned. `development` is enforced in dev and `production` is enforced in prod.                                                           | App                          | `development` for dev, `production` for prod                                |
| `APP_ENV`                 | APP_ENV defines if selected app functions allowed in current environment. For example this is used to limit `/admin` to dev only. Created because Next.js enforces NODE_ENV values in dev and prod. | App                          | `development` for dev, `production` for prod                                |
| `PG_CONNECTION_STRING`    | Database connection string                                                                                                                                                                          | Storing course and exam info | `postgresql://tarpisto:tarpisto@tarpisto:5432/tarpisto`                     |
| `COOKIE_NAME`             | Name for exam-archive's cookie                                                                                                                                                                      | Logging in, auth             | `tarpisto`                                                                  |
| `COOKIE_SECRET`           | Secret used in cookie signing                                                                                                                                                                       | Logging in, auth             | `catlike-meringue-tying-PASTERN-bed-simply`                                 |
| `COOKIE_ISSUER`           | Issuer used in cookie signing                                                                                                                                                                       | Logging in, auth             | `tkoaly`                                                                    |
| `COOKIE_SUBJECT`          | Subject used in cookie signing                                                                                                                                                                      | Logging in, auth             | `tarpisto`                                                                  |
| `COOKIE_JWTID`            | JWTID used in cookie signing                                                                                                                                                                        | Logging in, auth             | `tarpisto`                                                                  |
| `USER_SERVICE_SERVICE_ID` | The UUID that you've assigned to this service in `user-service`                                                                                                                                     | Logging in, auth             | `11188b9c-9534-4faf-8355-60973b720647`                                      |
| `USER_SERVICE_URL`        | The address of the user service                                                                                                                                                                     | Logging in, auth             | `http://127.0.0.1:8080`                                                     |
| `AWS_REGION`              | Used AWS region where resources are                                                                                                                                                                 | Storing exam files           | `eu-west-1`                                                                 |
| `AWS_ACCESS_KEY_ID`       | Your AWS access key's ID                                                                                                                                                                            | Storing exam files           | `tarpisto`                                                                  |
| `AWS_SECRET_ACCESS_KEY`   | Your AWS secret access key                                                                                                                                                                          | Storing exam files           | `tarpisto`                                                                  |
| `AWS_S3_ENDPOINT`         | Url used to communicate with S3                                                                                                                                                                     | Storing exam files           | `http://s3:9000`                                                            |
| `AWS_S3_FORCE_PATH_STYLE` | Is path style enforced in S3 communication                                                                                                                                                          | Storing exam files           | `true`                                                                      |
| `AWS_S3_BUCKET_ID`        | ID of used S3 bucket                                                                                                                                                                                | Storing exam files           | `exam-archive-local`                                                        |

## License

MIT, see LICENSE file for details.
