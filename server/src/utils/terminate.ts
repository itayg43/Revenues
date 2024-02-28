import { Server } from "http";

const terminate = (server: Server) => {
  return (code: number, reason: string) => (error: any) => {
    console.log(reason);

    if (error && error instanceof Error) {
      console.error(error);
    }

    server.close(() => {
      process.exit(code);
    });
  };
};

export default terminate;
