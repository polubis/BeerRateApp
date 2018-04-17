import React from 'react';
import './Navbar.css';
import Logo from '../../../UI/_logo/_logo';

const navbar = props => (
    <div className="main-page-navbar">
        
        <Logo scrollUp={props.clicked} />
    </div>
);

export default navbar;