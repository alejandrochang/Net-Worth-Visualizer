import React from 'react';

import './styles.css';


const Navigation = (props) => {
  return (
    <div class="topnav" id="myTopnav">
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#news">News</a>
      <a href="#home" class="active">Home</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Navigation;
