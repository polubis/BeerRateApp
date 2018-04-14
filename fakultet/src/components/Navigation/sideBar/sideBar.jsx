import React from 'react';
import './sideBar.css';
import '../Navigation.css';
import LoginForm from '../../LoginForm/LoginForm';
import { navBarNavItemsBeforeLogingIn } from '../../../consts/HelpfullArrays';
const sideBar = (props) => {
    const showClass = "side-bar-container " 
        + (!props.show ? "side-bar-open" : "side-bar-closed");
    return(
        <div className={showClass}>
            <div className="navigation-container">
                {navBarNavItemsBeforeLogingIn.map(i => {
                    return <button 
                    key={i} 
                    className="navigation-buttons">{i}</button>
                })}
            </div>
            <LoginForm />
        </div>
    );    
}


export default sideBar;