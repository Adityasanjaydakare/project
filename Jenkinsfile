pipeline {
  agent any

  stages {

    stage('Clone Repo') {
    steps {
        git branch: 'main',
            url: 'https://github.com/Adityasanjaydakare/project'
    }
}
      }
    }

    stage('Terraform Apply') {
      steps {
        sh '''
        cd terraform
        terraform init
        terraform apply -auto-approve
        terraform output -raw ec2_public_ip > ../ip.txt
        '''
      }
    }

    stage('Configure Server') {
      steps {
        sh '''
        IP=$(cat ip.txt)
        echo "[web]" > ansible/inventory.ini
        echo "$IP" >> ansible/inventory.ini
        ansible-playbook -i ansible/inventory.ini ansible/setup.yml
        '''
      }
    }

    stage('SonarQube Analysis') {
      steps { echo "Analyzing code..." }
    }

    stage('Build Docker Image') {
      steps { sh 'docker build -t devsecops-app ./docker' }
    }

    stage('Trivy Scan') {
      steps { sh 'trivy image devsecops-app' }
    }

    stage('Deploy App') {
      steps {
        sh '''
        IP=$(cat ip.txt)
        scp -r docker-compose.yml nginx monitoring ubuntu@$IP:/home/ubuntu/
        ssh ubuntu@$IP "docker-compose up -d"
        '''
      }
    }

  }
}