export const url = "https://www.xarg.org/puzzle/project-euler/problem-12/";
export const code = `(x = 500) => {
  const tau = num => {
    let n = num;
    let i = 2;
    let p = 1;

    if (num === 1) return 1;

    while (i * i <= n) {
      let c = 1;
      while (n % i === 0) {
        n /= i;
        c++;
      }
      i++;
      p *= c;
    }

    if (n === num || n > 1) p *= 1 + 1;

    return p;
  };

  let n = 1;
  let d = 1;

  while (tau(d) <= x) {
    n++;
    d += n;
  }

  return d;
};`;

export const fn = (x = 500) => {
  return new Promise((resolve, reject) => {
    const tau = num => {
      try {
        let n = num;
        let i = 2;
        let p = 1;

        if (num === 1) return 1;

        while (i * i <= n) {
          let c = 1;
          while (n % i === 0) {
            n /= i;
            c++;
          }
          i++;
          p *= c;
        }

        if (n === num || n > 1) p *= 1 + 1;

        return p;
      } catch (error) {
        reject(error);
      }
    };
    try {
      let n = 1;
      let d = 1;

      while (tau(d) <= x) {
        n++;
        d += n;
      }
      console.log("SMART!");
      resolve(d);
    } catch (error) {
      reject(error);
    }
  });
};
