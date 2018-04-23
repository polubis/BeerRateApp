import React, { Component } from 'react';
import './Ranks.css';
import Beers from '../../assets/beers.jpg';
import RankBeerDetails from './_rankBeerDetails/_rankBeerDetails';
import RankDescription from './_rankDescription/_rankDescription';
import RankStats from './_rankStats/_rankStats';
import Cup from '../../assets/icons/cup.png';
import Searcher from '../../components/UI/_searcher/_searcher';
import NotFoundResult from '../../components/UI/_notFoundResult/_notFoundResult'; 
import Aux from '../../hoc/auxilary';

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
    state = {
        searchValue: "",
        items: helpArray,
        searchedItems: helpArray
    }

    searchOnChangeHandler = event => {
        let resultArray = [];
        for(let key in this.state.items){
            if(this.state.items[key].name.toUpperCase().search(event.target.value.toUpperCase()) !== -1 || 
            this.state.items[key].place.toString().search(event.target.value.toUpperCase()) !== -1 || 
            this.state.items[key].rate.toString().search(event.target.value.toUpperCase()) !== -1){
                resultArray.push(this.state.items[key]);
            }
        }
        this.setState({searchedItems: resultArray, searchValue: event.target.value});
    }

    render(){
    
        return(
            <Aux>
                <Searcher
                max={this.state.searchedItems.length <= 0 ? 
                    this.state.searchValue.length : undefined}
                top="-60px"
                placeholder="wpisz nazwę piwa, ocene lub pozycję w rankingu"
                width="450px"
                changeHandler={e => this.searchOnChangeHandler(e)}
                value={this.state.searchValue} />

                <div className="ranks-container">
                <img id="rank-icon" src={Cup} alt="Ranking" />
                {this.state.searchedItems.length > 0 ? <table>
                    <tr>
                        <th>Statystki</th>
                        <th>Informacje ogólne</th>
                        <th>Opis</th>
                    </tr>
                    {this.state.searchedItems.map(tr => {
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
                </table> : <NotFoundResult message={`Nie udało znaleźć się rekordu o frazie ${this.state.searchValue}`}/> }
                 
              
                </div>
            </Aux>
            
        );
    }
}

export default Ranks;