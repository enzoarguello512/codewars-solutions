function countPositivesSumNegatives(input) {
  if (!input || (Array.isArray(input) && input.length === 0)) {
    return [];
  }

  let countOfPositives = 0;
  let sumOfNegatives = 0;

  input.forEach((number) => {
    if (number > 0) {
      countOfPositives = countOfPositives + 1;
    } else {
      sumOfNegatives = sumOfNegatives + number;
    }
  });

  return [countOfPositives, sumOfNegatives];
}
