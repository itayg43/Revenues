import { ExpenseType } from "@prisma/client";
import prismaClient from "../../clients/prisma-client";

const addExpense = async (type: ExpenseType, cost: number, userId: number) => {
  return await prismaClient.expense.create({
    data: {
      type,
      cost,
      userId,
    },
  });
};

export default {
  addExpense,
};
