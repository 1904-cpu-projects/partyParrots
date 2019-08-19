import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ loggedIn, logout, navOpen, toggleNav }) {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item has-text-grey-darker">
            Bougie Brews
          </Link>
          <a
            role="button"
            className={`navbar-burger burger ${navOpen ? 'is-active' : ''}`}
            onClick={toggleNav}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          id="Navbar"
          className={`navbar-menu ${navOpen ? 'is-active' : ''}`}
          onClick={e => {
            if (navOpen) {
              toggleNav(e);
            } else {
              e.preventDefault();
            }
          }}
        >
          <div className="navbar-start">
            <Link to="/products" className="navbar-item has-text-grey">
              Products
            </Link>
          </div>
          <div className="navbar-end">
            {!loggedIn && (
              <Link to="/login" className="navbar-item has-text-grey">
                Log In
              </Link>
            )}
            {!loggedIn && (
              <Link to="/signup" className="navbar-item has-text-grey">
                Sign Up
              </Link>
            )}
            {loggedIn && (
              <div className="navbar-item">
                <button
                  type="button"
                  className="button is-danger is-small"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
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
