import React from 'react';
import styles from './MoreInfo.module.scss';
import { ONLINE_ORDERS_MOCK } from '../../../mockData';
import { Title } from '../../ui/Title';
import { Description } from '../../ui/Description';
import { Button } from '../../ui/Button';

const moreInfo = ONLINE_ORDERS_MOCK.find(info => info.section === 'moreInfo');

export const MoreInfo = () => (
  <section className={styles.container} id="designes">
    <h2 className={styles.title}>
      <Title value={moreInfo.title} />
    </h2>
    <p className={styles.description}>
      <Description value={moreInfo.description} />
    </p>
    <div className={styles.button}>
      <Button value={moreInfo.button} />
    </div>
    <div className={styles.image}> </div>
  </section>
);
