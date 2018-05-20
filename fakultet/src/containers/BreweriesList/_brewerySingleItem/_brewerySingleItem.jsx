import React from 'react';
import './_brewerySingleItem.css';
import Slicker from '../../../components/UI/_slicker/_slicker';
import BreweryIcon from '../../../assets/icons/beer-factory.png';
import GroupIcon from '../../../assets/icons/brewery-group.png';
import { Link } from 'react-router-dom';
import { changingArray } from '../../../services/changingArray';
import Aux from '../../../hoc/auxilary';
const brewerySingleItem = props => {
    let twoDArray = null;
    if(props.beers.length > 0)
        twoDArray = changingArray(5, props.beers);
    
    return (

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
            </article>   
        </div>
        
        {twoDArray !== null ? 
            <Aux>
                <h3 className="length-of-beers">Marki piw <b>{props.beers.length}</b></h3>
                <Slicker classy="slider-container">
                    {twoDArray.map( i => {
                        return (
                            <div key={i.id}>
                                {i.array.map(j => {
                                    return <img id={j.id} onClick={props.redirectToBeer} 
                                    key={j.id} src={BreweryIcon} alt="Przykład" />;
                                })}
                            </div>
                        );
                    })}
                
                </Slicker>
            </Aux> : <p className="zero-beers-in-brewery">Ten browar nie posiada piw</p>
        }
        
   
        <Link params={{id: props.id}} to={`/browary/${props.id}`} className="go-to-details-button">
            Zobacz szczegóły
        </Link>   

    </div>
    );
    
};

export default brewerySingleItem;
