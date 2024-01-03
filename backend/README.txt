/app : Nơi chứa source code xử lý backend
/data : Nơi chứa script sql để tạo data, migrate, backup
/docker : Chứa các xử lý docker

#########################
docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p -d mysql:tag