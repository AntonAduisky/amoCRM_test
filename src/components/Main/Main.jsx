import React from 'react';
import Button from '../Button/Button';

import ListItem from '../ListItem/ListItem';

import './Main.scss';
import { DESKTOP_LIST_ITEMS, MOBILE_LIST_ITEMS } from './MainData';

function Main() {
  return (
    <main className="main">
      <div className="title">
        <h1 className="heading">
          Зарабатывайте больше <span className="heading_gradient">с WELBEX</span>
        </h1>

        <h2 className="heading__subtitle">Развиваем и контролируем продажи за вас</h2>
      </div>

      <div className="description">
        <h2 className="description__text">
          Вместе с <span className="description_gradient">бесплатной </span>{' '}
          <span className="description_gradient"> консультацией</span> мы дарим:
        </h2>

        <ul className="description__list description__list_mobile">
          {MOBILE_LIST_ITEMS.map((i) => (
            <ListItem key={i.title} title={i.title} isMobile />
          ))}
        </ul>

        <ul className="description__list description__list_desktop">
          {DESKTOP_LIST_ITEMS.map((i) => (
            <ListItem key={i.title} title={i.title} desc={i.desc} />
          ))}
        </ul>

        <Button text="Получить консультацию" />
      </div>
    </main>
  );
}

export default Main;
