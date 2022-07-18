import React from 'react';
import styles from './Button.module.scss';

// eslint-disable-next-line react/prop-types
export const Button = ({ value }) => (
  <button type="button" className={styles.button}>
    {value}
  </button>
);
