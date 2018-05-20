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
import BeerDetailCart from '../../components/Beers/_beerDetailCart/_beerDetailCart';
import { Link } from 'react-router-dom';
import { fetchAllBeersActionCreator } from '../../store/Beers/Actions';
import { connect } from 'react-redux';
import NotFound from '../../components/UI/_notFoundResult/_notFoundResult';
import Spinner from '../../components/UI/_spinner/_spinner';
import Aux from '../../hoc/auxilary';




class BeersList extends Component{
    state = {
        searchValue: "",
        items: [],
        searchedItems: [],
        allBeersSpinner: true
    }
    componentDidMount(){
        this.props.fetchAllBeers();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.loadedBeers !== undefined){
            this.setState({items: nextProps.loadedBeers,
                searchedItems: nextProps.loadedBeers, allBeersSpinner: false});
        }
      
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
        console.log(this.state.searchedItems);
        return(
            

            <div className="beers-list-container">
                {this.state.allBeersSpinner ? <Spinner 
                    color="white" 
                    fontSize="22px" 
                    spinnerContent="trwa ładowanie..."/> : null}

                <Searcher
                max={this.state.searchedItems.length <= 0 ? 
                    this.state.searchValue.length : undefined}
                placeholder="wpisz nazwę piwa..."
                width="350px"
                changeHandler={e => this.searchOnChangeHandler(e)}
                value={this.state.searchValue}
                searchedCount={this.state.searchedItems.length} />

                {this.props.loadingAllBeersErrors.length > 0 ?
                    <NotFound message={this.props.loadingAllBeersErrors[0]} /> : null}

            {this.state.items ? 
            <Aux>
                {this.state.searchedItems.map(i => {
                    return (
                        <div className="beer-block-container">
                            <div className="beer-block-image-holder-background">
                                
                                <p>{i.name}</p>
                                <div style={{backgroundImage: `url(${Beers})`}} className="beer-block-image-holder">
                                </div>
                                <div className="beer-min-awards-container">
                                    <MinAwards 
                                    flex="row" 
                                    width="150px" 
                                    height="60px" 
                                    items={awardArray}/>

                                </div>
                                <Link to={`/piwa/${i.id}`} className="show-more-beer">Zobacz wiecej</Link>

                            </div>
                            <div className="right-beer-block-container">
                                <div className="top-beer-block-container">
                                    <div style={{backgroundImage: `url(${BeerGroup})`}} className="group-block">
                                        <img className="front-desc-icon" src={GroupIcon} alt="Ikona grup" />
                                        <p className="front-description">Bracia</p>
                                    </div>
                                    <div className="rate-block-container">
                                        <h2>Ocena użytkowników</h2>
                                        <Stars btnOn={true} show={true} fontSize="26px" 
                                        width="80%" rate={i.averageOfRatings} beerId={i.id}/>
                                        {i.averageOfRatings !== 0 ? 
                                        <p>Oddano <b className="orange-link">{i.ratings ? 
                                        i.ratings.length : 0}</b> głosów</p> : null}
                                    </div>
                                </div>
                                <BeerDetailCart 
                                alcohol={i.alcohol}
                                price={i.price}
                                blg={i.blg}
                                color={i.color}
                                ibu={i.ibu}
                                country={i.country}
                                />

                                <div className="right-breweries-container">
                                    <article className="breweries-top-block">
                                        <p>Czas na <b className="orange-link">{i.name}</b></p>
                                        {i.description}
                                    </article>
                                    <div style={{backgroundImage: `url(${Breweries})`}} className="breweries-bottom-block">
                                        <img className="front-desc-icon" src={BreweryIcon} alt="Ikona grup" />
                                        <p className="front-description">{i.brewery.name}</p>
                                    </div>
                                </div>
                                
                                
                            </div>

                        </div>
                    );
                    })}
                
               
            </Aux> : null}
        </div>
            
           
        );
    }
}


const mapStateToProps = state => {
    return {
        loadedBeers: state.BeersReducer.loadedBeers,
        loadingAllBeersErrors: state.BeersReducer.loadingAllBeersErrors
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllBeers: () => dispatch(fetchAllBeersActionCreator())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(BeersList);


