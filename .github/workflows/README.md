# GitHub Actions Workflows

## Build and Deploy to EC2

File: **`docker-build-push.yml`**

1. Builds **`iamcyberster/lms-be:latest`** (amd64, GHA layer cache).
2. Pushes to **Docker Hub**.
3. SSHs to **EC2**, **`docker pull`**, recreates **`lead-app`**.

### Secrets

- **Hub:** `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN` (or `DOCKER_USERNAME`, `DOCKER_PASSWORD`)
- **EC2:** `EC2_SSH_HOST`, `EC2_SSH_USER`, `EC2_SSH_PRIVATE_KEY`
- **Optional:** `MONGODB_URI`, `EC2_APP_DIR`

On EC2, keep **`/opt/lead-management/.env`** (or set **`EC2_APP_DIR`**) with `MONGODB_URI`, `JWT_SECRET`, and other app env vars before the first deploy.
