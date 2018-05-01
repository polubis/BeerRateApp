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

import NotFoundResult from '../../components/UI/_notFoundResult/_notFoundResult';

import { Link } from 'react-router-dom';
import Searcher from '../../components/UI/_searcher/_searcher';

import { connect } from 'react-redux';
import { fetchAllGroupsActionCreator } from '../../store/BeerGroups/Actions';

import Spinner from '../../components/UI/_spinner/_spinner';
class BeerGroupList extends Component{
    state = {
        showAwardDesc: false,
        awardDescContent: null,
        searchValue: "",
        items: [],
        searchedItems: [],

        loadingSpinner: true
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.loadedGroups !== undefined){
            this.setState({items: nextProps.loadedGroups,
                searchedItems: nextProps.loadedGroups, loadingSpinner: false});
        }
    }
    componentDidMount(){
        this.props.fetchingGroups();
    }
    showAwardDescClickHandler = event => {
        this.setState({showAwardDesc: true, awardDescContent: awardArray[event.target.id]});
    }
    closeAwardOnMouseOutHandler = () => {
        this.setState({showAwardDesc: false, awardDescContent: null});
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

    render(){
        return(
            <div className="beer-group-list-container">
                <Searcher
                max={this.state.searchedItems.length <= 0 ? 
                    this.state.searchValue.length : undefined}
                placeholder="znajdź grupe..."
                changeHandler={e => this.searchOnChangeHandler(e)}
                value={this.state.searchValue}
                searchedCount={this.state.searchedItems.length} />
                
               

                {this.state.loadingSpinner ? <Spinner spinnerContent="trwa ładowanie..."/> : null}

                
                    
                {this.props.loadingAllGroupsErrors.length === 0 ? this.state.searchedItems.map(i => {
                    return <FlipCart key={i.id} margin="20px 20px 20px 20px" height="400px" width="290px" front={
                    <div style={{backgroundImage: `url(${BeerFactory})`}} className="beer-group-block">
                        <img src={BreweryGroup} className="capsel-type" alt="Grupa piwowarska" />                    
                        <div className="main-content-container">
                            <h3 className="orange-link">{i.name}</h3>
                            <article>
                                {i.description ? i.description : "Brak opisu"}  
                            </article>
                            <p><b className="orange-link">Liczba browarów:</b> <i>{i.breweries.length}</i> <img className="small-icon" src={Brewery} alt="Browar"/></p>
                            <p><b className="orange-link">Liczba produktów: </b><i>3</i><img className="small-icon" src={BeerIcon} alt="Piwo" /></p>
                            
                            <div className="flip-cart-icons-container">
                                <div id="owner-image-holder" style={{backgroundImage: `url(${Owner})`}}>
                                    <p>Właściciel</p>
                                    <p>{i.director}</p>
                                    
                                </div>
                                <div id="map-image-holder" style={{backgroundImage: `url(${GMap})`}}>
                                    <p>Lokalizacja</p>
                                    <p>{i.address}</p>
                                    
                                </div>
                                <div id="date-image-holder" style={{backgroundImage: `url(${BirthDate})`}}>
                                    <p>Data powstania</p>
                                    <p>{i.createDate.slice(0,10)}</p>
                                    
                                </div>
                            </div>
                            
                        </div>
                     
                        
                    </div>}  back={
                        <div className="beer-group-awards-container">
                            {this.state.showAwardDesc ? 
                            <div className="award-description-container">
                                <h3>{this.state.awardDescContent.name}</h3>
                                <img src={this.state.awardDescContent.img} alt={this.state.awardDescContent.name} />
                                <article>{this.state.awardDescContent.desc}</article>
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
                    
                }) : <NotFoundResult message={this.props.loadingAllGroupsErrors[0]}/>}
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loadedGroups: state.BeerGroupsReducer.loadedGroups,
        loadingAllGroupsErrors: state.BeerGroupsReducer.loadingAllGroupsErrors
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchingGroups: () => dispatch(fetchAllGroupsActionCreator())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(BeerGroupList);


