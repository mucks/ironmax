# IronMax - Personal Training & Fitness Coaching

A modern, professional website for IronMax personal training brand built with Next.js 14, React 19, and Tailwind CSS.

## 🏋️ Features

- **Modern UI/UX**: Clean, dark-themed design with gradient accents
- **Responsive Design**: Fully responsive layout that works on all devices
- **Social Media Integration**: Direct links to Instagram, Twitter, YouTube, and TikTok
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **Docker Ready**: Containerized application for easy deployment

## 🚀 Getting Started

### Development

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3001](http://localhost:3001) in your browser

### Building for Production

```bash
pnpm build
pnpm start
```

## 🐳 Docker Deployment

### Build Docker Image Locally

```bash
docker build -t ironmax .
```

### Run with Docker

```bash
docker run -d -p 3001:3001 ironmax
```

### Run with Docker Compose

```bash
docker-compose up -d
```

## 📦 GitHub Container Registry (GHCR)

The project is automatically built and published to GHCR on every push to `main` branch.

### Pull from GHCR

```bash
# Login to GHCR
echo $GITHUB_TOKEN | docker login ghcr.io -u YOUR_USERNAME --password-stdin

# Pull the image
docker pull ghcr.io/YOUR_USERNAME/ironmax:latest

# Run the container
docker run -d -p 3001:3001 ghcr.io/YOUR_USERNAME/ironmax:latest
```

### GitHub Actions Workflow

The workflow automatically:
- ✅ Builds Docker image on push to `main`
- ✅ Publishes to GitHub Container Registry
- ✅ Supports multi-platform builds (amd64, arm64)
- ✅ Tags images with version and commit SHA
- ✅ Caches layers for faster builds

To trigger a build, simply push to the `main` branch:

```bash
git add .
git commit -m "Update website"
git push origin main
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Runtime**: Node.js 20
- **Package Manager**: pnpm

## 📝 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
```

### Port Configuration

The application runs on port `3001` by default. You can change this in:
- `package.json` - `"dev"` script
- `Dockerfile` - `EXPOSE` and `CMD` instructions
- `docker-compose.yml` - `ports` mapping

## 📱 Social Media

- Instagram: [@ironmax.fit](https://instagram.com/ironmax.fit)
- Twitter: [@ironmaxfit](https://twitter.com/ironmaxfit)
- YouTube: [@ironmaxfit](https://youtube.com/@ironmaxfit)
- TikTok: [@ironmax_fit](https://tiktok.com/@ironmax_fit)

## 📄 License

All rights reserved © 2025 IronMax

## 🤝 Contact

For inquiries: contact@ironmax.fit
