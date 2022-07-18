/* eslint-disable max-len */
import React from 'react';
import styles from './Portfolio.module.scss';
import { ONLINE_ORDERS_MOCK } from '../../../mockData';
import { PortfolioItem } from '../../ui/PortfolioItem/PortfolioItem';
import { Title } from '../../ui/Title';

const projects = ONLINE_ORDERS_MOCK.filter(project => project.section === 'portfolio');
const { title } = projects[0];

export const Portfolio = () => (
  <section className={styles.container} id="portfolio">
    <div className={styles.title}>
      <Title value={title} />
    </div>
    <div className={styles.projects}>
      {projects.map(project => (
        <div key={project.id}>
          <PortfolioItem img={project.img} title={project.subtitle} description={project.description} />
        </div>
      ))}
    </div>
  </section>
);
