import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

import PieSvg from './PieSvg';
import Header from './Header';

import './styles.css';

const s = {
  top: {
    marginTop: '20px',
  },
}

const App = () => {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.trunc(Math.random() * 100) : value
    }));


  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  // const newData = [
  //   {assets: 0, value: 25},
  //   {liablities: 1, value: 95},
  //   {investments: 2, value: 52},
  // ]

  useEffect(
    () => {
      setData(generateData());
    },
    [!data]
  );

  return (
    <div className='App' style={{ background: '#fff' }}>
    <Header />
      <div style={s.top}>
        <button onClick={changeData}>Transform</button>
      </div>
      <div style={s.top}>
        <PieSvg
          data={data}
          width={700}
          height={700}
          innerRadius={250}
          outerRadius={350}
        />
      </div>
    </div>
  );
}

export default App;

// Data shape:
// data: Array(5)
// 0: {date: 0, value: 74}
// 1: {date: 1, value: 95}
// 2: {date: 2, value: 52}
// 3: {date: 3, value: 60}
// 4: {date: 4, value: 74}

