pipeline {
    agent {
        docker {
            image 'node:12-alpine'
            args '-p 3001:3001'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run test' 
            }
        }
    }
}