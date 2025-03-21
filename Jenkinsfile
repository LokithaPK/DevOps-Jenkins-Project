pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/LokithaPK/Docker_2.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t space-exploration:latest .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker stop space-exploration-container || true'
                    sh 'docker rm space-exploration-container || true'
                    sh 'docker run -d --name space-exploration-container -p 3004:3004 space-exploration:latest'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'curl --fail http://localhost:3004 || exit 1'
                }
            }
        }
    }

    post {
        always {
            sh 'docker system prune -f'
        }
        success {
            echo 'Pipeline completed successfully! The web page is live on port 3004.'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}