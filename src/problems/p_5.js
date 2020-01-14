import * as smart from "./smarties/p_5_smart";
export const id = 5;
export const title = "Smallest multiple";
export const alt = smart.code;
export const url = smart.url;
export const altFn = smart.fn;
export const code = `() => {
  const isGood = (val, n = 20) => {
    for (let i = 2; i < n + 1; i++) {
      if (val % i !== 0) {
        return false;
      }
    }
    return true;
  };
  
  let val = 1;
  while (!isGood(val)) {
    val++;
  }
  return val;
};`;

export const fn = () => {
  return new Promise((resolve, reject) => {
    try {
      const isGood = (val, n = 20) => {
        for (let i = 2; i < n + 1; i++) {
          if (val % i !== 0) {
            return false;
          }
        }
        return true;
      };
      let val = 1;
      while (!isGood(val)) {
        val++;
      }
      resolve(val);
    } catch (error) {
      reject(error);
    }
  });
};
