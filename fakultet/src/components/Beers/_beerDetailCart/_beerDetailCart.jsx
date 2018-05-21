import React from 'react';
import './_beerDetailCart.css';


const beerDetailCart = props => (
<div style={{width: props.width, backgroundColor: props.backgroundColor}} className="midle-details-container">
    <p>Szczegóły</p>
    <ul>
        <li>Kraj <b className="orange-link">{props.country}</b></li>
        <li>Dystrybucja <b className="orange-link">{props.distribution}</b></li>
        <li>Typ <b className="orange-link">{props.type}</b></li>
        <li>Kolor <b className="orange-link">{props.color}</b></li>
        <li>Rodzaj <b className="orange-link">{props.kindOf}</b></li>
        <li>IBU <b className="orange-link">{props.ibu}</b></li>
        <li>BLG <b className="orange-link">{props.blg}</b></li>
        <li>Cena <b className="orange-link">{props.price}</b></li>
        <li>Zawartość alkoholu <b className="orange-link">{props.alcohol}</b></li>                                        
    </ul>
</div>
);


export default beerDetailCart;
