import React from 'react';
import './_beerGroupCart.css';
import Image from '../../assets/beers.jpg';

import BeerFactoryBackground from '../../assets/beer-rewards/beer-factory-back.jpg';

import BeerGroupFormInfo from '../_beerGroupCart/_beerGroupFormInfo/_beerGroupFormInfo';
import Awards from '../_awards/_awards';



const beerGroupCart = props => (
    
    <div className="mini-rank-container">
        <div className="rank-steirways">
            <h1>Grupa piwowarskia - bracia </h1>

            <BeerGroupFormInfo />
            
            <div className="first-bar-container">
                <article>
                    <h2>O flagowym produkcie, czas na 
                        <b className="orange-link"> Tyskie!</b></h2>
                    <p>Bracia słynną z produkcji piw z gaturnku Lager. Wyjątkowo dobrym produktem jest 
                        piwo Tyskie. W jego smaku da się wyczuć wyrazistą nutkę słodu jęczmiennego z bogatym
                        dodatkiem chmielu. 
                    </p>
                    <span className="orange-link">Czytaj więcej</span>
                </article>
                <img src={Image} alt="Zdjęcie" />
            </div>
            <button className="oth-beers-button">Inne piwo</button>
            <Awards />
            <h1 className="company-story-header">Historia firmy</h1>
            <div style={{backgroundImage: `url(${BeerFactoryBackground})`}} className="company-story-container">

                <article>
                    <span>Firma</span> <b className="orange-link">Bracia </b> posiada aż trzydzieści trzy marki piwa w swoim spichlerzu.
                    Powstała w <b className="orange-link">1943 roku</b> założona przez Piotra Bratowskiego. W początkowym etepie zatrudniała zaledwie 15 osób, a jej budżet
                    opierał się na wpłatach przez pasjonatów. Firma aktualnie wiedzie prym
                    w zachodniej Europie. Jej cały budżet w tym roku przekroczył równoważność
                    budżetu browaru Tyskie oraz Warka połączonych razem.
                </article>
                
            </div>

            
        </div>
        

    </div>
);

export default beerGroupCart;