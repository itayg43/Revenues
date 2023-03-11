function calculateExpensesData(expenses, profile) {
  const { monthlyInsurancePayments: insurance } = profile;
  return expenses.reduce(
    (data, currExpense) => {
      data[currExpense.category] += currExpense.cost;
      return data;
    },
    {
      insurance,
      fuel: 0,
      maintenance: 0,
      equipment: 0,
    }
  );
}

module.exports = calculateExpensesData;
