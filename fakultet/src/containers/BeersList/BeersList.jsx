import React, { Component } from 'react';
import './BeersList.css';
import Beers from '../../assets/beers.jpg';
import MinAwards from '../../components/_minAwards/_minAwards';
import {awardArray} from '../../consts/AwardArray';
import GroupIcon from '../../assets/icons/brewery-group.png';
import BeerGroup from '../../assets/beer-rewards/beer-factory-back.jpg';
import Breweries from '../../assets/beer-rewards/Browary.jpg';
import BreweryIcon from '../../assets/icons/beer-factory.png';
import Stars from '../../components/_stars/_stars';

import Searcher from '../../components/UI/_searcher/_searcher';
import SearcherNotFound from '../../components/UI/_searcherNotFound/_searcherNotFound';

const helpArray = [
    {id: 0, name: "Tyskie", img: Beers, desc:"Piwo przeznaczone dla osób odpowiedzialnych i znających się na smakach. Należy pamiętać ze ako tylko od 18 lat. ", alc: 5.4, price: 7.50, ibu: 16.0, rate: 4.5, brewery: "Browar podhalanski", group: "Bracia"},
    {id: 1, name: "Tyskie", img: Beers, desc:"Piwo przeznaczone dla osób odpowiedzialnych i znających się na smakach. Należy pamiętać ze ako tylko od 18 lat. ", alc: 5.4, price: 7.50, ibu: 16.0, rate: 4.5, brewery: "Browar podhalanski", group: "Bracia"},
    {id: 2, name: "Tyskie", img: Beers, desc:"Piwo przeznaczone dla osób odpowiedzialnych i znających się na smakach. Należy pamiętać ze ako tylko od 18 lat. ", alc: 5.4, price: 7.50, ibu: 16.0, rate: 4.5, brewery: "Browar podhalanski", group: "Bracia"},
    {id: 3, name: "Tyskie", img: Beers, desc:"Piwo przeznaczone dla osób odpowiedzialnych i znających się na smakach. Należy pamiętać ze ako tylko od 18 lat. ", alc: 5.4, price: 7.50, ibu: 16.0, rate: 4.5, brewery: "Browar podhalanski", group: "Bracia"},
    {id: 4, name: "Tyskie", img: Beers, desc:"Piwo przeznaczone dla osób odpowiedzialnych i znających się na smakach. Należy pamiętać ze ako tylko od 18 lat. ", alc: 5.4, price: 7.50, ibu: 16.0, rate: 4.5, brewery: "Browar podhalanski", group: "Bracia"}

];

class BeersList extends Component{
    state = {
        searchValue: "",
        items: helpArray,
        searchedItems: helpArray
    }

    searchOnChangeHandler = event => {
        let resultArray = [];
        for(let key in this.state.items){
            if(this.state.items[key].name.toUpperCase().search(event.target.value.toUpperCase()) !== -1 || 
                this.state.items[key].brewery.toUpperCase().search(event.target.value.toUpperCase()) !== -1 || 
                this.state.items[key].group.toUpperCase().search(event.target.value.toUpperCase()) !== -1){
                resultArray.push(this.state.items[key]);
            }
        }
        this.setState({searchedItems: resultArray, searchValue: event.target.value});
    }

    render(){
       

        return(
            <div className="beers-list-container">
                <Searcher
                max={this.state.searchedItems.length <= 0 ? 
                    this.state.searchValue.length : undefined}
                placeholder="wpisz nazwę piwa, browaru lub grupy..."
                width="350px"
                changeHandler={e => this.searchOnChangeHandler(e)}
                value={this.state.searchValue} />
                {this.state.searchedItems.length > 0 ? this.state.searchedItems.map(i => {
                    return (
                        <div className="beer-block-container">
                            <div className="beer-block-image-holder-background">
                                
                                <p>Tyskie</p>
                                <div style={{backgroundImage: `url(${Beers})`}} className="beer-block-image-holder">
                                </div>
                                <div className="beer-min-awards-container">
                                    <MinAwards 
                                    flex="row" 
                                    width="150px" 
                                    height="60px" 
                                    items={awardArray}/>

                                </div>


                            </div>
                            <div className="right-beer-block-container">
                                <div className="top-beer-block-container">
                                    <div style={{backgroundImage: `url(${BeerGroup})`}} className="group-block">
                                        <img className="front-desc-icon" src={GroupIcon} alt="Ikona grup" />
                                        <p className="front-description">Bracia</p>
                                    </div>
                                    <div className="rate-block-container">
                                        <h2>Ocena użytkowników</h2>
                                        <Stars show={true} fontSize="26px" width="80%" rate={4.34}/>
                                        <p>Oddano <b className="orange-link">135</b> głosów</p>
                                    </div>
                                </div>
                                <div className="midle-details-container">
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
                                <div className="right-breweries-container">
                                    <article className="breweries-top-block">
                                        <p>Czas na <b className="orange-link">Tyskie</b></p>
                                        Piwo <b className="orange-link">Tyskie</b> cechuje się wysokiej jakości smakiem oraz takie tam inne rzeczy
                                        Piwo <b className="orange-link">Tyskie</b> cechuje się wysokiej jakości smakiem oraz takie tam inne rzeczy
                                        Piwo <b className="orange-link">Tyskie</b> cechuje się wysokiej jakości smakiem oraz takie tam inne rzeczy
                                    </article>
                                    <div style={{backgroundImage: `url(${Breweries})`}} className="breweries-bottom-block">
                                        <img className="front-desc-icon" src={BreweryIcon} alt="Ikona grup" />
                                        <p className="front-description">Browar podhalański</p>
                                    </div>
                                </div>
                                
                               
                            </div>

                        </div>
                    );
                }) : <SearcherNotFound message={`Nie znaleziono marki piwa o podanym atrybucie ${this.state.searchValue}`} />}
            </div>
        );
    }
}

export default BeersList;