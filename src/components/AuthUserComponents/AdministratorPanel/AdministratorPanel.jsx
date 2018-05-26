import React from 'react';
import './AdministratorPanel.css';
import Transition from 'react-transition-group/Transition';
const administratorPanel = props => {
    return (
        <Transition mountOnEnter unmountOnExit 
            in={props.openAdminPanel}>   
            {state => (
                <div style={{backgroundImage: `url(${require("../../../assets/BeerBackground.jpg")})`}} className={`administrator-panel ${props.openAdminPanel ? 
                "admin-panel-in" : "admin-panel-out"}`}>

                </div>
            )}                 
        </Transition>
        
    );
}

export default administratorPanel;