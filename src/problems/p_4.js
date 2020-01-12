export const id = 4;
export const title = "Largest palindrome product";
export const code = `() => {
  let max = 0;
  const isPalindrome = n => {
    const str = n.toString();
    if (
      str ===
      str
        .split("")
        .reverse()
        .join("")
    ) {
      return true;
    }
    return false;
  };
  for (let i = 999; i > 0; i--) {
    for (let j = 999; j > 0; j--) {
      const product = i * j;
      if (product > max) {
        if (isPalindrome(product)) {
          max = product;
        }
      } else {
        break;
      }
    }
  }
  return max;
}`;
export const fn = () => {
  return new Promise((resolve, reject) => {
    try {
      let max = 0;
      const isPalindrome = n => {
        const str = n.toString();
        if (
          str ===
          str
            .split("")
            .reverse()
            .join("")
        ) {
          return true;
        }
        return false;
      };
      for (let i = 999; i > 0; i--) {
        for (let j = 999; j > 0; j--) {
          const product = i * j;
          if (product > max) {
            if (isPalindrome(product)) {
              max = product;
            }
          } else {
            break;
          }
        }
      }
      resolve(max);
    } catch (error) {
      reject(error);
    }
  });
};
