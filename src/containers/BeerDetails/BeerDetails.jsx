import React, { Component } from 'react';
import './BeerDetails.css';
import { connect } from 'react-redux';
import { loadBeerActionCreator } from '../../store/Beers/Actions';
import { findIndexValue } from '../../services/concatingUrlPath';
import Spinner from '../../components/UI/_spinner/_spinner';
import NotFoundResult from '../../components/UI/_notFoundResult/_notFoundResult';
import Aux from '../../hoc/auxilary';

import CommentSection from './_commentSection/_commentSection';
import BeerContent from './_beerContent/_beerContent';
import TopContent from './_topContent/_topContent';
import { changingArray } from '../../services/changingArray';
import { withRouter } from 'react-router-dom';

class BeerDetails extends Component{
    state = {
        spinner: true, 
        beers: [],
        ratings: []
    }
    componentDidMount(){ 
        this.props.loadBeer(findIndexValue(window.location.href));
    }

    componentWillReceiveProps(prevProps){
        if(prevProps.loadedBeer !== this.props.loadedBeer || 
            prevProps.loadedBeerErrors !== this.props.loadedBeerErrors){
            this.setState({spinner: false});
        }
        if(prevProps.loadedBeer !== undefined) {
            this.setState({beers:  prevProps.loadedBeer.brewery.beers, 
                ratings: prevProps.loadedBeer.ratings});
        }
    }
    addRateToArray = rate => {
        const newRatings = [...this.state.ratings];
        newRatings.push(rate);
        this.setState({ratings: newRatings});
    }
    redirectToBeer = e => {
        this.props.history.push("/piwa/" + e.target.id);
        this.props.loadBeer(e.target.id);
    }
    render(){
        return(
            <div className="beer-details-container">
            
                {this.state.spinner ? <Spinner color="white" spinnerContent="trwa ładowanie"/> : 
                this.props.loadedBeerErrors.length > 0 ? <NotFoundResult message={this.props.loadedBeerErrors[0]}/> : 
                <Aux>
                    <TopContent
                    commentsLength={this.state.ratings.length} 
                    description={this.props.loadedBeer.description}
                    name={this.props.loadedBeer.name}
                    averageOfRatings={this.props.loadedBeer.averageOfRatings.toFixed(2)}
                    beerPicture={this.props.loadedBeer.beerPicture}
                    />
                    
                    <div className="content-container">
                        <BeerContent 
                        id={this.props.loadedBeer.id}
                        name={this.props.loadedBeer.name}
                        alcohol={this.props.loadedBeer.alcohol}
                        blg={this.props.loadedBeer.blg}
                        color={this.props.loadedBeer.color}
                        country={this.props.loadedBeer.country}
                        ibu={this.props.loadedBeer.ibu}
                        price={this.props.loadedBeer.price}
                        kindOf={this.props.loadedBeer.kindOf}
                        type={this.props.loadedBeer.type}
                        distribution={this.props.loadedBeer.distribution}
                        
                        group={this.props.loadedBeer.brewery.brewingGroup}
                        brewery={this.props.loadedBeer.brewery}
                        beers={this.state.beers}
                        redirectToBeer={e => this.redirectToBeer(e)}
                        />

                        <CommentSection 
                        loadBeer={this.props.loadBeer}
                        loadBeerId={this.props.loadedBeer.id}
                        addRateToArray={this.addRateToArray}
                        ratings={this.state.ratings} />


                    
                    </div>
                </Aux>}
                
                    
                

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loadedBeer: state.BeersReducer.loadedBeer,
        loadedBeerErrors: state.BeersReducer.loadedBeerErrors
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadBeer: (id) => dispatch(loadBeerActionCreator(id))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BeerDetails));



