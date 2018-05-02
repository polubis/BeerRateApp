import React from 'react';
import './_beerDetailCart.css';


const beerDetailCart = props => (
<div style={{width: props.width, backgroundColor: props.backgroundColor}} className="midle-details-container">
    <p>Szczegóły</p>
    <ul>
        <li>Kraj <b className="orange-link">Polska</b></li>
        <li>Dystrybucja <b className="orange-link">Regionalna</b></li>
        <li>Typ <b className="orange-link">Pszeniczne</b></li>
        <li>Kolor <b className="orange-link">Bursztynowy</b></li>
        <li>Rodzaj <b className="orange-link">Lagger</b></li>
        <li>Typ <b className="orange-link">Przeniczne</b></li>
        <li>IBU <b className="orange-link">4.5%</b></li>
        <li>BLG <b className="orange-link">4.5%</b></li>
        <li>Cena <b className="orange-link">16,7 zł</b></li>
        <li>Zawartość alkoholu <b className="orange-link">4.5%</b></li>                                        
    </ul>
</div>
);


export default beerDetailCart;
