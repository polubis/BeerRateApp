import React from 'react';
import './navBar.css';
import '../Navigation.css';
import { navBarNavItemsBeforeLogingIn } from '../../../consts/HelpfullArrays';
import Logo from '../../UI/_logo/_logo';

const navBar = props => {
    const btnsLook = "navigation-buttons " + (props.show === 2 ?
         "last-navigation" : "navigation-button-with-pic-back")
    return(
        <nav className="nav-bar-container">
            <Logo scrollUp={props.scrollUp} />
            <div className="right-navigation-container">
                {navBarNavItemsBeforeLogingIn.map(i => {
                    return <button 
                    value={i}
                    onClick={props.scrollUp}
                    className={btnsLook} key={i}>{i}</button>;
                })}
            </div>
        </nav>
    );
}
 
export default navBar;