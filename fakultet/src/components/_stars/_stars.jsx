import React from 'react';
import './_stars.css';
import {calculatingRateOnStars} from '../../services/ratingMethods';


const stars = props => {
    const resultArray = calculatingRateOnStars(props.rate.toString());
    return(
    <div
    style={{fontSize: props.fontSize,
    width: props.width}} className="stars-container">
       <b style={{display: props.show ? 'flex' : 'none'}} className="beers-list-number">{props.rate}</b>
       {resultArray.map(i => {
       return <i key={i.id} style={{backgroundImage: `linear-gradient(
        to right, ${i.startColor}, ${i.endColor})`}} className="fa fa-star"></i>
       })}
          
   </div>     
    );
     
};

export default stars;