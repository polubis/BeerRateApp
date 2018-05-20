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

const leftRank = [
    {id:1, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:2, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:3, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:4, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:5, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:6, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:7, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43}
]

class BeerGroups extends Component {
    state = {
        spinner: true
    }
    componentWillReceiveProps(prevProps){
        if(prevProps.loadedBeerGroup !== this.props.loadedBeerGroup || 
            prevProps.loadedBeerGroupErrors !== this.props.loadedBeerGroupErrors){
            this.setState({spinner: false});
        }
    }

    componentDidMount(){
        this.props.loadGroup(findIndexValue(window.location.href));
    }

    render() { 
        console.log(this.props.loadedBeerGroup);
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
                        <div className="beer-group-story-block">
                            {this.props.loadedBeerGroup.description}
                        </div>
                        
                        <BeerFormGroupInfo 
                        director={this.props.loadedBeerGroup.director} 
                        address={this.props.loadedBeerGroup.address} 
                        createDate={this.props.loadedBeerGroup.createDate.slice(0, 10)} />

                        {this.props.loadedBeerGroup.breweries.length > 0 ? 
                        <Aux>
                            <h2 className="beer-group-main-header">Browary</h2>
                            <Carousel items={this.props.loadedBeerGroup.breweries}/>
                        </Aux> : null}
                        
                        <div className="awards-holder">
                            <Awards />
                        </div>
                    </div>
                
                    <div className="right-content-beer-groups">
                        {leftRank.map(b => {
                            return <BeerCart content={b.content} key={b.id} title={b.title} rate={b.rate}/>
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



