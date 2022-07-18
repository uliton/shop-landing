import React from 'react';
import styles from './Title.module.scss';

// eslint-disable-next-line react/prop-types
export const Title = ({ value }) => (
  <span className={styles.title}>
    {value}
  </span>
);
