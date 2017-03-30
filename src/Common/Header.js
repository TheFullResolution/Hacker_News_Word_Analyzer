import React from 'react';
import style from 'scss/Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className={style.header}>
    <div className={style.heading}>
      <img src="/favicon-192.png" alt="hacer news logo" />
      <h1>Hacker News Word Analyzer</h1>
    </div>
    <nav className={style.navigation}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/analyzer">Analyzer</NavLink>
    </nav>
  </header>
);

export default Header;
