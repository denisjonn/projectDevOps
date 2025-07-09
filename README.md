# projectDevOps. Automated Static Site Deployment to EC2 via Jenkins



![CI/CD Pipeline](https://img.shields.io/badge/CI/CD-Automated%20Deployment-brightgreen) 
![Jenkins](https://img.shields.io/badge/Jenkins-Docker-blue)
![Ansible](https://img.shields.io/badge/Ansible-Automation-orange)
![AWS EC2](https://img.shields.io/badge/AWS-EC2-yellow)

Automated pipeline for deploying static websites to AWS EC2 using Jenkins and Ansible. This solution implements CI/CD best practices where every push to the `main` branch triggers an automatic deployment.

## 📋 Overview

![Pipeline Diagram](https://github.com/denisjonn/projectDevOps/raw/main/pipeline-diagram.png)

1. Developer pushes code to GitHub
2. Jenkins detects changes and triggers pipeline
3. Ansible copies files to EC2 server
4. Nginx restarts to serve updated content
5. Site becomes immediately available

## ⚙️ Prerequisites

- AWS account with EC2 access
- Ubuntu 22.04 EC2 instance
- Jenkins server (can be separate or same instance)
- Basic knowledge of SSH, Git, and Linux

## 🚀 Setup Guide

### 1. Prepare EC2 Server
```bash
# Launch EC2 instance (Ubuntu 22.04 LTS)
# Configure Security Group rules:
#   - SSH (22) - Your IP
#   - HTTP (80) - 0.0.0.0/0
#   - Jenkins (8080) - Your IP

# Install Nginx
sudo apt update && sudo apt install nginx -y
sudo systemctl enable nginx && sudo systemctl start nginx

# Create deployment user (optional)
sudo adduser deployer
sudo usermod -aG sudo deployer
