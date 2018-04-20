import React from 'react';
import Aux from '../../hoc/auxilary';
import './_breweryDetails.css';
import Breweries from '../../assets/beers.jpg';



const breweryDetails = props => (
    <Aux>
    <div className="breweries-container">
        <div className="brew-img-holder">
            <img src={Breweries} alt="Browar" />
        </div>
        <article>
            <p className="orange-link">{props.name} </p>
            Date powstania browaru podchalanskiego datuje sie na okres
            1920 - 1940. Grupa piwowarska Bracia wykupila go w 2001 roku 
            za bardzo niska cene. Wszyscy pracownicy jednak w dniu zakupu
            postnowili bronic interesow zakladu. Zaczal sie wielki strajk, ktory doprowadzil
            do przerwania checi zakupu browaru. 
        </article>
        <div style={{clear: 'both'}}></div>

    </div>                    
    </Aux>
    
);

export default breweryDetails;