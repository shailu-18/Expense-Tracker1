pipeline {
    agent any

    stages {
        stage('clone Repo ') {
            steps {
                echo 'Repository clone by jenkins'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build-t Expense-Tracker1 .'
            }
        }
        stage('Run Docker Container') {
            steps {
                bat '''
                docker stop  Expense-Tracker1-site || exit 0 
                docter rm  Expense-Tracker1 site ||exit 0 
                docker run -d -p 8080:80 --name p11.html
                '''
            }
        }
    }
     post {
        sucess { 
            echo 'build completed sucessfully'
        }
            failure {
                echo 'build failed'
            }
}
}