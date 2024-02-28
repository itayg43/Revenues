import { createServer } from "http";

import config from "../config";
import terminate from "./utils/terminate";
import app from "./app";

const server = createServer(app);

const exitHandler = terminate(server);

process.on("uncaughtException", exitHandler(1, "uncaughtException"));
process.on("unhandledRejection", exitHandler(1, "unhandledRejection"));
process.on("SIGTERM", exitHandler(0, "SIGTERM"));
process.on("SIGINT", exitHandler(0, "SIGINT"));

server.listen(config.PORT, () => {
  console.log(`Server listening on port: ${config.PORT}`);
});
