import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__location">
      <div className="deliver">Deliver to</div>
      <div className="location__container">
        <span className="location__icon"></span>
        <span className="location__text">India</span>
      </div>
    </div>
      <div className="header__search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="header__nav">
        <div className="header__nav__option">Hello, Sign in</div>
        <div className="header__nav__option">Returns</div>
        <div className="header__nav__option">Orders</div>
        <div className="header__nav__option">Cart</div>
      </div>
    </header>
  );
};

export default Header;
