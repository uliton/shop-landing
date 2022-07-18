import React from 'react';
import { Burgermenu } from './Burgermenu';
import { Logo } from './Logo';
import { NavList } from './NavList/NavList';
import './Navigation.scss';

// eslint-disable-next-line react/prop-types
export const Navigation = ({ menuHandler }) => (
  <section className="nav-container">
    <div className="navigation">
      <Logo />
      <NavList />
      <Burgermenu menuHandler={menuHandler} />
    </div>
  </section>
);
