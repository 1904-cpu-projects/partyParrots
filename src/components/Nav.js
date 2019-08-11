import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          < Link to = "/home" className="navbar-item has-text-grey-darker">Bougie Brews</Link>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>      
        <div id="Navbar" className="navbar-menu">
          <div className="navbar-start"> 
            < Link to = "/products" className="navbar-item has-text-grey">Products</Link>
            < Link to = "/signup" className="navbar-item has-text-grey">Sign Up</ Link >
            < Link to = "/login" className="navbar-item has-text-grey">Log In</ Link >
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              < Link to = "/cart" className="button is-light"><i className='fa fa-shopping-cart has-text-grey-dark'></i></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default connect ( null, null )( Nav );