import React from 'react';
import './_botomContent.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from '../../../assets/piwo.png';
import Stars from '../../../components/_stars/_stars';
import Awards from '../../../components/_awards/_awards';
import BeerDetailCart from '../../../components/Beers/_beerDetailCart/_beerDetailCart';


const botomContent  = props => (
    <div className="brewery-details-bottom">
    <Slider className="brewery-slicker" {...props.settings}>
        
        <div className="single-slicker">
            
            <i onClick={props.toggle} className="fa fa-angle-double-right"></i>
            

            <div className="brew-stars-container">
                <Stars rate={4.35} fontSize="22px" width="90%"/>
                <p>Ocena: <b>4,35</b></p>
                <p>Głosy: <b>133 razy</b></p>
            </div>

            <div style={{backgroundImage: `url(${Image})`}} className="slicker-photo">
            </div>
            {props.showDetails ? 
                <div className="beer-details-hover">
                    <BeerDetailCart width="100%" backgroundColor="rgba(0,0,0,0.9)"/>
                </div> : 
                null
                
            }
            
           
            <div className="slicker-content">
                <p>Flagowy produkt</p>
                <h2>Tyskie</h2>
                <article>
                    dasds adas as ad asa das as
                    dasds adas as ad asa das as
                    dasds adas as ad asa das as
                    dasds adas as ad asa das as
                    dasds adas as ad asa das as
                    dasds adas as ad asa das as
                    dasds adas as ad asa das as
                    dasds adas as ad asa das as
                    dasds adas as ad asa das as
                    dasds adas as ad asa das as
                    dasds adas as ad asa das as
                </article>
                <p>Nagrody</p>
                <Awards noHeader={true}/>
                <button className="show-more-beer-button">
                    Zobacz szczegóły
                </button>
            </div>


        </div>
    </Slider> 
    </div>
);

export default botomContent;


