import React from 'react';
import './Informations.css';
import Aux from '../../../hoc/auxilary';
import Shield from '../Shield/_shield';
import Image from '../../../assets/modal/modal-group.jpg';
import GroupIcon from '../../../assets/icons/brewery-group.png';
import BeerIcon from '../../../assets/icons/beer-icon.png';
import MapIcon from '../../../assets/beer-group-details/map.png';
import { breweries } from '../../../consts/links/pictures';

const informations = props => (
        <Aux>
            <div className="details-left">
                <p>{props.name} <span>powstał w 1994 roku</span></p>
                <h1>Piwo ważone z rozwagą</h1>
                <article> {props.desc} </article>
                    
                
                <Shield 
                brewingGroup={props.brewingGroup}
                beersCount={props.beersCount}
                BeerIcon={BeerIcon}
                MapIcon={MapIcon}
                GroupIcon={GroupIcon}/>     
            </div>
            <div style={{backgroundImage: `url(${props.breweryPicture ? breweries + props.breweryPicture.pictureName : Image})`}} className="details-right-picture">
            </div>                
        </Aux>
);


export default informations;