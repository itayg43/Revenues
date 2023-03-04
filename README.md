# Revenues

## SERVER SETUP

1. open docker
2. open terminal and run:

```
docker run -p 3306:3306 --name revenues -e MYSQL_ROOT_PASSWORD=password -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=revenues -d mysql/mysql-server
```

3. open terminal at the project root and run:

```
cd server/ && npm i && cd db/ && npx sequelize-cli db:migrate && npm run dev
```
