import React from "react";
import CalculatorLogo from './img/logo1.jpg';


const s = {
  leftHeader: {
    marginLeft: '225px',
    padding: '10px',
    fontSize: '25px',
    fontFamily: 'Caveat',
    color: '#ffff',
  },
  img: {
    marginRight: '20px',
    marginRight: '85px',
  }
}

const Header = (props) => {
  return (
    <div>
      <div style={s.leftHeader}>
        Net-Calculcator
      </div>
        <img
          src={CalculatorLogo}
          alt='Calculator' 
          width='45'
          height='45'
          style={s.img}
        />
    </div>
  );
}

export default Header;
