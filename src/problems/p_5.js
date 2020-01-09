export const id = 5;
export const title = "Smallest multiple";
export const fn = () => {
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
    return val;
  } catch (error) {
    throw error;
  }
};
