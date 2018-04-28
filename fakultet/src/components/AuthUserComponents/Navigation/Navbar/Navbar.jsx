import React from 'react';
import './Navbar.css';
import Logo from '../../../UI/_logo/_logo';
import BreweryGroup from '../../../../assets/icons/brewery-group.png';
import Beer from '../../../../assets/icons/beer-icon.png';
import Brewery from '../../../../assets/icons/beer-factory.png';

const navbar = props => (
     <div className="main-page-navbar">
        <div className="add-forms-container">
            <div onClick={props.handleToggleAddGroupModal} className={window.location.href.search("nowagrupa") !== -1 ? 
            "active-navbar-item" : null} id="add-group">
                <img src={BreweryGroup} alt="Dodaj grupe" />
            </div>
            <div className={window.location.href.search("nowybrowar") !== -1 ? 
            "active-navbar-item" : null} id="add-brewery">
                <img src={Brewery} alt="Dodaj browar" />
            </div>
            <div className={window.location.href.search("nowepiwo") !== -1 ? 
            "active-navbar-item" : null} id="add-beer">
                <img src={Beer} alt="Dodaj piwo" />
            </div>
        </div>

        <Logo  />
    </div>
   
);

export default navbar;