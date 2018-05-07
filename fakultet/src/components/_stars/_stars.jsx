import React from 'react';
import './_stars.css';
import {calculatingRateOnStars} from '../../services/ratingMethods';
import Aux from '../../hoc/auxilary';
import { Link } from 'react-router-dom'; 
const stars = props => {
    const resultArray = calculatingRateOnStars(props.rate.toString());
    return(
    <div
    style={{fontSize: props.fontSize,
    width: props.width}} 
    className="stars-container">
        {props.rate > 0 ? 
            <Aux>
            <b style={{display: props.show ? 'flex' : 'none'}} className="beers-list-number">{props.rate}</b>
            {resultArray.map(i => {
            return (<i key={i.id} style={{backgroundImage: `linear-gradient(
            to right, ${i.startColor}, ${i.endColor})`}} className="fa fa-star"></i>);
            })}
            </Aux> : 
            props.btnOn ? 
            <div className="zero-vote-container">
                <p>Na to piwo nie oddano jeszcze głosu!</p>
                <Link to={`/piwa/${props.beerId}`} 
                className="redirect-to-beer-btn">Bądź pierwszy!</Link>
            </div>
            : null
        }

        
          
   </div>     
    );
     
};

export default stars;