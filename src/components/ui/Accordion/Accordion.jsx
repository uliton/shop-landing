/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { SubTitle } from '../SubTitle';
import up from '../../../images/services/arrow-close.svg';
import down from '../../../images/services/arrow-open.svg';
import green from '../../../images/services/dot-green.svg';
import blue from '../../../images/services/dot-blue.svg';

import styles from './Accordion.module.scss';

export const Accordion = ({ title, content, index }) => {
  const [selected, setSelected] = useState(null);

  // eslint-disable-next-line consistent-return
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.item}>
        <div className={styles.header}>
          <div className={styles.dot}>
            {selected
              ? <img src={blue} alt="open" />
              : <img src={green} alt="cloce" />
            }
          </div>

          <button
            type="button"
            className={styles.title}
            onClick={() => toggle(index)}
          >
            <SubTitle value={title} />
            {selected
              ? <img src={up} alt="up" />
              : <img src={down} alt="down" />
            }
          </button>
        </div>

        <div className={selected === index ? styles.show : styles.hide}>
          <div className={styles.content}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
