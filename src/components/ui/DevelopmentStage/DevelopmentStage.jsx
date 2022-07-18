/* eslint-disable max-len */
import React from 'react';
import styles from './DevelopmentStage.module.scss';
import { SubTitle } from '../SubTitle';
import { Description } from '../Description';

// eslint-disable-next-line react/prop-types
export const DevelopmentStage = ({ subtitle, description, image }) => (
  <div className={styles.stage}>
    <div>
      <div className={styles.subtitle}>
        <SubTitle value={subtitle} />
      </div>
      <div className={styles.description}>
        <Description value={description} />
      </div>
    </div>
    <div className={styles.image}>
      <img src={image} alt="" />
    </div>
  </div>
);
