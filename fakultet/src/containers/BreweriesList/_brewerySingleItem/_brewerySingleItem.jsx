import React from 'react';
import './_brewerySingleItem.css';
import Slicker from '../../../components/UI/_slicker/_slicker';
import Brewery from '../../../assets/beer-rewards/Browary.jpg';
import BreweryIcon from '../../../assets/icons/beer-factory.png';
import GroupIcon from '../../../assets/icons/brewery-group.png';
import { Link } from 'react-router-dom';

const brewerySingleItem = props => (
    <div style={{width: props.width}} key={props.id} className="brewery-single-item-main-container">
        <div className="brewery-single-item-long">
            <div>   
                <div>
                    <img src={BreweryIcon} alt="Ikona browaru" />
                </div>
                <p className="brewery-title brewery-name">
                    {props.name}
                </p>
                <div className="brewery-group-stats">
                   <img src={GroupIcon} alt="Ikonka" />
                   <Link className="link-to-group-details" 
                       to={`/grupy/${props.brewingGroup.id}`}>{props.brewingGroup.name}</Link>
                </div>     
                                            
    
            </div>
           <article>
               <p className="brewery-title">Istnieje od {props.brewingGroup.createDate.slice(0, 4)} roku</p>    
                  O {props.description}
                  Opis piwa dsadasd asd asd as asdasdds a daasas a asdas dadas dads a adas as a adas adas a a aOpis piwa dsadasd asd asd as asdasdds a daasas a asdas dadas dads a adas as a adas adas a a a v Opis piwa dsadasd asd asd as asdasdds a daasas a asdas dadas dads a adas as a adas adas a a a Opis piwa dsadasd asd asd as asdasdds a daasas a asdas dadas dads a adas as a adas adas a a apis piwa dsadasd asd asd as asdasdds a daasas a asdas dadas dads a adas as a adas adas a a a asdasdas adad adaa </article>   
        </div>
        <h3>Marki piw <b>{props.beers.length}</b></h3>
        <Slicker classy="slider-container">
            <div>
                <img src={BreweryIcon} alt="Przykład" />
                <img src={BreweryIcon} alt="Przykład" />
                <img src={BreweryIcon} alt="Przykład" />
                <img src={BreweryIcon} alt="Przykład" />
                <img src={BreweryIcon} alt="Przykład" />
            </div>
            <div>
                <img src={BreweryIcon} alt="Przykład" />
                <img src={BreweryIcon} alt="Przykład" />
                <img src={BreweryIcon} alt="Przykład" />
                <img src={BreweryIcon} alt="Przykład" />
                <img src={BreweryIcon} alt="Przykład" />
           </div>
        </Slicker>
   
        <Link params={{id: props.id}} to={`/browary/${props.id}`} className="go-to-details-button">
            Zobacz szczegóły
        </Link>   

 </div>
);

export default brewerySingleItem;
