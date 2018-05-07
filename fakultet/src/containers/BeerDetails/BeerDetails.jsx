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

class BeerDetails extends Component{
    state = {
        spinner: true, 
        beers: []
    }
    componentDidMount(){
        this.props.loadBeer(findIndexValue(window.location.href));
    }

    componentWillReceiveProps(prevProps){
        if(prevProps.loadedBeer !== this.props.loadedBeer || 
            prevProps.loadedBeerErrors !== this.props.loadedBeerErrors){
            this.setState({spinner: false});
        }
        if(prevProps.loadedBeer !== undefined && this.state.beers.length === 0) {
            const stop = 5;
            this.setState({beers: changingArray(stop, prevProps.loadedBeer.brewery.beers)});
        }
    }
  
   
    render(){
        return(
            <div className="beer-details-container">
            
                {this.state.spinner ? <Spinner color="white" spinnerContent="trwa ładowanie"/> : 
                this.props.loadedBeerErrors.length > 0 ? <NotFoundResult message={this.props.loadedBeerErrors[0]}/> : 
                <Aux>
                    <TopContent 
                    description={this.props.loadedBeer.description}
                    name={this.props.loadedBeer.name}
                    averageOfRatings={this.props.loadedBeer.averageOfRatings}
                    />
                    
                    <div className="content-container">
                        <BeerContent 
                        name={this.props.loadedBeer.name}
                        alcohol={this.props.loadedBeer.alcohol}
                        blg={this.props.loadedBeer.blg}
                        color={this.props.loadedBeer.color}
                        country={this.props.loadedBeer.country}
                        ibu={this.props.loadedBeer.ibu}
                        price={this.props.loadedBeer.price}

                        brewery={this.props.loadedBeer.brewery}
                        beers={this.props.loadedBeer.brewery.beers}
                        />
                        <CommentSection />


                    
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
export default connect(mapStateToProps, mapDispatchToProps)(BeerDetails);



