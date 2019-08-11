import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          < Link to = "/home" class="navbar-item has-text-grey-darker">Bougie Brews</Link>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>      
        <div id="Navbar" class="navbar-menu">
          <div class="navbar-start"> 
            < Link to = "/products" class="navbar-item has-text-grey">Products</Link>
            < Link to = "/signup" class="navbar-item has-text-grey">Sign Up</ Link >
            < Link to = "/login" class="navbar-item has-text-grey">Log In</ Link >
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              < Link to = "/cart" class="button is-light"><i className='fa fa-shopping-cart has-text-grey-dark'></i></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default connect ( null, null )( Nav );