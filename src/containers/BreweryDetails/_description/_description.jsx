import React from 'react';
import './_description.css';
import BreweryIcon from '../../../assets/icons/beer-factory.png';
import moment from 'moment';
import 'moment/locale/pl';

const description  = props => {
    const dateNow = moment().format();
    let timeFromAdd = moment(props.creationDate.slice(0, 10)).fromNow(dateNow);
    return(
    <div className="brewery-arrow-container">
        <img src={BreweryIcon} alt="Ikona browaru" />
        {props.bestItem ? 
        <i className="fa fa-arrow-right"></i> : null}
            
        <article>
            <p className="arrow-header">O sposobie produkcji słów kilka</p>
            {props.description}
        </article>
        {props.bestItem ? 
            <div className="right-details">
            <h3 className="arrow-header">Cechy szczególne</h3>
            <p>Sposób dystrybucji: <i>{props.bestItem.distribution ? props.bestItem.distribution : "Brak informacji"}</i></p>
            <p>Lokalizacja: <i>{props.address ? props.address : "Brak informacji"}</i></p>
            <p>Flagowy produkt: <i>{props.bestItem.name ? props.bestItem.name : "Brak informacji"}</i></p>
            <p>Czas istnienia: <i>{timeFromAdd}</i></p>
        </div>                        
        : null}    
            
    </div>
    );
    
};

export default description;
