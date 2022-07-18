import React from 'react';
import logo from '../../../images/logo/logo.svg';

import styles from './Logo.module.scss';

export const Logo = () => (
  <div className={styles.container}>
    <img src={logo} alt="logo" className={styles.logo} />
  </div>
);
