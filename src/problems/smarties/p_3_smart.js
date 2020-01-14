export const url = "https://gist.github.com/egeozcan/1788732";
export const code = `(n = 600851475143) => {
  let x = n;
  let i = 2;
  while (i < x) {
    while (x % i === 0) {
      (y => {
        x = y;
      })(x / i);
    }
    i++;
  }
  return x;
}`;
export const fn = (n = 600851475143) => {
  return new Promise((resolve, reject) => {
    try {
      let x = n;
      let i = 2;
      while (i < x) {
        while (x % i === 0) {
          // eslint-disable-next-line no-loop-func
          (y => {
            x = y;
          })(x / i);
        }
        i++;
      }
      resolve(x);
    } catch (error) {
      reject(error);
    }
  });
};
