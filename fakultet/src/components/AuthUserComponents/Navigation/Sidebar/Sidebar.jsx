import React from 'react';
import './Sidebar.css';

const sideBarNavigationItems = [
    {id: 0, name: "Grupy piwowarskie"},
    {id: 1, name: "Browary"},
    {id: 2, name: "Piwa"}
]
const sideBar = props => {
    return(
        <nav className="main-page-nav">
            <div className="first-div-container">
                {sideBarNavigationItems.map(i => {
                    return (
                    <button key={i.id}>
                        {i.name}
                    </button>);
                })}
            </div>
            
        </nav>
    );
}
export default sideBar;