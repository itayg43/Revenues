import { ExpenseType } from "@prisma/client";
import prismaClient from "../../clients/prisma-client";

export const createExpense = async (
  type: ExpenseType,
  cost: number,
  userId: number
) => {
  return await prismaClient.expense.create({
    data: {
      type,
      cost,
      userId,
    },
  });
};
