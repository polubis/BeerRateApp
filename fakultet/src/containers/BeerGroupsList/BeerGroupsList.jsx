import React, { Component } from 'react';
import './BeerGroupsList.css';
import BreweryGroup from '../../assets/icons/brewery-group.png';
import BeerFactory from '../../assets/beer-rewards/beer-factory-back.jpg';
import FlipCart from '../../components/UI/_flipCart/_flipCart';
import Owner from '../../assets/beer-group-details/owner-png.png';
import BirthDate from '../../assets/beer-group-details/birth-date.png';
import GMap from '../../assets/beer-group-details/map.png';
import Brewery from '../../assets/icons/beer-factory.png';
import BeerIcon from '../../assets/icons/beer-icon.png';
import Beers from '../../assets/beers.jpg';

import MinAwards from '../../components/_minAwards/_minAwards';
import {awardArray} from '../../consts/AwardArray';

import { Link } from 'react-router-dom';

class BeerGroupList extends Component{
    state = {
        showAwardDesc: false,
        awardDescContent: null
    }
    showAwardDescClickHandler = (event) => {
        this.setState({showAwardDesc: true, awardDescContent: awardArray[event.target.id]});
    }
    closeAwardOnMouseOutHandler = () => {
        this.setState({showAwardDesc: false, awardDescContent: null});
    }
    render(){
        const helperArray = [
            {id: 1, compName: "Bracia", desc: "Bracia słyna ze swoich piw, ktore rozprowadzaja wszedzie gdzie sie tylko da", img: BeerFactory},
            {id: 2, compName: "Bracia", desc: "Bracia słyna ze swoich piw, ktore rozprowadzaja wszedzie gdzie sie tylko da", img: BeerFactory},
            {id: 3, compName: "Bracia", desc: "Bracia słyna ze swoich piw, ktore rozprowadzaja wszedzie gdzie sie tylko da", img: BeerFactory},
            {id: 4, compName: "Bracia", desc: "Bracia słyna ze swoich piw, ktore rozprowadzaja wszedzie gdzie sie tylko da", img: BeerFactory},
            {id: 5, compName: "Bracia", desc: "Bracia słyna ze swoich piw, ktore rozprowadzaja wszedzie gdzie sie tylko da", img: BeerFactory},
            {id: 6, compName: "Bracia", desc: "Bracia słyna ze swoich piw, ktore rozprowadzaja wszedzie gdzie sie tylko da", img: BeerFactory},
            {id: 7, compName: "Bracia", desc: "Bracia słyna ze swoich piw, ktore rozprowadzaja wszedzie gdzie sie tylko da", img: BeerFactory}
        ]
        const pngArray = [
            {id: 0, title: "Założyciel", img: Owner, content: "Jarek Smorwaa"},
            {id: 1, title: "Lokalizacja", img: GMap, content: "sachusets"},
            {id: 2, title: "Data powstania", img: BirthDate, content: "19-12-1994"}
        ]
        return(
            <div className="beer-group-list-container">
                
                
                {helperArray.map(i => {
                    return <FlipCart key={i.id} margin="20px 20px 20px 20px" height="400px" width="290px" front={
                    <div style={{backgroundImage: `url(${i.img})`}} className="beer-group-block">
                        <img src={BreweryGroup} className="capsel-type" alt="Grupa piwowarska" />                    
                        <div className="main-content-container">
                            <h2 className="orange-link">{i.compName}</h2>
                            <article>
                                {i.desc}  
                            </article>
                            <p><b className="orange-link">Liczba browarów:</b> <i>3</i> <img className="small-icon" src={Brewery} alt="Browar"/></p>
                            <p><b className="orange-link">Liczba produktów: </b><i>3</i><img className="small-icon" src={BeerIcon} alt="Piwo" /></p>
                            <div className="group-details-png-container">
                            {pngArray.map(i => {
                                return (
                                    <div key={i.id}>
                                        <p style={{top: i.id === 2? '-60px' : '-40px'}}>{i.title}</p>
                                        <img src={i.img} alt={i.content} />
                                        <p style={{bottom: i.id === 1 ? '-30px' : '-50px'}}>{i.content}</p>
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                     
                        
                    </div>}  back={
                        <div className="beer-group-awards-container">
                            {this.state.showAwardDesc ? 
                            <div className="award-description-container">
                                Siema
                            </div> : null}
                            <img src={BeerIcon} className="capsel-type" alt="Marki piw" />
                            <MinAwards out={this.closeAwardOnMouseOutHandler} clicked={e => this.showAwardDescClickHandler(e)} items={awardArray}/>
                            <h2>Flagowy produkt</h2>
                            <p>Czas na <b className="orange-link">Tyskie</b></p>
                            <article>
                            <img src={Beers} alt="Piwa" />
                                Piwo tyskie od bardzo dlugiego czasu podbija serca uzytkownikow naszego portalu.
                                Spelnia wszystkie wymagania odnosnie smaku oraz bla blasdasd adscos tam elo siemanero.
                            </article>
                            <p>Typ: <b className="orange-link">lagger</b></p>
                            <p>Rodzaj: <b className="orange-link">przeniczne</b></p>
                            <p>Dystrybucja: <b className="orange-link">regionalna</b></p>
                            <Link to={"/grupy/" + i.id} className="orange-link show-more-button">Zobacz wiecej</Link>
                            
                        </div>
                    }/> 
                    
                })}
                
            </div>
        );
    }
}

export default BeerGroupList;