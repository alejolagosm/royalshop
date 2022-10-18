import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/paw.svg';

import './styles.scss';

const Header = () => (
  <>
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Header;
