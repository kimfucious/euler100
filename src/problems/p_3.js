import * as smart from "./smarties/p_3_smart";
export const id = 3;
export const title = "Largest prime factor";
export const alt = smart.code;
export const url = smart.url;
export const altFn = smart.fn;
export const code = `(n = 600851475143) => {
  const factorize = num => {
    let factorMap = {};
    let n = num;
    let i = 2;

    const count = n => {
      if (factorMap[n]) ++factorMap[n];
      else factorMap[n] = 1;
    };

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
    return factorMap;
  };

  let factorMap = factorize(n);
  let max = 0;
  for (let i in factorMap) {
    max = Math.max(max, i);
  }
  return max;
};
`;

export const fn = (n = 600851475143) => {
  return new Promise((resolve, reject) => {
    const factorize = num => {
      try {
        let factorMap = {};
        let n = num;
        let i = 2;

        const count = n => {
          if (factorMap[n]) ++factorMap[n];
          else factorMap[n] = 1;
        };

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
        return factorMap;
      } catch (error) {
        reject(error);
      }
    };

    try {
      let factorMap = factorize(n);
      let max = 0;
      for (let i in factorMap) {
        max = Math.max(max, i);
      }
      resolve(max);
    } catch (error) {
      reject(error);
    }
  });
};
