import { Server } from "http";

import prismaClient from "../clients/prisma-client";

const terminate = (server: Server) => {
  return (code: number, reason: string) => (error: any) => {
    console.log(reason);

    if (error && error instanceof Error) {
      console.error(error);
    }

    server.close(async () => {
      await prismaClient.$disconnect();
      process.exit(code);
    });
  };
};

export default terminate;
