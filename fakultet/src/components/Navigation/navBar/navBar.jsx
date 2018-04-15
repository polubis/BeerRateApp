import React from 'react';
import './navBar.css';
import '../Navigation.css';
import { navBarNavItemsBeforeLogingIn } from '../../../consts/HelpfullArrays';
const navBar = (props) => {
    const btnsLook = "navigation-buttons " + (props.show === 2 ?
         "last-navigation" : "navigation-button-with-pic-back")
    return(
        <nav className="nav-bar-container">
            <div className="left-navigation-container">
                <i className="fa fa-beer logo"></i>
                <b className="logo-title">piwopinie.pl</b>
            </div>
            <div className="right-navigation-container">
                {navBarNavItemsBeforeLogingIn.map(i => {
                    return <button className={btnsLook} key={i}>{i}</button>;
                })}
            </div>
        </nav>
    );
}
 
export default navBar;