import React from 'react';
import styles from './SubTitle.module.scss';

// eslint-disable-next-line react/prop-types
export const SubTitle = ({ value }) => (
  <h3 className={styles.subtitle}>
    {value}
  </h3>
);
