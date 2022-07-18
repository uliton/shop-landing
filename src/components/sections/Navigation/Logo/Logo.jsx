import React from 'react';
import './Logo.scss';
import logo from '../../../../images/logo/logo.svg';

export const Logo = () => (
  <a href="/">
    <div className="logo">
      <img src={logo} alt="logo" className="logo__image" />
    </div>
  </a>
);
