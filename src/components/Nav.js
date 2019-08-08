import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            < Link to = "/home"><i className='fa fa-home'></i></Link>
            < Link to = "/login"><i className='fa fa-user-circle'></i></ Link >
            < Link to = "/products"><i className='fa fa-beer'></i></Link>
            < Link to = "/cart"><i className='fa fa-shopping-cart'></i></Link>
        </div>
    )
}

export default connect ( null, null )( Nav );