import React from 'react';
import Owner from '../../../assets/beer-group-details/owner-png.png';
import BirthDate from '../../../assets/beer-group-details/birth-date.png';
import Compas from '../../../assets/beer-group-details/map.png';
import './_beerGroupFormInfo.css';
const beerGroupFormInfo = props => (
    
    <div className="beer-group-details">
        <div className="info-block">
            <p>Założciel</p>
            <img src={Owner} alt="Właściciel" />
            <p>Tom Cruse</p>
        </div>
        <div className="info-block">
        <p>Rok założenia</p>
            <img src={BirthDate} alt="Właściciel" />
            <p>2017</p>
        </div>
        <div className="info-block">
            <p>Lokalizacja</p>
            <img src={Compas} alt="Właściciel" />
            <p>USA Massetusets</p>
        </div>
   </div>



);

export default beerGroupFormInfo;