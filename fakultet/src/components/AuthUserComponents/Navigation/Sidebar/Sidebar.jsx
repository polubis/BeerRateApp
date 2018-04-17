import React from 'react';
import './Sidebar.css';


const sideBarNavigationItems = [
    {id: 0, name: "Grupy piwowarskie"},
    {id: 1, name: "Browary"},
    {id: 2, name: "Piwa"}
]
const sideBar = props => {
    return(
        <nav className="side-page-nav">
            <div className="socials-container">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-twitter"></i>
            </div>
            <div className="first-div-container">
                {sideBarNavigationItems.map(i => {
                    return (
                    <button key={i.id}>
                        {i.name}
                    </button>);
                })}
            </div>
            
            <div className="search-bar-container">
                <input type="text" placeholder="znajdź..." />
                {sideBarNavigationItems.map(i => {
                    return (
                        <div key={i.id}>
                            <input type="checkbox" />
                            <label>{i.name}</label>
                        </div>
                    );
                })}
                
                
            </div>
            
        </nav>
    );
}
export default sideBar;