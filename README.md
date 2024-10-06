# AWS Node.js Pipeline

This project demonstrates how to deploy a Node.js application on AWS, using Docker Compose, NGINX as a load balancer, and Jenkins for pipeline automation.

## Overview

This setup involves deploying a Node.js app on an AWS EC2 instance with the following components:

1. **Docker Compose**: To orchestrate containers for the Node.js app, Redis, and NGINX.
2. **NGINX Load Balancer**: To distribute traffic between services.
3. **Jenkins CI/CD Pipeline**: To automate the build, test, and push of the Docker image.

## Components

### 1. Docker Compose
- Orchestrates multiple containers:
  - **Node.js App**: The main application.
  - **Redis**: For caching and database needs.
  - **NGINX**: To handle traffic and load balancing.

### 2. NGINX Load Balancer
- Used to distribute traffic efficiently to the Node.js app.
- Configured to act as a reverse proxy, ensuring a smooth flow of incoming requests.

### 3. Jenkins Pipeline
- Automates the CI/CD process:
  - Builds the Docker image.
  - Pushes the Docker image to a registry (such as DockerHub).
  - Deploys the image to the AWS EC2 instance.

## Deployment on AWS

1. Launch an **EC2 instance** on AWS.
2. Install **Docker** and **Docker Compose** on the instance.
3. Set up **Jenkins** on the EC2 instance to manage the build pipeline.
4. Configure **NGINX** for load balancing.
5. Use **Docker Compose** to run the containers.
