import React from 'react';
import './_beerContent.css';
import Circle from '../../../components/UI/_circle/_circle';
import BreweryIcon from '../../../assets/icons/beer-factory.png';
import BreweriesListSingleItem from '../../BreweriesList/_brewerySingleItem/_brewerySingleItem';
import BeerGroup from '../../../components/BeerGroups/_beerGroup/_beerGroup';


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
                <Circle />
            </div>
            
            <BeerGroup />
            
            <div className="brewery-group-line">
                <div className="group-image-title">
                    <img className="image-line" src={BreweryIcon} alt="Grupa" />
                    <h1>Browar podhalanski</h1>
                </div>
                <h2>Informacje o <b>browarze</b></h2>
                <BreweriesListSingleItem 
                width="700px"
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


