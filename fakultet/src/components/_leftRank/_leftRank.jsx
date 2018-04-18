import React from 'react';
import './_leftRank.css';
import Image from '../../assets/beers.jpg';


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
            return (
                <div key={i.id} className="carousel-bar-block">
                    <img src={Image} alt="Piwo" />
                    <div>
                        <h2>{i.title} 
                            <span>
                                <b>{i.rate}</b>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                        </h2>
                        <p>{i.content} <b className="orange-link">Szczegóły</b>

                        </p>
                    </div>
                </div> 
            );
        })}
            
        </div>
    );
}

 
export default leftRank;