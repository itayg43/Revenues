import { StatusCodes } from "http-status-codes";

export class BaseCustomError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends BaseCustomError {
  constructor(message: string) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}

export class NotFoundError extends BaseCustomError {
  constructor(message: string) {
    super(StatusCodes.NOT_FOUND, message);
  }
}
