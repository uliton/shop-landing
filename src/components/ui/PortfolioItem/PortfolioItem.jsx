import React from 'react';
import styles from './PortfolioItem.module.scss';

// eslint-disable-next-line react/prop-types
export const PortfolioItem = ({ title, description, img }) => (
  <div className={styles.portfolioitem}>
    <div className={styles.hover}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
    <div className={styles.image}>
      <img src={img} alt="img" className={styles.image} />
    </div>
  </div>
);
