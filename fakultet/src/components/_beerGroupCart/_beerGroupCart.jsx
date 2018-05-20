import React from 'react';
import './_beerGroupCart.css';
import Image from '../../assets/beers.jpg';

import BeerFactoryBackground from '../../assets/beer-rewards/beer-factory-back.jpg';

import BeerGroupFormInfo from '../_beerGroupCart/_beerGroupFormInfo/_beerGroupFormInfo';
import Awards from '../_awards/_awards';
import { Link } from 'react-router-dom';


const beerGroupCart = props => (
    
    <div className="mini-rank-container">
        <div className="rank-steirways">
            <h1>{props.group.name} </h1>

            <BeerGroupFormInfo director={props.group.director} 
            createDate={props.group.createDate.slice(0, 10)}
            address={props.group.address}/>
            
            <div className="first-bar-container">
                <article>
                    <h2>O flagowym produkcie, czas na 
                        <b className="orange-link"> {props.beer.name ? props.beer.name : null}!</b></h2>
                    <p>{props.beer.description}
                    </p>
                    <Link to={`/piwa/${props.beer.id}`} className="orange-link">Czytaj więcej</Link>
                </article>
                <img src={Image} alt="Zdjęcie" />
            </div>
            <button onClick={props.changeBeer} className="oth-beers-button">Inne piwo</button>
            <Awards />
            <h1 className="company-story-header">Historia firmy</h1>
            <div style={{backgroundImage: `url(${BeerFactoryBackground})`}} className="company-story-container">
                <article>
                    {props.group.description}
                </article>
                
            </div>

            
        </div>
        

    </div>
);

export default beerGroupCart;