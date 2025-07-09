# projectDevOps. Automated Static Site Deployment to EC2 via Jenkins



![CI/CD Pipeline](https://img.shields.io/badge/CI/CD-Automated%20Deployment-brightgreen) 
![Jenkins](https://img.shields.io/badge/Jenkins-Docker-blue)
![Ansible](https://img.shields.io/badge/Ansible-Automation-orange)
![AWS EC2](https://img.shields.io/badge/AWS-EC2-yellow)

Automated pipeline for deploying static websites to AWS EC2 using Jenkins and Ansible. This solution implements CI/CD best practices where every push to the `main` branch triggers an automatic deployment.

##  Overview


1. Developer pushes code to GitHub
2. Jenkins detects changes and triggers pipeline
3. Ansible copies files to EC2 server
4. Nginx restarts to serve updated content
5. Site becomes immediately available

##  Prerequisites

- AWS account with EC2 access
- Ubuntu 22.04 EC2 instance
- Jenkins server (can be separate or same instance)
- Basic knowledge of SSH, Git, and Linux

## Setup Guide


### 1. Prepare EC2 Server

```bash
# Launch EC2 instance (Ubuntu 22.04 LTS)
# Configure Security Group rules:
#   - SSH (22) - Your IP
#   - HTTP (80) - 0.0.0.0/0
#   - Jenkins (8080) - Your IP
```
# Install Nginx
sudo apt update && sudo apt install nginx -y
sudo systemctl enable nginx && sudo systemctl start nginx

# Create deployment user (optional)
sudo adduser deployer
sudo usermod -aG sudo deployer

### 2. Clone Repository
```bash
git clone https://github.com/denisjonn/projectDevOps.git
cd projectDevOps
```

### 3. Configure Jenkins.

```bash
# Install Jenkins on Ubuntu
sudo apt install openjdk-11-jdk -y
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo gpg --dearmor -o /usr/share/keyrings/jenkins-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.gpg] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt update
sudo apt install jenkins -y
sudo systemctl start jenkins
```

Post-install steps:

Access Jenkins at http://public_IP:8080
Unlock with initial admin password: sudo cat /var/lib/jenkins/secrets/initialAdminPassword
Install suggested plugins, create admin user, install additional plugins:
 -Ansible
- SSH Pipeline Steps
- Git


### 4. Configure Credentials
GitHub Credentials:
Jenkins → Manage Jenkins → Credentials → System → Global Credentials
Add credentials with your GitHub access token
Username: ubuntu (or your EC2 user)

### 5. Configure Ansible
Edit inventory file, Verify playbook 

### 6. Create Jenkins Pipeline
New Item → Pipeline

## 🛠️ Usage
Make changes to your static site files

Commit and push to the main branch:
