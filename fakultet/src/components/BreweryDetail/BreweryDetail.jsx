import React from 'react';
import './BreweryDetail.css';
import Informations from './Informations/Informations';



const breweryDetail = props => (
    <div className="brewery-details-top">
        <Informations name={props.name} desc={props.desc}/>
     



    </div>
);


export default breweryDetail;