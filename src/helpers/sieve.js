export const sieve = n => {
  let sum = 1;
  var data = new Uint8Array(n + 1);
  data[0] = 1;
  data[1] = 1;
  let boundary = Math.floor(Math.sqrt(n));
  for (var i = 4; i <= boundary; i += 2) {
    if (data[i] === 0) {
      for (let j = i * i; j <= n; j += i + i) {
        data[j] = 1;
        sum += j;
      }
    }
  }
  return (n * (n + 1)) / 2 - sum;
};
