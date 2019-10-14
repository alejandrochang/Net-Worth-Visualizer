import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import PieSvg from "./PieSvg";

import "./styles.css";

function App() {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.floor(Math.random() * 100) : value
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  useEffect(
    () => {
      setData(generateData());
    },
    [!data]
  );

  return (
    <div className="App">
      <div>
        <button onClick={changeData}>Transform</button>
        <span className="label">Networth Tracker</span>
      </div>
      <div>
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
