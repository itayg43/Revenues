function calculateFee(value, fee) {
  return parseFloat((value * (fee / 100)).toFixed(2));
}

module.exports = calculateFee;
