# Server

```
docker run -p 3306:3306 --name revenues -e MYSQL_ROOT_PASSWORD=password -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=revenues_db -d mysql/mysql-server
```

```
cd server && npm i
```

```
npx prisma migrate dev --name init
```

```
npm run start:dev
```
