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

      return res
        .status(StatusCodes.BAD_REQUEST)
        .json(error instanceof ZodError ? error.errors : error.message);
    }
  };

export default validateSchema;
