import React from 'react';
import dot from '../../../../images/burgerMenu/dot.svg';
import './Burgermenu.scss';

// eslint-disable-next-line react/prop-types
export const Burgermenu = ({ menuHandler }) => (
  <a href="#menu" className="burgermenu" onClick={menuHandler}>
    <img src={dot} alt="" className="burgermenu__part" />
    <img src={dot} alt="" className="burgermenu__part" />
    <img src={dot} alt="" className="burgermenu__part" />
  </a>
);
