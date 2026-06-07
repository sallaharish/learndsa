function sumN(n) {
  if (!Number.isInteger(n) || n < 0) {
    return false;
  }

  return (n * (n + 1)) / 2;
}

module.exports = { sumN };