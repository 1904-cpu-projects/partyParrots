import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ loggedIn }) {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/home" className="navbar-item has-text-grey-darker">
            Bougie Brews
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="Navbar" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/products" className="navbar-item has-text-grey">
              Products
            </Link>
            {!loggedIn && (
              <Link to="/signup" className="navbar-item has-text-grey">
                Sign Up
              </Link>
            )}
            {!loggedIn && (
              <Link to="/login" className="navbar-item has-text-grey">
                Log In
              </Link>
            )}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/cart" className="button is-light">
                <i className="fa fa-shopping-cart has-text-grey-dark" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
