import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            < Link to = "/home">Home</Link>
            < Link to = "/login">Log In</ Link >
            < Link to = "/products">Products</Link>
            < Link to = "/cart">Cart</Link>
        </div>
    )
}

export default connect ( null, null )( Nav );