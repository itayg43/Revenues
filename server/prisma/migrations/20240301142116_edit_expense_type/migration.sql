/*
  Warnings:

  - The values [FUEL,MAINTENANCE,EQUIPMENT] on the enum `Expense_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Expense` MODIFY `type` ENUM('fuel', 'maintenance', 'equipment') NOT NULL;
