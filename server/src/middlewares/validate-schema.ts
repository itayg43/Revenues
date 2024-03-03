import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";
import { StatusCodes } from "http-status-codes";

const validateSchema =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      console.log(error);

      const message =
        error instanceof ZodError
          ? error.errors
              .map((issue) => `${issue.path[1]}: ${issue.message}`)
              .join(", \n")
          : error.message;

      return res.status(StatusCodes.BAD_REQUEST).json({ message });
    }
  };

export default validateSchema;
