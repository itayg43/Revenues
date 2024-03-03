# Server

Set .env.dev and .env.test values

```
cd server && npm i
```

```
docker-compose up
```

```
npx prisma migrate dev --name init
```

When npx prisma migrate dev is executed against a newly created database, seeding is also triggered. The seed file in prisma/seed.ts will be executed and your database will be populated with the sample data.

In order to run the seed file manually:

1. add to the package.json:

```
"prisma": {
  "seed": "ts-node prisma/seed.ts"
},
```

2. run:

```
npx prisma db seed
```

```
npm run start:dev
```
