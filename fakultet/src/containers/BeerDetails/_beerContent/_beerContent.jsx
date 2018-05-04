import React from 'react';
import './_beerContent.css';
import Circle from '../../../components/UI/_circle/_circle';
import GroupIcon from '../../../assets/icons/brewery-group.png';
import BreweryIcon from '../../../assets/icons/beer-factory.png';
import BeerGroupFormInfo from '../../../components/_beerGroupCart/_beerGroupFormInfo/_beerGroupFormInfo';
import Awards from '../../../components/_awards/_awards';
import BreweriesListSingleItem from '../../BreweriesList/_brewerySingleItem/_brewerySingleItem';


const items = [
    {id: 0, name: "Kraj", value: "Polska", classVal: false, deg: 45, desc: "Piwo produkowane jest w Polsce. Produkcje rozpoczeto w 1994 roku i trwa do dzis"},
    {id: 1, name: "Dystrybucja", value: "Regionalna",classVal: false, deg: 90, desc: "Dystrybucja regionalna. W okolicach miasteczka Bronowice"},
    {id: 2, name: "Typ", value: "Przeniczne",classVal: false, deg: 135, desc: "Piwo Tyskie jest typowym Przenicznym piwem."},
    {id: 3, name: "Kolor", value: "Ciemny braz",classVal: false, deg: 180, desc: "Posiada ciemno-brązową barwe, która po wlaniu do szklanki zmienia kolor"},
    {id: 4, name: "Rodzaj", value: "Lagger",classVal: false, deg: 225, desc:"Piwo Tyskie to typowy Lagger"},
    {id: 5, name: "IBU", value: "4.3%",classVal: false, deg: 270, desc: "Współczynnik IBU czyli poziom goryczy jest w tym piwie wyjątkowo niski. Wynosi. 4.5%"},
    {id: 6, name: "Cena", value: "4.36 zł",classVal: false, deg: 315, desc: "Cena w wiekszosci sklepow waha sie pomidzy 2,30 zł a 4 zł"},
    {id: 7, name: "Zawartośc alkoholu", value: "4.5%",classVal: false, deg: 360, desc: "Posiada 4.5% zawartośc alkoholu. Jest bardzo długo ważone"},
]
const brewingGroup = 
    {id: 1, name: "Bracia", createDate: "1994-12-1994", }

const beers = [
    3,4,3
]


const beerContent = props => (
    <div className="beer-details-left">
        <h1>Niezbedne informacje o <b>Tyskie</b></h1>
        <div className="beer-details-left-content">
            <div className="beer-details-line">
                <Circle items={items}/>
            </div>
            
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
            <div className="brewery-group-line">
                <div className="group-image-title">
                    <img className="image-line" src={BreweryIcon} alt="Grupa" />
                    <h1>Browar podhalanski</h1>
                </div>
                <h2>Informacje o <b>browarze</b></h2>
                <BreweriesListSingleItem 
                width="900px"
                id={1}
                name="Browar podhalanski"
                description=" Firma powstała w 1994 roku. Załozona przez 2 braci. 
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
                Firma powstała w 1994 roku. Załozona przez 2 braci. "
                beers={beers}
                brewingGroup={brewingGroup}
                
                />
            </div>

        </div>
        

    </div>

);

export default beerContent;


