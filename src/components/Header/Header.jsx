import React from 'react';

import Link from '../Link/Link';
import Logo from '../../assets/logo_welbex.svg';

import './Header.scss';
import { HEADER_LINKS } from './constants';
import { CONTACT_LINKS } from '../Footer/constants';

function Header() {
  return (
    <header className="header">
      <div className="header__leftSide">
        <div className="logo">
          <img className="logo__img" src={Logo} alt="Welbex Logo" />
          <span className="logo__text">крупный интегратор CRM в Росcии и ещё 8 странах</span>
        </div>

        <div className="header__links">
          {HEADER_LINKS.map((i) =>
            !i.onlyDesktop ? (
              <Link key={i.title} text={i.title} url={i.url} type="header" />
            ) : (
              <span className="header__link_desktop">
                <Link key={i.title} text={i.title} url={i.url} type="header" />
              </span>
            ),
          )}
        </div>
      </div>
      <div className="header__rightSide">
        <Link text="+7 555 555-55-55" url="tel:+75555555555" type="phone" />
        <div className="socialLinks">
          {CONTACT_LINKS.map((i) => (
            <Link key={i.alt} icon={i.icon} url={i.url} type="icon" />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
