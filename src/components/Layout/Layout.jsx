import React, { useState } from 'react';
import { Navigation } from '../sections/Navigation';
import { Menu } from '../sections/Navigation/Menu';
import { Footer } from '../sections/Footer';

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(false);

  const menuHandler = () => {
    if (menuStatus) {
      setMenuStatus(false);
    } else {
      setMenuStatus(true);
    }
  };

  return (
    <>
      <Navigation menuHandler={menuHandler} />
      {menuStatus && (
        <Menu />
      )}
      {children}
      <Footer />
    </>
  );
};
