import React from 'react';
import { Burgermenu } from '../Burgermenu';
import { Logo } from '../Logo';
import './Navigation.scss';

// eslint-disable-next-line react/prop-types
export const Navigation = ({ menuHandler }) => (
  <div className="nav">
    <Logo />
    <Burgermenu menuHandler={menuHandler} />
  </div>
);
