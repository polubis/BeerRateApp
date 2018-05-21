import React from 'react';
import Aux from '../../hoc/auxilary';
import './_breweryDetails.css';
import { breweries } from '../../consts/links/pictures';


const breweryDetails = props => (
    <Aux>
    <div className="breweries-details-container">
        <div className="brew-img-holder">
            {props.breweryPicture ? 
            <img src={breweries + props.breweryPicture} alt="Browar" /> : null}
        </div>
        <article>
            <p className="orange-link">{props.name} </p>
            {props.description}
        </article>
        <div style={{clear: 'both'}}></div>

    </div>                    
    </Aux>
    
);

export default breweryDetails;