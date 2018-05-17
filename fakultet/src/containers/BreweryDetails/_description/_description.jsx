import React from 'react';
import './_description.css';
import BreweryIcon from '../../../assets/icons/beer-factory.png';



const description  = props => (
    <div className="brewery-arrow-container">
        <img src={BreweryIcon} alt="Ikona browaru" />
        <i className="fa fa-arrow-right"></i>
        <article>
            <p className="arrow-header">O sposobie produkcji słów kilka</p>
            {props.description}
        </article>
        <div className="right-details">
            <h3 className="arrow-header">Cechy szczególne</h3>
            <p>Sposób dystrybucji: <i>Regionalnie</i></p>
            <p>Lokalizacja: <i>Województwo Warmińsko Mazurskie</i></p>
            <p>Flagowy produkt: <i>Tyskie</i></p>
            <p>Czas istnienia: <i>20 lat</i></p>
        </div>                        
    </div>
);

export default description;
