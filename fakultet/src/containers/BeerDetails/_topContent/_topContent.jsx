import React from 'react';
import './_topContent.css';
import Beer from '../../../assets/piwo.png';
import Stars from '../../../components/_stars/_stars';
import Awards from '../../../components/_awards/_awards';
import Aux from '../../../hoc/auxilary';
const topContent = props => (
    <div className="top-content-container">
        <div className="top-content-left">

            <h1>Piwo {props.name}</h1>
            <div style={{backgroundImage: `url(${Beer})`}} className="beer-picture">
            </div>
            <article>
                <h2>Opis produktu</h2>  
                <div>{props.description}</div>
            </article>

        </div>
        <div className="top-content-right">
            <h2>Oceny użytkowników</h2>
            {props.averageOfRatings === 0 ? 
            <p className="not-voted-yet">Tego piwa jeszcze nie oceniono...</p> :
            <Aux>
            <div className="top-right-inside-container">
                <Stars fontSize="24px" rate={props.averageOfRatings}/>
                <b>{props.averageOfRatings}</b>
            </div>
            <p><b>Liczba opini: {props.commentsLength}</b></p>
            </Aux> }
            

            <Awards />

            
        </div>
    </div>
);
export default topContent;
