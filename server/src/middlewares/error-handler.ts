import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { CustomError } from "../types/error";

const DEFAULT_ERROR_MESSAGE = "Something went wrong";

const errorHandler = (
  error: Error | CustomError,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);

  if (res.headersSent === true) {
    return next(error);
  }

  const statusCode =
    error instanceof CustomError
      ? error.statusCode
      : StatusCodes.INTERNAL_SERVER_ERROR;

  const message =
    error.message.length > 0 ? error.message : DEFAULT_ERROR_MESSAGE;

  res.status(statusCode).json({ message });
};

export default errorHandler;
