import React from "react";
import CalculatorLogo from './img/logo1.jpg';


const s = {
  mainHeader: {
    width: '100%',
    justifyContent: 'space-between',
    height: '50px',
    display: 'flex',
    backgroundColor: 'rgb(38, 40, 60)',
    boxShadow: 'rgb(111, 133, 133) 0px 0px 1px',
  },
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
    <div style={s.mainHeader}>
      <div style={s.leftHeader}>
        Net-Calculcator
      </div>
      {/* <div> */}
        <img
          src={CalculatorLogo}
          alt='Calculator' 
          width='45'
          height='45'
          style={s.img}
        />
      {/* </div> */}
    </div>
  );
}

export default Header;
