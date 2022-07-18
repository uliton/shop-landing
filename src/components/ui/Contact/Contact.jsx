/* eslint-disable react/prop-types */
import React from 'react';
import icon from '../../../images/footer/viber.svg';

import styles from './Contact.module.scss';

export const Contact = ({ name, phone }) => (
  <div className={styles.container}>
    <img src={icon} alt="viber" className={styles.icon} />
    <p className={styles.name}>{name}</p>
    <a href={`tel:${phone}`} className={styles.phone}>{phone}</a>
  </div>
);
