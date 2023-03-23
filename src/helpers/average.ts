export type MyObjType = {
  [index: string]:number
};

export const average = (cells: MyObjType[]) => {
  const average: {[index: string]:number} = {};
  if (cells[0]) {
    const column = Object.values(cells[0]);
    for (let i = 0; i < column.length; i += 1) {
      let sum = 0;
      for (let j = 0; j < cells.length; j += 1) {
        sum += cells[j][i];
      }
      average[i] = Math.round(sum / cells.length);
    }
  }
  return average;
};
