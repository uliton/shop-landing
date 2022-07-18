/* eslint-disable max-len */
import React from 'react';
import { ONLINE_ORDERS_MOCK } from '../../../mockData';
import { Title } from '../../ui/Title';
import { Accordion } from '../../ui/Accordion/Accordion';

import styles from './Services.module.scss';

const services = ONLINE_ORDERS_MOCK.filter(service => service.section === 'services');

const { title } = services[0];

export const Services = () => (
  <section className={styles.container} id="services">
    <div className={styles.title}>
      <Title value={title} />
    </div>
    {services.map(
      (service, i) => (
        <div key={service.id}>
          <Accordion title={service.subtitle} content={service.description} index={i + 1} />
        </div>
      ),
    )}
  </section>
);
