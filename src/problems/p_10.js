export const id = 10;
export const title = "Summation of primes";
export const code = `(n = 2000000) => {
  let sieve = new Uint8Array(n + 1);
  sieve[0] = 1;
  sieve[1] = 1;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (sieve[i] === 0) {
      for (let j = i + i; j <= n; j += i) {
        if (sieve[j] === 0) {
          sieve[j] = 1;
        }
      }
    }
  }

  return sieve.reduce((acc, curr, idx) => {
    if (curr === 0) {
      acc += idx;
    }
    return acc;
  }, 0);
};`;

export const fn = (n = 2000000) => {
  return new Promise((resolve, reject) => {
    try {
      let sieve = new Uint8Array(n + 1);
      sieve[0] = 1;
      sieve[1] = 1;
      for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (sieve[i] === 0) {
          for (let j = i + i; j <= n; j += i) {
            if (sieve[j] === 0) {
              sieve[j] = 1;
            }
          }
        }
      }
      const answer = sieve.reduce((acc, curr, idx) => {
        if (curr === 0) {
          acc += idx;
        }
        return acc;
      }, 0);
      resolve(answer);
    } catch (error) {
      reject(error);
    }
  });
};
