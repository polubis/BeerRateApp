import React, { Component } from 'react';
import './Ranks.css';
import Beers from '../../assets/beers.jpg';
import RankBeerDetails from './_rankBeerDetails/_rankBeerDetails';
import RankDescription from './_rankDescription/_rankDescription';
import RankStats from './_rankStats/_rankStats';
import Cup from '../../assets/icons/cup.png';

const helpArray = [
    {place: 1, name: "Tyskie", img: Beers, desc: "Piwo szlachetnie tworzone przez przoadkow o wyrazistym glebokim smaku i wysokim poziomie goryczy. Pozwala odpoczac w gorace dni i tak dalej", type: "Przeniczne", material: "Przeniczne", dystrybution: "Regionalne", alkPercent: "4,5%", group: "Bracia", brewery: "Podhalanski browar", rate: 4.56},
    {place: 2, name: "Tyskie", img: Beers, desc: "Piwo szlachetnie tworzone przez przoadkow o wyrazistym glebokim smaku i wysokim poziomie goryczy. Pozwala odpoczac w gorace dni i tak dalej", type: "Przeniczne", material: "Przeniczne", dystrybution: "Regionalne", alkPercent: "4,5%", group: "Bracia", brewery: "Podhalanski browar", rate: 4.56},
    {place: 3, name: "Tyskie", img: Beers, desc: "Piwo szlachetnie tworzone przez przoadkow o wyrazistym glebokim smaku i wysokim poziomie goryczy. Pozwala odpoczac w gorace dni i tak dalej", type: "Przeniczne", material: "Przeniczne", dystrybution: "Regionalne", alkPercent: "4,5%", group: "Bracia", brewery: "Podhalanski browar", rate: 4.56},
    {place: 4, name: "Tyskie", img: Beers, desc: "Piwo szlachetnie tworzone przez przoadkow o wyrazistym glebokim smaku i wysokim poziomie goryczy. Pozwala odpoczac w gorace dni i tak dalej", type: "Przeniczne", material: "Przeniczne", dystrybution: "Regionalne", alkPercent: "4,5%", group: "Bracia", brewery: "Podhalanski browar", rate: 4.56},
    {place: 5, name: "Tyskie", img: Beers, desc: "Piwo szlachetnie tworzone przez przoadkow o wyrazistym glebokim smaku i wysokim poziomie goryczy. Pozwala odpoczac w gorace dni i tak dalej", type: "Przeniczne", material: "Przeniczne", dystrybution: "Regionalne", alkPercent: "4,5%", group: "Bracia", brewery: "Podhalanski browar", rate: 4.56},
    {place: 6, name: "Tyskie", img: Beers, desc: "Piwo szlachetnie tworzone przez przoadkow o wyrazistym glebokim smaku i wysokim poziomie goryczy. Pozwala odpoczac w gorace dni i tak dalej", type: "Przeniczne", material: "Przeniczne", dystrybution: "Regionalne", alkPercent: "4,5%", group: "Bracia", brewery: "Podhalanski browar", rate: 4.56},
    {place: 7, name: "Tyskie", img: Beers, desc: "Piwo szlachetnie tworzone przez przoadkow o wyrazistym glebokim smaku i wysokim poziomie goryczy. Pozwala odpoczac w gorace dni i tak dalej", type: "Przeniczne", material: "Przeniczne", dystrybution: "Regionalne", alkPercent: "4,5%", group: "Bracia", brewery: "Podhalanski browar", rate: 4.56},
    {place: 8, name: "Tyskie", img: Beers, desc: "Piwo szlachetnie tworzone przez przoadkow o wyrazistym glebokim smaku i wysokim poziomie goryczy. Pozwala odpoczac w gorace dni i tak dalej", type: "Przeniczne", material: "Przeniczne", dystrybution: "Regionalne", alkPercent: "4,5%", group: "Bracia", brewery: "Podhalanski browar", rate: 4.56}

    
]

class Ranks extends Component{
    render(){
    
        return(
            <div className="ranks-container">
                <img id="rank-icon" src={Cup} alt="Ranking" />
                <table>
                    <tr>
                        <th>Statystki</th>
                        <th>Informacje ogólne</th>
                        <th>Opis</th>
                    </tr>
                    {helpArray.map(tr => {
                        return (
                            <tr key={tr.place}>
                                <RankStats 
                                place={tr.place}
                                rate={tr.rate} />
                                
                                <RankBeerDetails 
                                alkPercent={tr.alkPercent}
                                dystrybution={tr.dystrybution}
                                type={tr.type}
                                material={tr.material}
                                img={Beers}
                                brewery={tr.brewery}
                                group={tr.group}
                                rate={tr.rate}
                                name={tr.name}
                                />

                                <RankDescription desc={tr.desc}/>
                                                         
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}

export default Ranks;