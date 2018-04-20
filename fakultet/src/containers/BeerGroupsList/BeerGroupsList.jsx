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

import { Link } from 'react-router-dom';

class BeerGroupList extends Component{
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
            {id: 1, title: "Lokalizacja", img: GMap, content: "USA masachusets"},
            {id: 2, title: "Data powstania", img: BirthDate, content: "19-12-1994"}
        ]
        return(
            <div className="beer-group-list-container">
                {helperArray.map(i => {
                    return <FlipCart margin="20px 20px 20px 20px" height="400px" width="290px" front={
                    <div key={i.id} style={{backgroundImage: `url(${i.img})`}} className="beer-group-block">
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
                                        <p style={{bottom: '-50px'}}>{i.content}</p>
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                     
                        
                    </div>}  back={
                        <div className="beer-group-awards-container">
                            <h2>Nagrody</h2>
                            
                            <Link to={"/grupy/" + i.id} className="orange-link">Zobacz wiecej</Link>
                        </div>
                    }/> 
                    
                })}
                
            </div>
        );
    }
}

export default BeerGroupList;