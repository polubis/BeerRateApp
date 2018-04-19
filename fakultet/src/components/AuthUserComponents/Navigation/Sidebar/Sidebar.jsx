import React from 'react';
import './Sidebar.css';
import BeerIcon from '../../../../assets/icons/beer-icon.png';
import BreweriesIcon from '../../../../assets/icons/beer-factory.png';
import BreweryGroupIcon from '../../../../assets/icons/brewery-group.png';
import Loup from '../../../../assets/icons/loup.png';
import Logout from '../../../../assets/icons/logout.png';
import Cup from '../../../../assets/icons/cup.png';
import MainPageLogo from '../../../../assets/icons/main-page.png';




const sideBar = props => {
    const sideBarItem = [
        {id: 0, name: "home-page-icon", img:MainPageLogo, alt:"Strona główna", adress: "glowna"},
        {id: 1, name: "brewery-group", img:BreweryGroupIcon, alt:"Grupy piwowarskie", adress: "grupy"},
        {id: 2, name: "breweries", img:BreweriesIcon, alt:"Browary", adress: "browary"},
        {id: 3, name: "beers", img:BeerIcon, alt:"Marki piw", adress: "piwa"},
        {id: 4, name: "cup", img:Cup, alt:"Rankingi", adress: "rankingi"},
        {id: 5, name: "loup", img:Loup, alt:"Wyszukaj", adress: "znajdz"},
        {id: 6, name: "logout", img:Logout, alt:"Wyloguj", adress: "wyloguj"}
    ];
    console.log(window.location.href.search("glowna"));
    return(
        <nav className="side-page-nav">
            <div className="socials-container">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-twitter"></i>
            </div>
            {sideBarItem.map(i => {
                
                return (
                    <div onClick={i.id === 6 ? props.logout : props.redirect}
                    key={i.id} id={i.name} className={window.location.href.search(i.adress) !== -1 ? 
                    "side-page-nav-png-icon active-side-bar-item" : "side-page-nav-png-icon"}>
                        <img id={i.id} src={i.img} alt={i.alt} title={i.adress} />
                    </div>
                );
            })}
            

            
       
           
        </nav>
    );
}
export default sideBar;