pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git credentialsId: 'github-df', url: 'https://github.com/denisjonn/projectDevOps.git', branch: 'main'
            }
        }

        stage('Run Ansible Playbook') {
            steps {
                sh 'ansible-playbook ansible-static-site/deploy.yml'
            }
        }
    }
}
