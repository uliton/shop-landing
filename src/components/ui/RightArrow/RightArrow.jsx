/* eslint-disable react/prop-types */
import React from 'react';

import styles from './RightArrow.modul.scss';

export const RightArrow = ({ text }) => (
  <div className={styles.container}>
    <button type="button" className={styles.button}>{text}</button>
  </div>
);
