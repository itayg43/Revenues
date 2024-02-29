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

When npx prisma migrate dev is executed against a newly created database, seeding is also triggered. The seed file in prisma/seed.ts will be executed and your database will be populated with the sample data.

```
npm run start:dev
```
