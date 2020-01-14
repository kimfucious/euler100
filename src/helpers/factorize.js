export const factorize = num => {
  let factors = {};
  let n = num;
  let i = 2;

  function count(n) {
    if (factors[n]) ++factors[n];
    else factors[n] = 1;
  }

  while (i * i <= n) {
    while (n % i === 0) {
      n /= i;
      count(i);
    }
    i++;
  }

  if (n !== num) {
    if (n > 1) count(n);
  } else {
    count(num);
  }
  return factors;
};
