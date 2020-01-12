export const id = 6;
export const title = "Sum square difference";
export const code = `(n = 100) => {
  let sumOfSquares = 0;
  let sum = 0;
  try {
    for (let i = 1; i < n + 1; i++) {
      sumOfSquares += Math.pow(i, 2);
      sum += i;
    }

    return Math.pow(sum, 2) - sumOfSquares;
  } catch (error) {
    throw error;
  }
}`;

export const fn = (n = 100) => {
  return new Promise((resolve, reject) => {
    try {
      let sumOfSquares = 0;
      let sum = 0;
      for (let i = 1; i < n + 1; i++) {
        sumOfSquares += Math.pow(i, 2);
        sum += i;
      }
      resolve(Math.pow(sum, 2) - sumOfSquares);
    } catch (error) {
      reject(error);
    }
  });
};
