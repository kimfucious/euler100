export const id = 9;
export const title = "Special Pythagorean triplet";
export const code = `(n = 1000) => {
  for (let c = Math.floor(n / 3 + 1); c < n / 2; c++) {
    let abSquared = c * c - n * n + 2 * n * c;
    let abSquareRoot = Math.floor(Math.sqrt(abSquared));
    if (abSquareRoot * abSquareRoot === abSquared) {
      let b = (n - c + abSquareRoot) / 2;
      let a = n - b - c;
      return a * b * c;
    }
  }
  return -1;
}`;

export const fn = (n = 1000) => {
  return new Promise((resolve, reject) => {
    try {
      for (let c = Math.floor(n / 3 + 1); c < n / 2; c++) {
        let abSquared = c * c - n * n + 2 * n * c;
        let abSquareRoot = Math.floor(Math.sqrt(abSquared));
        if (abSquareRoot * abSquareRoot === abSquared) {
          let b = (n - c + abSquareRoot) / 2;
          let a = n - b - c;
          resolve(a * b * c);
        }
      }
      resolve(-1);
    } catch (error) {
      reject(error);
    }
  });
};
