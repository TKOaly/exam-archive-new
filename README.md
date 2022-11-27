# exam-archive-new

Actually new exam archive

## Table of contents

- [Development](#development)
  - [1. Install tools and dependencies](#1-install-tools-and-dependencies)
  - [2. Setup environment variables](#2-setup-environment-variables)
  - [3. Run it](#3-run-it)
  - [Seeding database with real data](#seeding-database-with-real-data)
- [Docker warning](#docker-warning)
- [Deployment](#deployment)
  - [Manual infra setup with Terraform](#manual-infra-setup-with-terraform)
  - [CI to production](#ci-to-production)
- [some env vars](#some-env-vars)
- [License](#license)

## Development

### 1. Install tools and dependencies

1. Install Docker and docker-compose
2. Install Node.JS (>=v12), if you don't have it already, install it with nvm (on windows: nwm). You can use `nvm use` to install and afterwards activate correct version based on `.nvmrc` file.
3. Install the Prettier formatter extension for your editor
4. Run `npm install`
5. _(OPTIONAL)_ If you want to test with realish users, set up `user-service` and make sure that there's a service for exam-archive, might need to change the permission bits to `770`. By default, the service will just skip authentication and log you in.
6. Copy `.env-sample` to `.env`.
7. Run `docker-compose up` in a terminal to start the database and the local s3 service
8. Run `npm run watch`
9. _(OPTIONAL)_ Run `npm run db:seed` if you want to seed the DB with data. The dev S3 bucket (Minio) should be seeded with test files automatically, so you just need to run the DB seeds.

then go to http://localhost:9000

### Adding more test files

By default, the local minio s3 is seeded with one PDF and one JPG. You can just upload more files, or see `docker/minio.Dockerfile` and `docker/minio-docker-entrypoint.sh` for how to add more files the Minio image we build. If you add a file, you can then modify `seeds/exams.js` with the correct file name. Make the file an uuidv4 or something.

### Seeding database with real data

1. Download the development database dump (`db.sql`) from [here](https://github.com/TKOaly/exam-archive-dev-db-dump)
2. Start the database and Adminer:
   - `docker-compose up -d db adminer`
3. Open Adminer (navigate to http://localhost:8082) and log in with the credentials in `docker-compose.yml`, by default they are:
   | Key | Value |
   | ------------- |-------------|
   | System | PostgreSQL |
   | Server | `db` |
   | Username | `tarpisto` |
   | Password | `Su5hgVvoqUCRw5vrWmrW` |
   | Database | `tarpisto` |
4. Click on Import on the left sidebar and upload `db.sql`
5. Run any further possible migrations with `npm run db:migrate-dev`

## Docker warning

The `.dockerignore` is configured to work as a whitelist so if you add new files or folders which you want to include in the Docker image, update [`.dockerignore`](https://github.com/TKOaly/exam-archive-new/blob/master/.dockerignore).

## Deployment

### Manual infra setup with Terraform

1. `cd tf`
2. Set correct AWS CLI profile
   ```
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

## some env vars

todo: document further

| Key                     | Value                                                                                                                                                                                                                                                                                              | Needed for                                                  | Example                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------- |
| `USER_SERVICE_ID`       | The UUID that you've assigned to this service in `user-service`                                                                                                                                                                                                                                    | Logging in, auth                                            | `11188b9c-9534-4faf-8355-60973b720647` |
| `USER_SERVICE_URL`      | The address of the user service                                                                                                                                                                                                                                                                    | Logging in, auth                                            | `http://localhost:8080`                |
| `AWS_ACCESS_KEY_ID`     | Your AWS access key's ID. If you've used the `aws` CLI, find it at `~/.aws/credentials`, or create a new key via AWS console -> Click on your username dropdown in navbar -> My security sredentials -> Access keys for CLI, SDK, & API access                                                     | Uploading, renaming files                                   |                                        |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret access key                                                                                                                                                                                                                                                                         | Uploading, renaming files                                   |                                        |
| `AWS_CF_KEY_ID`         | The CloudFront signed URL signing key's ID. Find it from AWS console -> AWS Systems Manager -> Parameter Store, search for `exam-archive-dev-cf-signing-key-id`                                                                                                                                    | Generating signed URLs to view the exams                    |                                        |
| `AWS_CF_KEY`            | The CloudFront signed URL private signing key. Find it from the same place as above, under `exam-archive-dev-cf-signing-key`. It's multi-line, turn it into a oneliner by escaping the newlines (regex replace in your editor, search for `\n` and replace with `\\n`) and paste it inside quotes. | Generating signed URLs to view the exams                    |                                        |
| `AWS_S3_DEV_PREFIX`     | A prefix for your development files in the S3 bucket. Just set it to your username or something that isn't already taken. No slashes.                                                                                                                                                              | Separating different devs' files inside the same dev bucket | template                               |

## License

MIT, see LICENSE file for details.
