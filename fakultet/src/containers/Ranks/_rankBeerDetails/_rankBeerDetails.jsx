import React from 'react';
import './_rankBeerDetails.css';
import Stars from '../../../components/_stars/_stars';
const rankBeerDetails = props => (
    <td>
            <div className="rank-beer-details-container">
        <h3 className="orange-link">{props.name}</h3>
        <div className="image-content-holder">
            <span className="rate-stars">
                <Stars rate={props.rate}/>          
            </span>
            <span className="rate-value">
                {props.rate}
            </span>
            <div className="table-img-holder">
                <img src={props.img} alt={props.name} />
            </div>
            <p><b>Grupa piwowarska: </b><i className="orange-link">{props.group}</i></p>
            <p><b>Browar: </b><i className="orange-link">{props.brewery}</i></p>
        </div>
        

        
        <article>
            <p>
                <b>
                    Rodzaj
                </b>
                <i className="orange-link">{props.type}</i>
            </p>
            <p>
                <b>
                    Typ: 
                </b>
                <i className="orange-link">{props.material}</i>
            </p>
            <p>
                <b>
                    Dystrybucja: 
                </b>
                <i className="orange-link">{props.dystrybution}</i>
            </p>
            <p>
                <b>
                    Rodzaj: 
                </b>
                <i className="orange-link">{props.alkPercent}</i>
            </p>
        </article>

    </div>
    </td>
    
);

export default rankBeerDetails;