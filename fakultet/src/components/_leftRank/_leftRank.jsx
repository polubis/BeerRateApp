import React from 'react';
import './_leftRank.css';
import BeerCart from '../_beerCart/_beerCart';

const leftRank = props => {
    const leftRank = [
        {id:1, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
        {id:2, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
        {id:3, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
        {id:4, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
        {id:5, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
        {id:6, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
        {id:7, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43}
    ]
    return (
        <div className="left-block-container">
        <h2>Polecane na dziś</h2>
        {leftRank.map(i => {
            return <BeerCart key={i.id} title={i.title} rate={i.rate} content={i.content}/>;
        })}
            
        </div>
    );
}

 
export default leftRank;