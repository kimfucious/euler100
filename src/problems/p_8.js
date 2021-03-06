import { n1000 } from "../data/fixtures";
export const id = 8;
export const title = "Largest product in a series";
export const code = `(span = 13, n = n1000) => {
  const getProduct = arr => {
    if (arr.includes("0")) return 0;

    let product = 1;

    while (arr.length) {
      product *= parseInt(arr.pop());
    }

    return product;
  };

  const getMaxProduct = n => {
    let max = 0;
    let i = 0;
    const arr = n.split("");

    while (arr[i + span - 1]) {
      const slice = arr.slice(i, i + span);
      let product = -1;

      if (slice.length === span && !slice.includes("0")) {
        product = getProduct(slice);
      }

      if (product > max) {
        max = product;
      }
      i++;
    }

    return max;
  };

  if (n.length % span === 0) {
    return getMaxProduct(n);
  }

  return Math.max(getMaxProduct(n), getProduct(n.slice(-span).split("")));
};`;

export const fn = (span = 13, n = n1000) => {
  return new Promise((resolve, reject) => {
    const getProduct = arr => {
      if (arr.includes("0")) {
        return 0;
      }
      let product = 1;
      try {
        while (arr.length) {
          product *= parseInt(arr.pop());
        }
        return product;
      } catch (error) {
        reject(error);
      }
    };
    const getMaxProduct = n => {
      try {
        let max = 0;
        let i = 0;
        const arr = n.split("");
        while (arr[i + span - 1]) {
          const slice = arr.slice(i, i + span);
          let product = -1;
          if (slice.length === span && !slice.includes("0")) {
            product = getProduct(slice);
          }
          if (product > max) {
            max = product;
          }
          i++;
        }
        return max;
      } catch (error) {
        reject(error);
      }
    };
    if (n.length % span === 0) {
      return getMaxProduct(n);
    }
    resolve(Math.max(getMaxProduct(n), getProduct(n.slice(-span).split(""))));
  });
};
