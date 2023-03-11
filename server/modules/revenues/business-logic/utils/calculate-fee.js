function calculateFee(value, fee) {
  return value * (fee / 100);
}

module.exports = calculateFee;
