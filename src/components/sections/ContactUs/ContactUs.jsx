/* eslint-disable max-len */
import React from 'react';
import styles from './ContactUs.module.scss';
import { ONLINE_ORDERS_MOCK } from '../../../mockData';
import { Title } from '../../ui/Title';
import { Description } from '../../ui/Description';
import { Button } from '../../ui/Button';

const contactUs = ONLINE_ORDERS_MOCK.find(contact => contact.section === 'contactUs');

export const ContactUs = () => (
  <section className={styles.container}>
    <div className={styles.title}>
      <Title value={contactUs.title} />
    </div>
    <p className={styles.description}>
      <Description value={contactUs.description} />
    </p>
    <input type="text" className={styles.input} placeholder="Имя" />
    <input type="text" className={styles.input} placeholder="Telegram/Viber" />
    <input type="text" className={styles.input} placeholder="Email" />
    <div className={styles.button}>
      <Button value={contactUs.button} />
    </div>
    <div className={styles.image}> </div>
    <div className={styles.image2}> </div>
  </section>
);
