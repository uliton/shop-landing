import React from 'react';
import './Logo.scss';
import logo from '../../images/Frame.svg';

export const Logo = () => (
  <a href="/">
    <div className="logo">
      <img src={logo} alt="logo" className="logo__image" />
    </div>
  </a>
);
