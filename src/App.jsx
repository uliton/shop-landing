import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Menu } from './components/Menu/Menu';
import './App.scss';

export const App = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const menuHandler = () => {
    if (menuStatus) {
      setMenuStatus(false);
    } else {
      setMenuStatus(true);
    }
  };

  return (
    <div className="starter">
      <Navigation menuHandler={menuHandler} />
      {menuStatus && (
        <Menu />
      )}
    </div>
  );
};
