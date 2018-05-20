import React from 'react';
import Beers from '../../assets/beers.jpg';
import './_beerCart.css';
import FlipCart from '../UI/_flipCart/_flipCart';
import Aux from '../../hoc/auxilary';
import Awards from '../_awards/_awards';
import Stars from '../_stars/_stars';
import { Link } from 'react-router-dom';

const beerCart = props => {
    const flipFront = ( 
        <div height={props.height} className="carousel-bar-block">
            <div className="litle-beer" style={{backgroundImage: `url(${Beers})`}}>
                <b>{props.rate}</b>
            </div>
            <div className="stars-beer-container">
                <Stars rate={props.rate === 0 ? 0.1 : props.rate} />
            </div>

            <div className="beer-desc-container">
                <h2 className="beer-header-container">
                    {props.title} 
                </h2>
                <p>{props.content}</p>
                <b className="orange-link">Lagger</b>
            </div>           
        </div> 
       
    );

    const flipBack = (
        <div className="cart-back-container">
            <Awards noHeader={true}/>
            <Link to={`/piwa/${props.id}`} className="orange-link">Zobacz wiecej</Link>
        </div>
    );
    return(
        <Aux>
            <FlipCart front={flipFront} back={flipBack}/>
        </Aux>
    );
    
};

export default beerCart;