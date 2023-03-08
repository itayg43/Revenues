const vat = 0.17;

function calculateVat(value) {
  return parseFloat((value * vat).toFixed(2));
}

module.exports = calculateVat;
