import React from 'react';
import './_leftRank.css';
import BeerCart from '../_beerCart/_beerCart';

const leftRank = props => {
    return (
        <div className="left-block-container">
        <h2>Polecane na dziś</h2>
        {props.beers.map(i => {
            return <BeerCart id={i.id} key={i.id} 
            title={i.name} rate={i.averageOfRatings} content={i.description}/>;
        })}
            
        </div>
    );
}

 
export default leftRank;