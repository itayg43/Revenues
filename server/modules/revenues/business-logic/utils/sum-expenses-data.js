function sumExpensesData(expenses) {
  return expenses.reduce(
    (data, currExpense) => {
      data[currExpense.category] += currExpense.cost;
      data.total += currExpense.cost;
      return data;
    },
    {
      fuel: 0,
      maintenance: 0,
      equipment: 0,
      total: 0,
    }
  );
}

module.exports = sumExpensesData;
