import React from 'react';
import './_beerGroup.css';
import Awards from '../../_awards/_awards';
import BeerGroupFormInfo from '../../../components/_beerGroupCart/_beerGroupFormInfo/_beerGroupFormInfo';
import GroupIcon from '../../../assets/icons/brewery-group.png';


const beerGroup = props => (
            <div className="beer-group-line">
                <div className="group-image-title">
                    <img className="image-line" src={GroupIcon} alt="Grupa" />
                    <h1>Bracia</h1>
                </div>
                <h2>Informacje o <b>grupie piwowarskiej</b></h2>
                <h3>Historia</h3>
                <article>
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                        Firma powstała w 1994 roku. Załozona przez 2 braci. 
                </article>
                <BeerGroupFormInfo />
                <h3>Nagrody za wszystkie marki piwa</h3>
                <Awards noHeader={true}/>
                <button>Zobacz szczegóły</button>
            </div>
);

export default beerGroup;