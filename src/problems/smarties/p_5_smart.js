export const url = "https://www.xarg.org/puzzle/project-euler/problem-5/";
export const code = `(n = 20) => {
  let p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

  let sqrt_n = Math.sqrt(n),
    log_n = Math.log(n);
  let res = 1;
  for (let i = 0; p[i] <= sqrt_n; i++) {
    res *= Math.pow(p[i], Math.floor(log_n / Math.log(p[i])));
  }

  for (let i = 2; p[i] <= n; i++) {
    res *= p[i];
  }
  return res;
};
`;

export const fn = (n = 20) => {
  return new Promise((resolve, reject) => {
    try {
      let p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

      let sqrt_n = Math.sqrt(n);
      let log_n = Math.log(n);
      let res = 1;
      for (let i = 0; p[i] <= sqrt_n; i++) {
        res *= Math.pow(p[i], Math.floor(log_n / Math.log(p[i])));
      }

      for (let i = 2; p[i] <= n; i++) {
        res *= p[i];
      }
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
