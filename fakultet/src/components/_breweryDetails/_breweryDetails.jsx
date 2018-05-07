import React from 'react';
import Aux from '../../hoc/auxilary';
import './_breweryDetails.css';
import Breweries from '../../assets/beers.jpg';



const breweryDetails = props => (
    <Aux>
    <div className="breweries-details-container">
        <div className="brew-img-holder">
            <img src={Breweries} alt="Browar" />
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