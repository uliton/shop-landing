/* eslint-disable react/prop-types */
import React from 'react';

import styles from './LeftArrow.modul.scss';

export const LeftArrow = ({ text }) => (
  <div className={styles.container}>
    <button type="button" className={styles.button}>{text}</button>
  </div>
);
