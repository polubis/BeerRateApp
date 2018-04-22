import React from 'react';
import Beers from '../../assets/beers.jpg';
import './_beerCart.css';
import FlipCart from '../UI/_flipCart/_flipCart';
import Aux from '../../hoc/auxilary';
import Awards from '../_awards/_awards';
import Stars from '../_stars/_stars';


const beerCart = props => {
    const flipFront = ( 
        <div height={props.height} className="carousel-bar-block">
        <img src={Beers} alt="Piwo" />
            <div>
            <h2>{props.title} 
                <span>
                <b>{props.rate}</b>
                <Stars rate={props.rate}/>
                </span>
            </h2>
            <p>{props.content} <b className="orange-link">Lagger</b>
            </p>
            </div>           
        </div> 
       
    );

    const flipBack = (
        <div className="cart-back-container">
            <Awards noHeader={true}/>
            <p className="orange-link">Zobacz wiecej</p>
        </div>
    );
    return(
        <Aux>
            <FlipCart front={flipFront} back={flipBack}/>
        </Aux>
    );
    
};

export default beerCart;