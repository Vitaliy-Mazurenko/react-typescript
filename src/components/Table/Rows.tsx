import React, { useState, useContext } from 'react';
import Cells from './Cells';
import { Context } from '../../context/context';
import { average } from '../../helpers/average';
import type { MyObjType } from '../../helpers/average';

interface Props {
  activOn: () => void,
  activOff: () => void,
  nearest: string | null,
  activ: string,
  cell: object,
  i: number | string,
}

const Rows: React.FunctionComponent<Props> = ({
  activOn, activOff, nearest, activ, cell, i,
}: Props) => {
  const {
    cells, setCells,
  } = useContext(Context);
  const [percent, setPercent] = useState('');

  const onDelete = (id: string) => {
    let newCells: MyObjType[] = [
      ...cells.slice(0, +id), ...cells.slice(+id + 1),
    ];
    newCells = [...newCells.slice(0, -1)];

    const averageCells = average(newCells);
    setCells([...newCells, averageCells]);
  };

  const incr = (text: string) => {
    const id = text.split('c')[0];
    const incrId = +text.split('c')[1];
    const incrCells = [
      ...cells.slice(+id, +id + 1),
    ];

    const incrItems: {[key: string]:number} = {};
    function incrRows(cells: object) {
      const cloneCells = JSON.parse(JSON.stringify(cells));
      if (cloneCells[0]) {
        const column = Object.values(cloneCells[0]);
        for (let i = 0; i < column.length; i += 1) {
          if (i === incrId) {
            // eslint-disable-next-line no-plusplus
            ++cloneCells[0][incrId];
          }
          incrItems[i] = cloneCells[0][i];
        }
      }
    }
    incrRows(incrCells);

    let newCells: MyObjType[] = [
      ...cells.slice(0, +id), incrItems, ...cells.slice(+id + 1),
    ];
    newCells = [...newCells.slice(0, -1)];

    const averageCells: MyObjType[] = average(newCells);
    setCells([...newCells, averageCells]);
  };

  const cellVal = Object.values(cell);
  const result = cellVal.reduce((sum, elem) => sum + elem, 0);

  const flatenned = [];
  if (cells[0]) {
    for (let i = 0; i < cells.length - 1; i += 1) {
      flatenned[i] = Object.values(cells[i]);
    }
  }
  function hoverOn(e: React.ChangeEvent<HTMLElement>) {
    const { id } = e.target;
    if (id === (`${i}r`)) {
      setPercent(`${i}r`);
    }
  }
  function hoverOff() {
    setPercent('');
  }

  return (
    <tr>
      <Cells
        incr={incr}
        activOn={activOn}
        activOff={activOff}
        nearest={nearest}
        activ={activ}
        percent={percent}
        cell={cell}
        i={i}
      />
      <td
        id={`${i}r`}
        className="tableRes"
        onMouseEnter={() => hoverOn}
        onMouseLeave={hoverOff}
      >
        {result}

      </td>
      <td className="tableEnd">
        <button
          type="button"
          color="secondary"
          id={i}
          onClick={() => onDelete(i)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Rows;
