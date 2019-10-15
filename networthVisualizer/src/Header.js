import React, { useState, useEffect } from "react";
import CalculatorLogo from './img/logo1.jpg';


// const s = {
  
// }

const Header = (props) => {
  return (
    <div className="header">
      <div style={{ marginLeft: '25px', padding: '10px', fontSize: '25px', fontFamily: 'Caveat', color: '#ffff' }}>
        Net-Calculcator
      </div>
      <div>
        <img src={CalculatorLogo} alt='Girl in a jacket' width='45' height='45' style={{ marginRight: '20px' }} />
      </div>
    </div>
  );
}

export default Header;
