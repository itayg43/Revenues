require("dotenv").config();
const http = require("http");

const app = require("./app");

const port = process.env.PORT ?? 3001;
const server = http.createServer(app);
server.listen(port, () => console.info(`The server listen on port: ${port}`));
