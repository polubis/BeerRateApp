import React from 'react';
import './Sidebar.css';
import BeerIcon from '../../../../assets/icons/beer-icon.png';
import BreweriesIcon from '../../../../assets/icons/beer-factory.png';
import BreweryGroupIcon from '../../../../assets/icons/brewery-group.png';
import Loup from '../../../../assets/icons/loup.png';
import Logout from '../../../../assets/icons/logout.png';
import Cup from '../../../../assets/icons/cup.png';
const sideBar = props => {
    return(
        <nav className="side-page-nav">

            <div className="socials-container">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-twitter"></i>
            </div>
            <div id="brewery-group" className="side-page-nav-png-icon" >
                <img src={BreweryGroupIcon} alt="Grupy piwowarskie"/> 
            </div>
            <div id="breweries" className="side-page-nav-png-icon">
                <img className="background-img" src={BreweriesIcon} alt="Browary"/>
            </div>
            <div id="beers" className="side-page-nav-png-icon" >
                <img src={BeerIcon} alt="Marki piw"/> 
            </div>
            <div id="cup" className="side-page-nav-png-icon" >
                <img src={Cup} alt="Ranking"/> 
            </div>
            <div id="loup" className="side-page-nav-png-icon" >
                <img src={Loup} alt="Wyszukaj"/> 
            </div>


            <div onClick={props.logout} id="logout" className="side-page-nav-png-icon" >
                <img src={Logout} alt="Wyloguj"/> 
            </div>
            
       
           
        </nav>
    );
}
export default sideBar;