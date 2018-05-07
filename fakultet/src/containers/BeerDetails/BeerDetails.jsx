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
class BeerDetails extends Component{
    state = {
        spinner: true
    }
    componentDidMount(){
        this.props.loadBeer(findIndexValue(window.location.href));
    }

    componentWillReceiveProps(prevProps){
        if(prevProps.loadedBeer !== this.props.loadedBeer || 
            prevProps.loadedBeerErrors !== this.props.loadedBeerErrors){
            this.setState({spinner: false});
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
                        <BeerContent />
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



