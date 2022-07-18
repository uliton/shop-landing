/* eslint-disable react/prop-types */
import React from 'react';

import styles from './Network.module.scss';

export const Network = ({ image, network }) => (
  <div className={styles.container}>
    <img src={image} alt={network} className={styles.icon} />
  </div>
);
