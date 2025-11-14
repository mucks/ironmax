# GitHub Actions Workflows

## Docker Publish Workflow

This workflow automatically builds and publishes the IronMax Docker image to GitHub Container Registry (GHCR).

### Triggers

- **Push to main branch**: Builds and pushes with `latest` tag
- **Version tags** (e.g., `v1.0.0`): Builds and pushes with version tags
- **Pull requests**: Builds only (doesn't push)

### Usage

#### Pulling the Image

```bash
# Login to GHCR
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Pull the latest image
docker pull ghcr.io/YOUR_USERNAME/ironmax:latest
```

#### Running the Container

```bash
# Run the container
docker run -d -p 3001:3001 ghcr.io/YOUR_USERNAME/ironmax:latest

# Or using docker-compose
docker-compose up -d
```

### Environment Variables

- `PORT`: The port the application runs on (default: 3001)
- `NODE_ENV`: Set to `production` for production builds

### Multi-Platform Support

The workflow builds images for both:
- `linux/amd64` (x86_64)
- `linux/arm64` (ARM64, Apple Silicon)

