function calculateExpensesData(expenses, profile) {
  return expenses.reduce(
    (data, currExpense) => {
      switch (currExpense.category) {
        case "fuel": {
          data.fuel += currExpense.cost;
          break;
        }
        case "maintenance": {
          data.maintenance += currExpense.cost;
          break;
        }
        case "equipment": {
          data.equipment += currExpense.cost;
          break;
        }
      }
      return data;
    },
    {
      insurance: profile.monthlyInsurancePayments,
      fuel: 0,
      maintenance: 0,
      equipment: 0,
    }
  );
}

module.exports = calculateExpensesData;
