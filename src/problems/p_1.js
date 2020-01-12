export const id = 1;
export const title = "Multiples of 3 or 5";
export const code = `() => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
`;
export const fn = () => {
  return new Promise((resolve, reject) => {
    try {
      let sum = 0;
      for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
        }
      }
      resolve(sum);
    } catch (error) {
      reject(error);
    }
  });
};
