import React from 'react';
import './_shield.css';


const shield = props => (
    <div className="brewery-details-roq">
        <h2>Szczegóły</h2>
        <div className="shields-container">
            <div className="shield">
                <img src={props.GroupIcon} alt="Logo grupy" />
                    <p>{props.brewingGroup.name}</p>
            </div>
            <div className="shield">
                <img src={props.BeerIcon} alt="Logo grupy" />
                    <p>Posiada {props.beersCount} piwa!</p>
            </div>
            <div className="shield">
                <img src={props.MapIcon} alt="Logo grupy" />
                    <p>{props.brewingGroup.address}</p>
            </div>
        </div>                                                
    </div>

);


export default shield;