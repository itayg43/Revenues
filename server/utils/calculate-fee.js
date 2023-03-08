function calculateFee(value, fee) {
  return parseFloat((value * fee).toFixed(2));
}

module.exports = calculateFee;
