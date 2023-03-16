import React, { useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [initColumns, setInitColumns] = useState<number | string>(5);
  const [initRows, setInitRows] = useState<number | string>(5);
  const [initNear, setinitNear] = useState<number | string>(5);
  const [valueError, setError] = React.useState<string>('');
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (initColumns < 100 && initRows < 100 && initNear < 100) {
      navigate('/table');
      setInitColumns(+initColumns);
      setInitRows(initRows);
      setinitNear(initNear);
      setError('');
    } else {
      setError('enter: value > 0 < 100');
    }
  };

  return (
    <div className="home">
      <div className="creat-wrap">
        <div className="input-wrap">
          <form className="homeForm">
            <label htmlFor="columns">columns</label>
            <input
              id="columns"
              type="number"
              name="columns"
              minLength={1}
              value={initColumns}
              onChange={(e) => setInitColumns(e.target.value)}
              required
            />
            <label htmlFor="rows">rows</label>
            <input
              id="rows"
              type="number"
              name="rows"
              minLength={1}
              value={initRows}
              onChange={(e) => setInitRows(e.target.value)}
              required
            />
            <label htmlFor="near">near</label>
            <input
              id="near"
              type="number"
              name="near"
              value={initNear}
              onChange={(e) => setinitNear(e.target.value)}
              required
            />
            <div className="Error">{valueError}</div>
            <button type="button" className="buttonAdd" disabled={initColumns < 1 || initRows < 1 || initNear < 1} onClick={(e) => handleClick(e)}>
              Add New Table
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Home;
