import React from 'react';
import './_topContent.css';
import Beer from '../../../assets/piwo.png';
import Stars from '../../../components/_stars/_stars';
import Awards from '../../../components/_awards/_awards';

const topContent = props => (
    <div className="top-content-container">
        <div className="top-content-left">

            <h1>Piwo Tyskie</h1>
            <div style={{backgroundImage: `url(${Beer})`}} className="beer-picture">
            </div>
            <article>
                <h2>Opis produktu</h2>  
                <div>
                    Piwo wykonywane z najelszej jakości materiałow. Idealne w upalne dni i pozwala zapomniec o problemach.
                    Serdecznie polecane osobom ze sklonnosciami do hazardu .
                    Piwo wykonywane z najelszej jakości materiałow. Idealne w upalne dni i pozwala zapomniec o problemach.
                    Serdecznie polecane osobom ze sklonnosciami do hazardu .
                    Piwo wykonywane z najelszej jakości materiałow. Idealne w upalne dni i pozwala zapomniec o problemach.
                    Serdecznie polecane osobom ze sklonnosciami do hazardu .
                    Piwo wykonywane z najelszej jakości materiałow. Idealne w upalne dni i pozwala zapomniec o problemach.
                    Serdecznie polecane osobom ze sklonnosciami do hazardu .
                </div>
            </article>

        </div>
        <div className="top-content-right">
            <h2>Oceny użytkowników</h2>
            <div>
                <Stars fontSize="24px" rate={4.53}/>
                <b>4.35</b>
            </div>
            <p><b>135 głosów</b></p>
            <Awards />

            
        </div>
    </div>
);
export default topContent;
