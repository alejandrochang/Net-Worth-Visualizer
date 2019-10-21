import React from 'react';

import CalculatorLogo from './img/logo1.jpg';

import './styles.css';

// const s = {
//   leftHeader: {
//     float: 'left',
//     // padding: '10px',
//     // fontSize: '25px',
//     fontFamily: 'Caveat',
//     color: '#ffff',
//   },
//   img: {
//     marginRight: '20px',
//     marginRight: '85px',
//   }
// };

const handleClick = () => console.log('clicked icon');

const Navigation = (props) => {
  return (
    <div className="topnav" id="myTopnav">
      {/* <span style={s.leftHeader}>Net-Calculcator</span>
      <img
        src={CalculatorLogo}
        alt='Calculator' 
        width='45'
        height='45'
        style={s.img}
      /> */}
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#home" className="active">Home</a>
      <a href="javascript:void(0);" className="icon" onClick={handleClick()}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Navigation;
