import React, { Component } from 'react';
import "./BreweriesList.css";
import Searcher from '../../components/UI/_searcher/_searcher';
import Aux from '../../hoc/auxilary';
import Brewery from '../../assets/beer-rewards/Browary.jpg';
import NotFoundResult from '../../components/UI/_notFoundResult/_notFoundResult';
import BreweryIcon from '../../assets/icons/beer-factory.png';
import GroupIcon from '../../assets/icons/brewery-group.png';
import { Link } from 'react-router-dom';

const helpArray = [
    {id: 0, name: "Browar Perun", place: "Śląsk", group: "Wadowicka"},
    {id: 1, name: "Browar Perun", place: "Śląsk", group: "Wadowicka"},
    {id: 2, name: "Browar Perun", place: "Śląsk", group: "Wadowicka"},
    {id: 3, name: "Browar Perun", place: "Śląsk", group: "Wadowicka"},
    {id: 4, name: "Browar Perun", place: "Śląsk", group: "Wadowicka"},
    {id: 5, name: "Browar Perun", place: "Śląsk", group: "Wadowicka"},
    {id: 6, name: "Browar Perun", place: "Śląsk", group: "Wadowicka"},
    {id: 7, name: "Browar Perun", place: "Śląsk", group: "Wadowicka"}
    
];

class BreweriesList extends Component {
    state = {
        searchValue: "",
        items: helpArray,
        searchedItems: helpArray
    }
    searchOnChangeHandler = event => {
        let resultArray = [];
        for(let key in this.state.items){
            if(this.state.items[key].name.toUpperCase().search(event.target.value.toUpperCase()) !== -1){
                resultArray.push(this.state.items[key]);
            }
        }
        this.setState({searchedItems: resultArray, searchValue: event.target.value});
    }
    render() { 
        return ( 
            <Aux>
                <Searcher
                max={this.state.searchedItems.length <= 0 ? 
                    this.state.searchValue.length : undefined}
                placeholder="wpisz nazwę browaru..."
                changeHandler={e => this.searchOnChangeHandler(e)}
                value={this.state.searchValue} />       


                <div className="breweries-container">   
                    {this.state.searchedItems.length > 0 ? <div className="breweries-list-container">
                        
                        <div style={{backgroundImage: `url(${BreweryIcon})`}} className="brewery-icon-left">
                        </div>
                        {this.state.searchedItems.map(i => {
                            return (
                            <div key={i.id} className="brewery-block-container">
                                <div style={{backgroundImage: `url(${Brewery})`}} className="brewery-block-image-holder">
                                    
                                    <p>{i.group}
                                        <img src={GroupIcon} alt="Grupa" />
                                    </p>
                                </div>
                                <h2>{i.name}</h2>
                                <Link to={"browary/" + i.id} className="show-more-brewery-button">
                                    Zobacz szczegóły
                                </Link>
                            </div>
                            );
                        })}
                        
                    </div> : <NotFoundResult message={`Nie ma browaru, którego nazwa zawiera ${this.state.searchValue}`}/>}
                </div>
                
                
            </Aux>
            
        )
    }
}
 
export default BreweriesList;