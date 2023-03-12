const data = {
  insurance: 0,
  fuel: 0,
  maintenance: 0,
  equipment: 0,
  total: 0,
};

function sumExpensesData(expenses, insurance) {
  data.insurance = insurance;
  expenses.forEach((currExpense) => {
    data[currExpense.category] += currExpense.cost;
  });
  data.total = data.insurance + data.fuel + data.maintenance + data.equipment;
  return data;
}

module.exports = sumExpensesData;
