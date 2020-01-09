import { isPrime } from "../helpers";
export const id = 7;
export const title = "10001st prime";
export const fn = (n = 10001) => {
  let primeCounter = 2;
  let x = 2;
  let answer = null;
  try {
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
  } catch (error) {
    throw error;
  }
};
