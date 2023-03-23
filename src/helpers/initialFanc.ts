import { average } from './average';

const min = 100;
const max = 999;
type MyType = {
  [key: string]:number
};

export function initialFanc(newRows: number, newColumns: number): object[] {
  const initCells: MyType[] = [];
  const generateCol = () => {
    const o: {[key: string]:number} = {};
    for (let i = 0; i < newColumns; i += 1) {
      if (newColumns) {
        o[i] = Math.round(min + Math.random() * (max - min));
      }
    }
    initCells.push(o);
  };
  for (let j = 0; j < newRows; j += 1) {
    generateCol();
  }
  const averageCells = average(initCells);
  return [...initCells, averageCells];
}
