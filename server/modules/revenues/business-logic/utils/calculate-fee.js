function calculateFee(value, rate) {
  return value * (rate / 100);
}

module.exports = calculateFee;
