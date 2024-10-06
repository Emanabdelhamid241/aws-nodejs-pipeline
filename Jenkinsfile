pipeline {
    agent any
    
    parameters {
        string(name: 'DOCKER_IMAGE_TAG', defaultValue: 'latest', description: 'Tag for the Docker image')
    }

    environment {
        DOCKER_REGISTRY = 'emanabdelhamed241' // e.g., 'dockerhub'
        IMAGE_NAME = 'nodejs-app' // e.g., 'myapp'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Emanabdelhamid241/aws-nodejs-pipeline.git' // Ensure this matches your repo URL and branch
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    sh "ls"
                    sh " docker compose -f docker-compose.yml -f docker-compose.dev.yml build"
                    // sh "docker build -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:${params.DOCKER_IMAGE_TAG} ."
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    sh "docker compose -f docker-compose.yml -f docker-compose.dev.yml push"

                    // sh "docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${params.DOCKER_IMAGE_TAG}"
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline completed with Docker image tag: ${params.DOCKER_IMAGE_TAG}"
        }
        success {
        slackSend color: 'good', message: 'build success '
        }
        failure {
        slackSend color: 'denger', message: 'build failed'
        }
    }
}