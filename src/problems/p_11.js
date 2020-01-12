import { problem11Grid } from "../data/fixtures";
export const id = 11;
export const title = "Largest product in a grid";
export const code = `(grid = problem11Grid()) => {
  let max = 0;

  const getMax = arr => {
    for (let row of arr) {
      let start = 0;
      let end = 4;
      while (row.length >= end) {
        const product = row.slice(start, end).reduce((arr, curr) => arr * curr);
        if (product > max) {
          max = product;
        }
        start++;
        end++;
      }
    }
  };

  const getVertMax = () => {
    let arr = [];
    const vGrid = [];
    let row = 0;
    let col = 0;
    while (col < 20) {
      while (row < 20) {
        arr.push(grid[row][col]);
        row++;
      }
      row = 0;
      col++;
      vGrid.push(arr);
      arr = [];
    }
    getMax(vGrid);
  };

  const getDiag1Max = () => {
    const addDiag = arr => {
      if (arr.length >= 4) {
        dGrid.push(arr);
        if (arr.length % 4 !== 0) {
          dGrid.push(arr.slice(-4));
        }
      }
    };
    const dGrid = [];
    let arr = [];
    let col = 0,
      row = 0,
      pass = 0;
    let len = grid.length;

    while (col < len) {
      while (col >= 0) {
        arr.push(grid[row][col]);
        row++;
        col--;
      }
      addDiag(arr);
      arr = [];
      pass++;
      col = pass;
      row = 0;

      if (pass === len) {
        pass = 0;
        col = len - 1;
        while (row < len) {
          while (col >= pass) {
            arr.push(grid[row][col]);
            row++;
            col--;
          }
          addDiag(arr);
          arr = [];
          pass++;
          row = pass;
          col = len - 1;
        }
        return getMax(dGrid);
      }
    }
  };

  const getDiag2Max = () => {
    const addDiag = arr => {
      if (arr.length >= 4) {
        dGrid.push(arr);
        if (arr.length % 4 !== 0) {
          dGrid.push(arr.slice(-4));
        }
      }
    };
    const dGrid = [];
    let arr = [];
    let len = grid.length;
    let col = len - 1;
    let pass = 0;
    let row = 0;

    while (col >= 0) {
      while (row >= 0) {
        arr.push(grid[row][col]);
        col--;
        row--;
      }
      addDiag(arr);
      arr = [];
      col = len - 1;
      pass++;
      row = pass;
      if (pass === len) {
        pass = 1;
        col--;
        row = len - 1;

        while (pass < len) {
          while (col >= 0) {
            arr.push(grid[row][col]);
            row--;
            col--;
          }
          addDiag(arr);
          arr = [];
          pass++;
          row = len - 1;
          col = len - 1 - pass;
        }
        return getMax(dGrid);
      }
    }
  };

  getMax(grid);
  getVertMax();
  getDiag1Max();
  getDiag2Max();
  return max;
}`;

export const fn = (grid = problem11Grid()) => {
  return new Promise((resolve, reject) => {
    try {
      let max = 0;

      const getMax = arr => {
        for (let row of arr) {
          let start = 0;
          let end = 4;
          while (row.length >= end) {
            const product = row
              .slice(start, end)
              .reduce((arr, curr) => arr * curr);
            if (product > max) {
              max = product;
            }
            start++;
            end++;
          }
        }
      };

      const getVertMax = () => {
        let arr = [];
        const vGrid = [];
        let row = 0;
        let col = 0;
        while (col < 20) {
          while (row < 20) {
            arr.push(grid[row][col]);
            row++;
          }
          row = 0;
          col++;
          vGrid.push(arr);
          arr = [];
        }
        getMax(vGrid);
      };

      const getDiag1Max = () => {
        const addDiag = arr => {
          if (arr.length >= 4) {
            dGrid.push(arr);
            if (arr.length % 4 !== 0) {
              dGrid.push(arr.slice(-4));
            }
          }
        };
        const dGrid = [];
        let arr = [];
        let col = 0,
          row = 0,
          pass = 0;
        let len = grid.length;

        while (col < len) {
          while (col >= 0) {
            arr.push(grid[row][col]);
            row++;
            col--;
          }
          addDiag(arr);
          arr = [];
          pass++;
          col = pass;
          row = 0;

          if (pass === len) {
            pass = 0;
            col = len - 1;
            while (row < len) {
              while (col >= pass) {
                arr.push(grid[row][col]);
                row++;
                col--;
              }
              addDiag(arr);
              arr = [];
              pass++;
              row = pass;
              col = len - 1;
            }
            return getMax(dGrid);
          }
        }
      };

      const getDiag2Max = () => {
        const addDiag = arr => {
          if (arr.length >= 4) {
            dGrid.push(arr);
            if (arr.length % 4 !== 0) {
              dGrid.push(arr.slice(-4));
            }
          }
        };
        const dGrid = [];
        let arr = [];
        let len = grid.length;
        let col = len - 1;
        let pass = 0;
        let row = 0;

        while (col >= 0) {
          while (row >= 0) {
            arr.push(grid[row][col]);
            col--;
            row--;
          }
          addDiag(arr);
          arr = [];
          col = len - 1;
          pass++;
          row = pass;
          if (pass === len) {
            pass = 1;
            col--;
            row = len - 1;

            while (pass < len) {
              while (col >= 0) {
                arr.push(grid[row][col]);
                row--;
                col--;
              }
              addDiag(arr);
              arr = [];
              pass++;
              row = len - 1;
              col = len - 1 - pass;
            }
            return getMax(dGrid);
          }
        }
      };

      getMax(grid);
      getVertMax();
      getDiag1Max();
      getDiag2Max();
      resolve(max);
    } catch (error) {
      reject(error);
    }
  });
};
