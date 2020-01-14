export const id = 7;
export const title = "10001st prime";
export const code = `(n = 10001) => {
  const isPrime = n => {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    if (n % 3 === 0) return n === 3;

    let squareRoot = Math.floor(1 + Math.sqrt(n));
    let i = 5;

    while (i <= squareRoot) {
      if (n % i === 0) return false;
      if (n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };

  let primeCounter = 2;
  let x = 2;
  let answer = null;

  while (primeCounter <= n) {
    if (x > 2 && x % 2 !== 0) {
      if (isPrime(x)) {
        primeCounter++;
        answer = x;
      }
    }
    x++;
  }

  return answer;
};`;
export const fn = (n = 10001) => {
  return new Promise((resolve, reject) => {
    try {
      const isPrime = n => {
        if (n < 2) return false;

        if (n % 2 === 0) return n === 2;

        if (n % 3 === 0) return n === 3;

        let squareRoot = Math.floor(1 + Math.sqrt(n));
        let i = 5;

        while (i <= squareRoot) {
          if (n % i === 0) return false;
          if (n % (i + 2) === 0) return false;
          i += 6;
        }
        return true;
      };

      let primeCounter = 2;
      let x = 2;
      let answer = null;
      while (primeCounter <= n) {
        if (x > 2 && x % 2 !== 0) {
          if (isPrime(x)) {
            primeCounter++;
            answer = x;
          }
        }
        x++;
      }
      resolve(answer);
    } catch (error) {
      reject(error);
    }
  });
};
