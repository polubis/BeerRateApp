import React from 'react';
import './_beerContent.css';
import Circle from '../../../components/UI/_circle/_circle';
import BreweryIcon from '../../../assets/icons/beer-factory.png';
import BreweriesListSingleItem from '../../BreweriesList/_brewerySingleItem/_brewerySingleItem';
import BeerGroup from '../../../components/BeerGroups/_beerGroup/_beerGroup';


const brewingGroup = 
    {id: 1, name: "Bracia", createDate: "1994-12-1994", }

const beerContent = props => (
    <div className="beer-details-left">
        <h1>Niezbedne informacje o <b>{props.name}</b></h1>
        <div className="beer-details-left-content">
            <div className="beer-details-line">
                <Circle 
                alcohol={props.alcohol}
                blg={props.blg}
                color={props.color}
                country={props.country}
                ibu={props.ibu}
                price={props.price}
                />
            </div>
            
            <BeerGroup />
            
            <div className="brewery-group-line">
                <div className="group-image-title">
                    <img className="image-line" src={BreweryIcon} alt="Grupa" />
                    <h1>{props.brewery.name}</h1>
                </div>
                <h2>Informacje o <b>browarze</b></h2>
                <BreweriesListSingleItem 
                width="700px"
                id={props.brewery.id}
                name={props.brewery.name}
                description={props.brewery.description}
                beers={props.beers}
                brewingGroup={brewingGroup}
                
                />
            </div>

        </div>
        

    </div>

);

export default beerContent;


