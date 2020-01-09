export const id = 2;
export const title = "Even Fibonacci numbers";
export const code = `() => {
  let sum = 0;
  let a = 0;
  let b = 1;
  let fib = 0;
  while (fib < 4000000) {
    fib = a + b;
    a = b;
    b = fib;
    if (fib % 2 === 0) {
      sum += fib;
    }
  }
  return sum;
}`;
export const fn = () => {
  let sum = 0;
  let a = 0;
  let b = 1;
  let fib = 0;
  while (fib < 4000000) {
    fib = a + b;
    a = b;
    b = fib;
    if (fib % 2 === 0) {
      sum += fib;
    }
  }
  return sum;
};
