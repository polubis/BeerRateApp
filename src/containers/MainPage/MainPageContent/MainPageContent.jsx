import React, { Component } from 'react';
import './MainPageContent.css';
import Curiosities from '../../../components/_curiosity/_curiosity';
import BeerGroupCart from '../../../components/_beerGroupCart/_beerGroupCart';
import LeftRank from '../../../components/_leftRank/_leftRank';
import { curiosities } from '../../../consts/CuriosityArray';
import { connect } from 'react-redux';
import { getTopBeersActionCreator } from '../../../store/Beers/Actions';
import Spinner from '../../../components/UI/_spinner/_spinner';
import Aux from '../../../hoc/auxilary';
import NotFound from '../../../components/UI/_notFoundResult/_notFoundResult';

class MainPageContent extends Component {
    state = {
        spinner: true,
        randomizedItems: null,
        randomizedBeer: null,
        sugestedBeers: []
    }
    componentDidMount(){
        this.props.getTopBeers();
    }
    getCorrectGroups = groups => {
        const correctGroups = [];
        for(let key in groups){
            if(groups[key].breweries.length > 0){
                for(let keyo in groups[key].breweries){
                    if(groups[key].breweries[keyo].beers.length > 0){
                        correctGroups.push(groups[key]);
                    }
                }
            }
        }
        return correctGroups;
    }
    getCorrectBeers = group => {
        const correctBeers = [];
        for(let key in group.breweries){
            if(group.breweries[key].beers.length > 0){
                for(let keyo in group.breweries[key].beers){
                    correctBeers.push(group.breweries[key].beers[keyo]);
                }
            }
        }
        return correctBeers;
    }
    changeBeer = () => {
        this.setState({randomizedBeer: this.state.randomizedBeer+1 >= this.state.sugestedBeers.length ? 0 :
            this.state.randomizedBeer+1});
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.getTopBeersErrors !== this.props.getTopBeersErrors || 
            nextProps.topBeers !== this.props.topBeers){

            const correctGroups = this.getCorrectGroups(nextProps.fetchedGroups);
            const randomizedItems = correctGroups[Math.floor(Math.random()*correctGroups.length)];

            const correctBeers = this.getCorrectBeers(randomizedItems);

            this.setState({spinner: false, randomizedItems: randomizedItems, randomizedBeer: 0,
                sugestedBeers: correctBeers});
        }
    }

    render() {  
        return ( 
            <div className="beers-block-container">
            
                {this.state.spinner ? <Spinner color="white" 
                spinnerContent="trwa wczytywanie..."/> : 
                this.props.getTopBeersErrors.length > 0 ?
                <NotFound message="Wystąpił błąd podczas wczytywania danych" /> : 
                <Aux>
                    <Curiosities curiosities={curiosities} />
                    <div className="main-page-content-container">
                        <LeftRank beers={this.props.topBeers} 
                        />

                        <BeerGroupCart 
                        group={this.state.randomizedItems} 
                        beer={this.state.sugestedBeers[this.state.randomizedBeer]} 
                        changeBeer={this.changeBeer}/>
                    </div>
                </Aux>}
            </div>
                
         )
    }
}
 
const mapStateToProps = state => {
    return {
        topBeers: state.BeersReducer.topBeers,
        getTopBeersErrors: state.BeersReducer.getTopBeersErrors,
        fetchedGroups: state.BeersReducer.fetchedGroups
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getTopBeers: () => dispatch(getTopBeersActionCreator())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPageContent);
