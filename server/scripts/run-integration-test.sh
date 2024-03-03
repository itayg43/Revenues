#!/usr/bin/env bash

DIR="$(cd "$(dirname "$0")" && pwd)"
source $DIR/set-env.sh
docker-compose up -d
echo 'Waiting for database to be ready...'
$DIR/wait-for-it.sh "${DATABASE_URL}" -- echo 'Database is ready!'
npx prisma migrate dev --name init
vitest -c ./vitest.config.integration.ts