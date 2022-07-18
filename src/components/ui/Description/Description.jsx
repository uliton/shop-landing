import React from 'react';
import styles from './Description.module.scss';

// eslint-disable-next-line react/prop-types
export const Description = ({ value }) => (
  <span className={styles.description}>
    {value}
  </span>
);
