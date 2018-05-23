import React, { Component } from 'react';
import './BeerGroups.css';
import BeerFormGroupInfo from '../../components/_beerGroupCart/_beerGroupFormInfo/_beerGroupFormInfo';
import Awards from '../../components/_awards/_awards';
import Carousel from '../../components/UI/_carousel/_carousel';
import BeerCart from '../../components/_beerCart/_beerCart';
import { connect } from 'react-redux';
import { loadGroupActionCreator } from '../../store/BeerGroups/Actions';
import { findIndexValue } from '../../services/concatingUrlPath';
import Spinner from '../../components/UI/_spinner/_spinner';
import Aux from '../../hoc/auxilary';
import NotFoundResult from '../../components/UI/_notFoundResult/_notFoundResult';
import { groups } from '../../consts/links/pictures';

class BeerGroups extends Component {
    state = {
        spinner: true,
        beers: []

    }
    componentWillReceiveProps(prevProps){
        if(prevProps.loadedBeerGroup !== this.props.loadedBeerGroup || 
            prevProps.loadedBeerGroupErrors !== this.props.loadedBeerGroupErrors){
            this.setState({spinner: false, beers: this.transformIntoBeerArray(prevProps.loadedBeerGroup)});
        }
    }
    transformIntoBeerArray = group => {
        const breweries = [];
        for(let key in group.breweries){
            if(group.breweries[key])
            breweries.push(group.breweries[key]);
        }
        const beers = [];
        for(let key in breweries){
            if(breweries[key].beers.length > 0){
                for(let keyo in breweries[key].beers){
                    beers.push(breweries[key].beers[keyo]);
                }
            }
        }
        return beers;
        
    }
    componentDidMount(){
        this.props.loadGroup(findIndexValue(window.location.href));
    }

    render() { 
        return ( 
            <div className="beer-groups-container">
                {this.state.spinner ? 
                <Spinner 
                spinnerContent="trwa wczytywanie..." fontSize="22px" color="white" /> :

                this.props.loadedBeerGroupErrors.length > 0 ? 
                <NotFoundResult message={this.props.loadedBeerGroupErrors[0]} /> : 

                <Aux>
                    <div className="left-content-beer-groups">
                        <h1 className="beer-group-main-header">Grupa piwowarska - {this.props.loadedBeerGroup.name}  </h1>
                        <p className="beer-group-story-paragraph"><b className="orange-link">Historia</b></p>
                        <div style={{backgroundImage: `url(${this.props.loadedBeerGroup.brewingGroupPicture ? 
                            groups + 
                            this.props.loadedBeerGroup.brewingGroupPicture.pictureName : null})`}} 
                            className="beer-group-story-block">
                            <article>
                                {this.props.loadedBeerGroup.description}
                            </article>

                        </div>
                        
                        <BeerFormGroupInfo 
                        director={this.props.loadedBeerGroup.director} 
                        address={this.props.loadedBeerGroup.address} 
                        createDate={this.props.loadedBeerGroup.createDate.slice(0, 10)} />

                        {this.props.loadedBeerGroup.breweries.length > 0 ? 
                        <Aux>
                            <h2 className="beer-group-main-header">Browary</h2>
                            <Carousel items={this.props.loadedBeerGroup.breweries} />
                        </Aux> : null}
                        
                        <div className="awards-holder">
                            <Awards />
                        </div>
                    </div>
                
                    <div className="right-content-beer-groups">
                        {this.state.beers.map(b => {
                            return <BeerCart 
                            id={b.id}
                            content={b.description} 
                            key={b.id} 
                            title={b.name} 
                            rate={b.averageOfRatings.toFixed(2)} 
                            beerPicture={b.beerPicture}
                            kindOf={b.kindOf} />
                        })}
                    </div>
                </Aux>}
               
                
                
                
              
                
                
            </div>
         )
    }
}
 

const mapStateToProps = state => {
    return {
        loadedBeerGroup: state.BeerGroupsReducer.loadedBeerGroup,
        loadedBeerGroupErrors: state.BeerGroupsReducer.loadedBeerGroupErrors
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadGroup: (id) => dispatch(loadGroupActionCreator(id))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(BeerGroups);



