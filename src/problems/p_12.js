export const id = 12;
export const title = "Highly divisible triangular number";
export const code = `(f = 500) => {
  const has500Factors = (n, f) => {
    try {
      let factors = 0;
      for (let i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
        if (n % i === 0) {
          factors += 1;
          if (n / i !== i) {
            factors += 1;
          }
          if (factors > f) return true;
        }
      }
      return false;
    } catch (error) {
      throw (error)
    }
  };
  try {
    let nth = 1;
    let t = nth;
    while (true) {
      t = (nth * (nth + 1)) / 2;
      if (has500Factors(t, f)) {
        break;
      }
      nth++;
    }
    return t;
  } catch (error) {
    throw (error)
  }
}`;
export const naive = `(f = 500) => {
  const has500Factors = (n, f) => {
    try {
      let factors = 0;
      for (let i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
        if (n % i === 0) {
          factors += 1;
          if (n / i !== i) {
            factors += 1;
          }
          if (factors > f) return true;
        }
      }
      return false;
    } catch (error) {
      throw (error)
    }
  };
  try {
    let nth = 1;
    let t = nth;
    while (true) {
      t = (nth * (nth + 1)) / 2;
      if (has500Factors(t, f)) {
        break;
      }
      nth++;
    }
    return t;
  } catch (error) {
    throw (error)
  }
}
`;
export const fn = (f = 500) => {
  return new Promise((resolve, reject) => {
    const has500Factors = (n, f) => {
      try {
        let factors = 0;
        for (let i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
          if (n % i === 0) {
            factors += 1;
            if (n / i !== i) {
              factors += 1;
            }
            if (factors > f) return true;
          }
        }
        return false;
      } catch (error) {
        reject(error);
      }
    };
    try {
      let nth = 1;
      let t = nth;
      while (true) {
        t = (nth * (nth + 1)) / 2;
        if (has500Factors(t, f)) {
          break;
        }
        nth++;
      }
      resolve(t);
    } catch (error) {
      reject(error);
    }
  });
};
