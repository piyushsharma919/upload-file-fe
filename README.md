# Upload File FE

![CI](https://github.com/piyushsharma919/upload-file-fe/actions/workflows/ci.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/piyushsharma919/upload-file-fe/badge.svg?branch=main)](https://coveralls.io/github/piyushsharma919/upload-file-fe?branch=main)
![Dependabot Status](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg?logo=dependabot)

A front-end application for uploading files, built with **React**, **TypeScript**, and **Tailwind CSS**. This project is Dockerized for seamless local development using **Vite**.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Development](#development)
- [Testing](#testing)
- [Test Coverage](#test-coverage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The **Upload File FE** project provides a simple and efficient interface for users to upload files to a server. The app is built using modern front-end technologies, containerized with Docker, and optimized for quick builds with Vite.

## Features

- **React 19**: Build dynamic user interfaces effortlessly.
- **TypeScript**: Ensure type safety and maintainability.
- **Tailwind CSS**: Rapidly style components with utility-first CSS.
- **Vite**: Lightning-fast development server and build tool.
- **Hot Reload**: See changes instantly without refreshing.
- **Dockerized**: Consistent environment across all machines.
- **Environment Variables**: Easy configuration through `.env` files.

## Prerequisites

Ensure you have the following installed:

- **Docker**: [Download and install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Included in Docker Desktop or install separately

Verify installation:

```bash
docker --version
docker compose version
```

## Setup

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/upload-file-fe.git
```

2. **Navigate to the project directory:**

```bash
cd upload-file-fe
```

3. **Create a `.env` file:**

Quickly set up your `.env` file using this simple one-liner:

```bash
echo -e "VITE_PORT=8080\nVITE_APP_BACKEND_ADDRESS=http://localhost/api" > .env
```

Alternatively, you can copy the sample environment file and adjust the values as needed:

```bash
cp .env.sample .env
```

**`.env.sample`:**

```plaintext
VITE_PORT=8080
VITE_APP_BACKEND_ADDRESS=http://localhost/api
```

4. **Build and run the Docker container:**

```bash
docker compose up --build
```

Your app should now be running at: [http://localhost:8080](http://localhost:8080)

## Environment Variables

The project uses a `.env` file to manage environment variables. These are loaded into the Docker container at runtime:

- `VITE_PORT`: The port on which the Vite dev server runs.
- `VITE_APP_BACKEND_ADDRESS`: The backend API address for file uploads.

Ensure your `.env` file is correctly set up before starting the app.

## Running the App

- **Start the app:**

```bash
docker compose up
```

- **Rebuild the Docker image (after Dockerfile changes):**

```bash
docker compose up --build
```

- **Stop the running containers:**

```bash
docker compose down
```

- **View logs:**

```bash
docker compose logs
```

## Development

- **Hot Reload:**

With Docker volume mounting, changes to your local files (like `App.tsx`) automatically reflect in the running app.

- **Access the container shell:**

```bash
docker compose exec frontend sh
```

## Testing

To run tests with Vitest:

```bash
npm run test
```

## Test Coverage

To check test coverage, run:

```bash
npm run coverage
```

To Check test coverage in UI, run:

```bash
npm run coverage-with-ui
```

A detailed coverage report will be generated, typically in the `coverage/` directory. Open `coverage/index.html` in your browser to view the report.

## Troubleshooting

### Port not updating

Ensure your `.env` file is correctly set and rebuild the Docker image:

```bash
docker compose down
docker compose up --build
```

Check the container's environment variables:

```bash
docker compose exec frontend printenv | grep VITE
```

### Vite server not starting

Ensure the port in `vite.config.ts` correctly references `VITE_PORT`:

```typescript
server: {
  port: Number(process.env.VITE_PORT) || 8080,
  host: '0.0.0.0',
},
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/branch
```

3. Make your changes.
4. Commit your changes:

```bash
git commit -m 'Add some feature'
```

5. Push to the branch:

```bash
git push origin feature/branch
```

6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact Information

- **Author**: Piyush Sharma
- **Email**: piyush.sharma919@gmail.com
- **GitHub**: [piyushsharma919](https://github.com/piyushsharma919)
- **Issue Tracker**: [GitHub Issues](https://github.com/piyushsharma919/upload-file-fe/issues)


