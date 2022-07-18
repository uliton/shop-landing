import React from 'react';
import './Menu.scss';

export const Menu = () => (
  <div className="menu">
    <ul className="menu__list">
      <li className="menu__item">
        <a href="#services" className="menu__item--link">
          Услуги
        </a>
      </li>
      <li className="menu__item">
        <a href="#portfolio" className="menu__item--link">
          Портфолио
        </a>
      </li>
      <li className="menu__item">
        <a href="#levels" className="menu__item--link">
          Этапы
        </a>
      </li>
      <li className="menu__item">
        <a href="#designes" className="menu__item--link">
          Дизайнеры
        </a>
      </li>
    </ul>
  </div>
);
