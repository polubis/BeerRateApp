import React from 'react';
import './BreweryDetail.css';
import Informations from './Informations/Informations';



const breweryDetail = props => (
    <div className="brewery-details-top">
        <Informations breweryPicture={props.breweryPicture}
        brewingGroup={props.brewingGroup} 
        beersCount={props.beersCount} name={props.name} desc={props.desc}/>
     



    </div>
);


export default breweryDetail;