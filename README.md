# 🚀 Automated DevSecOps Pipeline

A complete **DevSecOps automation project** that demonstrates how to build, secure, deploy, and monitor a Node.js application using modern DevOps and cloud technologies.

The project automates infrastructure provisioning, server configuration, application containerization, security scanning, deployment, reverse proxy configuration, and monitoring.

---

## 📌 Project Overview

This project implements an automated CI/CD and DevSecOps pipeline using:

* **Jenkins** – CI/CD automation
* **Terraform** – Infrastructure provisioning
* **Ansible** – Server configuration
* **Docker** – Application containerization
* **Trivy** – Container security scanning
* **Nginx** – Reverse proxy
* **Prometheus** – Application monitoring
* **Grafana** – Monitoring dashboards
* **Node.js + Express** – Sample application

The pipeline automatically provisions an AWS EC2 server, configures it, builds the application container, performs a security scan, and deploys the application.

---

## 🏗️ Architecture

```text
                 ┌─────────────────┐
                 │     Developer   │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │     GitHub      │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │     Jenkins     │
                 └────────┬────────┘
                          │
              ┌───────────┴───────────┐
              │                       │
              ▼                       ▼
        ┌───────────┐           ┌───────────┐
        │ Terraform │           │  Ansible  │
        └─────┬─────┘           └─────┬─────┘
              │                       │
              └───────────┬───────────┘
                          ▼
                   ┌─────────────┐
                   │ AWS EC2     │
                   └──────┬──────┘
                          │
                          ▼
                   ┌─────────────┐
                   │   Docker    │
                   └──────┬──────┘
                          │
                          ▼
                  ┌──────────────┐
                  │ Node.js App  │
                  └──────┬───────┘
                         │
                         ▼
                    ┌─────────┐
                    │  Nginx  │
                    └────┬────┘
                         │
                         ▼
                    ┌─────────┐
                    │  Users  │
                    └─────────┘

        Monitoring:
        Application → Prometheus → Grafana
```

---

## 🔄 DevSecOps Pipeline

The Jenkins pipeline follows these major stages:

### 1. Checkout

Jenkins checks out the latest source code from GitHub.

### 2. Infrastructure Provisioning

Terraform initializes and provisions the required AWS infrastructure.

```bash
terraform init
terraform apply -auto-approve
```

The public IP address of the EC2 instance is then captured for later stages.

### 3. Server Configuration

Ansible automatically configures the newly created server and installs:

* Docker
* Docker Compose

The Ansible playbook also starts the Docker service.

### 4. Code Analysis

The pipeline includes a SonarQube analysis stage for static code analysis.

> SonarQube scanner integration can be enabled by adding the required scanner configuration.

### 5. Docker Build

The application is packaged into a Docker image.

```bash
docker build -t devsecops-app ./docker
```

### 6. Security Scan

Trivy scans the Docker image for known vulnerabilities.

```bash
trivy image devsecops-app
```

This helps identify security vulnerabilities before deployment.

### 7. Deployment

The required application, Nginx, and monitoring configuration files are copied to the EC2 server.

Docker Compose then starts the complete application stack.

```bash
docker-compose up -d
```

---

## 🛠️ Technologies Used

| Technology     | Purpose                    |
| -------------- | -------------------------- |
| GitHub         | Source code management     |
| Jenkins        | CI/CD automation           |
| Terraform      | Infrastructure as Code     |
| Ansible        | Server configuration       |
| Docker         | Containerization           |
| Docker Compose | Multi-container deployment |
| Node.js        | Application runtime        |
| Express.js     | Web framework              |
| Nginx          | Reverse proxy              |
| Trivy          | Security scanning          |
| Prometheus     | Metrics collection         |
| Grafana        | Monitoring & dashboards    |
| AWS EC2        | Cloud infrastructure       |

---

## 📂 Project Structure

```text
project/
│
├── ansible/
│   └── setup.yml
│
├── app/
│   └── index.js
│
├── docker/
│   └── Dockerfile
│
├── monitoring/
│   └── prometheus.yml
│
├── nginx/
│   └── nginx.conf
│
├── terraform/
│   └── Infrastructure configuration
│
├── Jenkinsfile
│
└── docker-compose.yml
```

---

## 🌐 Application

The project uses a simple Node.js and Express application.

The application runs on port **3000** and displays:

```text
🚀 Fully Automated DevSecOps Pipeline Running
```

Nginx acts as a reverse proxy and forwards incoming requests from port **80** to the Node.js application running on port **3000**.

---

## 🐳 Docker

Docker is used to package the application and its dependencies into a portable container.

The Docker image is built using:

```bash
docker build -t devsecops-app ./docker
```

Docker Compose manages the different services required by the project.

---

## 🔐 Security

Security is integrated into the deployment pipeline using **Trivy**.

Before deployment, the Docker image is scanned:

```bash
trivy image devsecops-app
```

This helps detect known vulnerabilities in the container image.

The project also includes a SonarQube stage that can be used for static code analysis.

---

## 📊 Monitoring

The project uses **Prometheus and Grafana** for monitoring.

Prometheus collects application metrics at regular intervals and monitors the application running on:

```text
app:3000
```

The configured Prometheus scrape interval is **15 seconds**.

Grafana is included in the Docker Compose stack and can be accessed through:

```text
http://<SERVER-IP>:3001
```

---

## ⚙️ Running the Project

### Prerequisites

Make sure the following tools are installed/configured:

* Git
* Jenkins
* Docker
* Docker Compose
* Terraform
* Ansible
* Trivy
* AWS account
* AWS credentials
* Java/Jenkins environment

---

### Clone the Repository

```bash
git clone https://github.com/Adityasanjaydakare/project.git
cd project
```

---

### Run with Docker Compose

```bash
docker-compose up -d
```

Check running containers:

```bash
docker ps
```

---

### Access the Application

Open:

```text
http://<SERVER-IP>
```

You should see:

```text
🚀 Fully Automated DevSecOps Pipeline Running
```

---

## 🔁 Jenkins Pipeline

The Jenkins pipeline automates the complete workflow:

```text
GitHub
   ↓
Jenkins
   ↓
Terraform
   ↓
AWS EC2
   ↓
Ansible
   ↓
Docker Build
   ↓
Trivy Security Scan
   ↓
Docker Compose
   ↓
Nginx
   ↓
Node.js Application
   ↓
Prometheus + Grafana
```

---

## 🎯 Key Features

* ✅ Infrastructure as Code using Terraform
* ✅ Automated server configuration using Ansible
* ✅ CI/CD using Jenkins
* ✅ Docker-based application deployment
* ✅ Container vulnerability scanning with Trivy
* ✅ Reverse proxy using Nginx
* ✅ Application monitoring using Prometheus
* ✅ Visualization using Grafana
* ✅ Automated deployment to AWS EC2
* ✅ Docker Compose based service management

---

## 📚 Learning Objectives

This project demonstrates practical knowledge of:

* DevOps
* DevSecOps
* CI/CD
* Infrastructure as Code
* Cloud Computing
* Containerization
* Linux server administration
* Security scanning
* Monitoring
* Automation

---

## 👨‍💻 Author

**Aditya Sanjay Dakare**

GitHub:
https://github.com/Adityasanjaydakare

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for educational and demonstration purposes.
