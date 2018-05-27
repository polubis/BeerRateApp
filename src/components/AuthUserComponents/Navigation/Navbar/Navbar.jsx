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
            <div onClick={props.handleToggleAddBreweryModal} className={window.location.href.search("nowybrowar") !== -1 ? 
            "active-navbar-item" : null} id="add-brewery">
                <img src={Brewery} alt="Dodaj browar" />
            </div>
            <div onClick={props.redirectToAddBeer} className={window.location.href.search("nowepiwo") !== -1 ? 
            "active-navbar-item" : null} id="add-beer">
                <img src={Beer} alt="Dodaj piwo" />
            </div>
        </div>

        <Logo  />
        <div className="logged-user-place">
            <p>Zalogowano jako: <br/><b>{props.responseObject.username}</b> <i onClick={props.redirectToEditAccount} class="fa fa-pencil" aria-hidden="true"></i></p>
        </div>
    </div>
   
);

export default navbar;