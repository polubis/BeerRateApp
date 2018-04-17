import React from 'react';
import './_logo.css';
const logo = props => (
    <div onClick={props.scrollUp} className="left-navigation-container">
        <i className="fa fa-beer logo"></i>
        <b className="logo-title">piwopinie.pl</b>
    </div>
);

export default logo;