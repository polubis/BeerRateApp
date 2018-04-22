import React from 'react';
import './_rankStats.css';
import Awards from '../../../components/_awards/_awards';

const rankStats = props => (
    <td className="rank-stats-container">
        <h1>{props.place}</h1>
        <div className="awards-stats-container">
            <Awards />
        </div>
        <h3>Liczba poszczegolnych ocen</h3>
        <div className="table-headers">
            <span>Ocena 5</span>
            <span>Ocena 4</span>
            <span>Ocena 3</span>
            <span>Ocena 2</span>
            <span>Ocena 1</span>
        </div>
        <div className="table-headers table-values">
            <span>5</span>
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
        </div>
    </td>
);

export default rankStats;