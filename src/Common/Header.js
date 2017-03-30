import React from 'react';
import style from 'scss/Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className={style.header}>
    <div className={style.heading}>
      <img src="/favicon-192.png" alt="hacer news logo" />
      <h1>Hacer News Word Analyzer</h1>
    </div>
    <nav className={style.flex}>
      <NavLink to="/">Home</NavLink>
    </nav>
  </header>
);

export default Header;
