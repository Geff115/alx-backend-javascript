function calculateNumber (a, b) {
  const rounded_num_a = Math.round(a);
  const rounded_num_b = Math.round(b);

  return rounded_num_a + rounded_num_b
}

module.exports = calculateNumber;