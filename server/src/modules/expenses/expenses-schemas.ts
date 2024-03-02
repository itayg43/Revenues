import { ExpenseType } from "@prisma/client";
import z from "zod";

export const createExpenseSchema = z.object({
  body: z.object({
    type: z.nativeEnum(ExpenseType, {
      required_error: "Type is required",
    }),

    cost: z
      .number({
        required_error: "Cost is required",
      })
      .positive(),
  }),
});

export type CreateExpenseInput = z.TypeOf<typeof createExpenseSchema>["body"];
