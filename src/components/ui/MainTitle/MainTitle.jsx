import React from 'react';
import styles from './MainTitle.module.scss';

// eslint-disable-next-line react/prop-types
export const MainTitle = ({ value }) => (
  <span className={styles.maintitle}>
    {value}
  </span>
);
