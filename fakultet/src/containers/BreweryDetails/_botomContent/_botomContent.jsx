import React from 'react';
import './_botomContent.css';
import Stars from '../../../components/_stars/_stars';
import Awards from '../../../components/_awards/_awards';
import BeerDetailCart from '../../../components/Beers/_beerDetailCart/_beerDetailCart';
import { beers } from '../../../consts/links/pictures';
import { Link } from 'react-router-dom';
const botomContent  = props => (
        <div className="single-slicker">
            
            <i onClick={props.toggle} className="fa fa-angle-double-right"></i>
            

            <div className="brew-stars-container">
                <Stars rate={4.35} fontSize="22px" width="90%"/>
                <p>Ocena: <b>{props.item.averageOfRatings.toFixed(2) }</b></p>
                <p>Głosy: <b>133 razy</b></p>
            </div>

            <div style={{backgroundImage: `url(${ props.item.beerPicture ? 
                beers + props.item.beerPicture.pictureName : null})`}} className="slicker-photo">
            </div>
            {props.showDetails ? 
                <div className="beer-details-hover">
                    <BeerDetailCart 
                    country={props.item.country}
                    distribution={props.item.distribution}
                    type={props.item.type}
                    color={props.item.color}
                    kindOf={props.item.kindOf}
                    ibu={props.item.ibu}
                    blg={props.item.blg}
                    price={props.item.price}
                    alcohol={props.item.alcohol}
                    
                    width="100%" backgroundColor="rgba(0,0,0,0.9)"/>
                </div> : 
                null
                
            }
            
           
            <div className="slicker-content">
                <p>Flagowy produkt</p>
                <h2>{props.item.name}</h2>
                <article>
                    {props.item.description}
                </article>
                <p>Nagrody</p>
                <Awards noHeader={true}/>
              
                <Link to={`/piwa/${props.item.id}`} className="show-more-beer-button">
                    Zobacz szczegóły
                </Link> 
                
                
            </div>


        </div>
);

export default botomContent;


