import React from 'react';
import { Contact } from '../../ui/Contact';
import { Logo } from '../../ui/Logo';
import { Network } from '../../ui/Network/Network';
import facebook from '../../../images/footer/fb.svg';
import telegram from '../../../images/footer/tg.svg';
import viber from '../../../images/footer/viber.svg';
import insta from '../../../images/footer/insta.svg';
import whatsapp from '../../../images/footer/whatsapp.svg';

import styles from './Footer.module.scss';

export const Footer = () => (
  <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.contacts}>
          <Contact name="Валерия" phone="+380505859409" />
          <Contact name="Анна" phone="+380505859409" />
          <Contact name="Григорий" phone="+380975548789" />
        </div>
        <div className={styles.networks}>
          <Network image={facebook} network="facebook" />
          <Network image={telegram} network="telegram" />
          <Network image={viber} network="viber" />
          <Network image={insta} network="instagram" />
          <Network image={whatsapp} network="whatsapp" />
        </div>
        <a href="mailto:hr@d-vs.com" className={styles.mail}>hr@d-vs.com</a>
      </div>
      <p className={styles.rights}>Developers 2018-2021  All rights reserved</p>
    </footer>
  </>
);
