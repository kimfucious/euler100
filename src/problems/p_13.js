/* eslint-disable no-useless-escape */
import { problem13String } from "../data/fixtures";
export const id = 13;
export const title = "Large Sum";
export const code = `(str = problem13String, digits = 50) => {
  let sum = 0;
  let start = 0;
  const loops = str.length / digits;

  for (let i = 0; i < loops; i++) {
    sum += parseInt(str.slice(start, start + digits));
    start += digits;
  }

  return parseInt(
    sum
      .toString()
      .replace(/\\./, "")
      .slice(0, 10)
  );
}
`;
export const fn = (str = problem13String, digits = 50) => {
  return new Promise((resolve, reject) => {
    try {
      let sum = 0;
      let start = 0;
      const loops = str.length / digits;
      for (let i = 0; i < loops; i++) {
        sum += parseInt(str.slice(start, start + digits));
        start += digits;
      }
      resolve(
        parseInt(
          sum
            .toString()
            .replace(/\./, "")
            .slice(0, 10)
        )
      );
    } catch (error) {
      reject(error);
      throw error;
    }
  });
};
