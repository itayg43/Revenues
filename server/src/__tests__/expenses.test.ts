import { describe, expect, it } from "vitest";
import request from "supertest";
import { StatusCodes } from "http-status-codes";

import prismaTestClient from "./helpers/prisma-test-client";
import server from "../server";

const EXPENSES_ROUTE = "/api/expenses";

const VALID_CREATE_EXPENSE_INPUT = {
  type: "fuel",
  cost: 35.42,
};

const INVALID_CREATE_EXPENSE_INPUT = {
  type: "fuel",
  cost: "35.42",
};

describe(`${EXPENSES_ROUTE}`, () => {
  describe("[POST] /", () => {
    describe("given invalid input", () => {
      it("should return 400", async () => {
        const response = await request(server)
          .post(EXPENSES_ROUTE)
          .send(INVALID_CREATE_EXPENSE_INPUT);

        expect(response.status).toBe(StatusCodes.BAD_REQUEST);
        expect(response.body.message).toBeTypeOf("string");
      });
    });

    describe("given valid input", () => {
      it("should create new expense", async () => {
        const response = await request(server)
          .post(EXPENSES_ROUTE)
          .send(VALID_CREATE_EXPENSE_INPUT);

        expect(response.status).toBe(StatusCodes.CREATED);
        expect(response.body.cost).toBe(VALID_CREATE_EXPENSE_INPUT.cost);

        const expensesCount = await prismaTestClient.expense.count();

        expect(expensesCount).toBe(1);
      });
    });
  });
});
