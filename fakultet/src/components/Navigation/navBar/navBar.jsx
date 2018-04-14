import React from 'react';
import './navBar.css';
import '../Navigation.css';
import { navBarNavItemsBeforeLogingIn } from '../../../consts/HelpfullArrays';
const navBar = (props) => {
    console.log(props.show);
    const btnsLook = "navigation-buttons " + (props.show === 2 ?
         "last-navigation" : "navigation-button-with-pic-back")
    return(
        <header className="nav-bar-container">
            <nav className="navigation-container">
                {navBarNavItemsBeforeLogingIn.map(i => {
                    return <button className={btnsLook} key={i}>{i}</button>;
                })}
            </nav>
        </header>
    );
}
 
export default navBar;