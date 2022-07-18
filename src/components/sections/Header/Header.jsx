/* eslint-disable max-len */
import React from 'react';
import styles from './Header.module.scss';
import { ONLINE_ORDERS_MOCK } from '../../../mockData';
import { MainTitle } from '../../ui/MainTitle';
import { Description } from '../../ui/Description';
import { Button } from '../../ui/Button';

const header = ONLINE_ORDERS_MOCK.find(head => head.section === 'header');

export const Header = () => (
  <section className={styles.header}>
    <span className={styles.images}> </span>
    <div className={styles.content}>
      <h1 className={styles.title}>
        <MainTitle value={header.maintitle} />
      </h1>
      <p className={styles.description}>
        <Description value={header.description} />
      </p>
      <div className={styles.button}>
        <Button value={header.button} />
      </div>
    </div>
  </section>
);
