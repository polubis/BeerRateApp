import React, { Component } from 'react';
import "./BreweriesList.css";
import Searcher from '../../components/UI/_searcher/_searcher';
import Aux from '../../hoc/auxilary';
import { connect } from 'react-redux';
import { fetchAllBreweriesActionCreator } from '../../store/Breweries/Actions';
import Spinner from '../../components/UI/_spinner/_spinner';
import NotFoundResult from '../../components/UI/_notFoundResult/_notFoundResult';
import BrewerySingleItem from './_brewerySingleItem/_brewerySingleItem';
import { changingArray } from '../../services/changingArray';


class BreweriesList extends Component {
    state = {
        searchValue: "",
        items: [],
        searchedItems: [],
        loadingBreweriesSpinner: true
    }
    componentDidMount(){
        this.props.fetchAllBreweries();
    }
    componentDidUpdate(prevProps){
        if(prevProps.loadedBreweries !== this.props.loadedBreweries){
            this.setState({items: this.props.loadedBreweries, searchedItems: this.props.loadedBreweries, loadingBreweriesSpinner: false});
        }
        if(prevProps.loadingAllBreweriesErrors !== this.props.loadingAllBreweriesErrors){
            this.setState({loadingBreweriesSpinner: false});
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
    redirectToBeer = e => {
        this.props.history.push("/piwa/" + e.target.id);
    }
    render() { 
        return ( 
            <Aux>
                <Searcher
                max={this.state.searchedItems.length <= 0 ? 
                    this.state.searchValue.length : undefined}
                placeholder="wpisz nazwę browaru..."
                changeHandler={e => this.searchOnChangeHandler(e)}
                value={this.state.searchValue}
                searchedCount={this.state.searchedItems.length} />       


                <div className="breweries-container">

                {this.state.loadingBreweriesSpinner ? <Spinner color="white" spinnerContent="trwa wczytywanie..."/> : null}
                    
                {this.props.loadingAllBreweriesErrors.length > 0 ? <NotFoundResult message={this.props.loadingAllBreweriesErrors[0]}/> 
                
                : this.state.searchedItems.map(i => {
                    
                    return (
                        i.brewingGroup ? 
                        <BrewerySingleItem
                        breweryPicture={i.breweryPicture} 
                        redirectToBeer={e => this.redirectToBeer(e)}
                        key={i.id} 
                        id={i.id}
                        name={i.name}
                        brewingGroup={i.brewingGroup}
                        description={i.description}
                        beers={i.beers}/>
                        : null
                    );
                })}                
                </div>
                
                
            </Aux>
            
        )
    }
}


const mapStateToProps = state => {
    return {
        loadedBreweries: state.BreweriesReducer.loadedBreweries,
        loadingAllBreweriesErrors: state.BreweriesReducer.loadingAllBreweriesErrors
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllBreweries: () => dispatch(fetchAllBreweriesActionCreator())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(BreweriesList);





