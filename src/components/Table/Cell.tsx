import React from 'react';

interface childrenProps {
  incr: (text: React.MouseEvent<HTMLElement>) => void,
  activOn: (e: React.MouseEvent<HTMLElement>) => void,
  activOff: () => void,
  id: string | undefined,
  className: string,
  cellValue: number,
}

const Cell: React.FC<childrenProps> = ({
  incr, activOn, activOff, id, className, cellValue,
}): JSX.Element => (
  <td
    id={id}
    className={className}
    onClick={(e: React.MouseEvent<HTMLElement>) => incr(e)}
    onMouseEnter={(e: React.MouseEvent<HTMLElement>) => activOn(e)}
    onMouseLeave={activOff}
    // onKeyPress={(e: React.KeyboardEvent<HTMLTableCellElement>) => incr(e)}
    // role="presentation"
    role="gridcell"
  >
    {cellValue}
  </td>
);

export default Cell;
