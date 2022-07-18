import React from 'react';
import './NavList.scss';

export const NavList = () => (
  <div className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <a href="#services" className="nav__link">
          Услуги
        </a>
      </li>
      <li className="nav__item">
        <a href="#portfolio" className="nav__link">
          Портфолио
        </a>
      </li>
      <li className="nav__item">
        <a href="#levels" className="nav__link">
          Этапы
        </a>
      </li>
      <li className="nav__item">
        <a href="#designes" className="nav__link">
          Дизайнеры
        </a>
      </li>
      <li className="nav__item">
        <button type="button" className="nav__button">
          Заказать
        </button>
      </li>
    </ul>
  </div>
);
