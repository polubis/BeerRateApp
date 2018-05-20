import React, { Component } from 'react';
import './Ranks.css';
import Beers from '../../assets/beers.jpg';
import RankBeerDetails from './_rankBeerDetails/_rankBeerDetails';
import RankDescription from './_rankDescription/_rankDescription';
import RankStats from './_rankStats/_rankStats';
import Cup from '../../assets/icons/cup.png';
import Searcher from '../../components/UI/_searcher/_searcher';
import NotFoundResult from '../../components/UI/_notFoundResult/_notFoundResult'; 
import Aux from '../../hoc/auxilary';
import { connect } from 'react-redux';
import { fetchAllBeersActionCreator, fetchAllBeers, fetchAllBeersErrors } from '../../store/Beers/Actions';
import Spinner from '../../components/UI/_spinner/_spinner';

class Ranks extends Component{
    state = {
        searchValue: "",
        searchedItems: [],
        loadRankSpinner: true
    }
    componentDidMount(){
        this.props.fetchAllBeersActionCreator();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.loadedBeers !== this.props.loadedBeers){
            this.setState({loadRankSpinner: false, searchedItems: nextProps.loadedBeers});
        }
        if(nextProps.loadingAllBeersErrors !== this.props.loadingAllBeersErrors){
            this.setState({loadRankSpinner: false});
        }
    }
    searchOnChangeHandler = event => {
        let resultArray = [];
        for(let key in this.props.loadedBeers){
            if(this.props.loadedBeers[key].name.toUpperCase().search(event.target.value.toUpperCase()) !== -1){
                resultArray.push(this.props.loadedBeers[key]);
            }
        }
        this.setState({searchedItems: resultArray, searchValue: event.target.value});
    }
    componentWillUnmount(){
        this.props.fetchAllBeers([]);
        this.props.fetchAllBeersErrors([]);
    }
    render(){
        console.log(this.state.searchedItems);
        return(
            <Aux>
                <Searcher
                max={this.state.searchedItems.length <= 0 ? 
                    this.state.searchValue.length : undefined}
                top="-60px"
                placeholder="wpisz nazwę piwa"
                width="450px"
                changeHandler={e => this.searchOnChangeHandler(e)}
                value={this.state.searchValue}
                searchedCount={this.state.searchedItems.length} />
                
                
                <div className="ranks-container">
                {this.state.loadRankSpinner ? 
                <Spinner color="white" spinnerContent="trwa wczytywanie rankingu..." /> : 


                <Aux>
                {this.state.searchedItems.length > 0 ? 
                <Aux>
                <img id="rank-icon" src={Cup} alt="Ranking" />  
                <table>
                    <tr>
                        <th>Statystki</th>
                        <th>Informacje ogólne</th>
                        <th>Opis</th>
                    </tr>
                    {this.state.searchedItems.map((tr, index) => {
                        return (
                            <tr key={tr.place}>
                                <RankStats 
                                place={index+1}
                                rate={tr.averageOfRatings} />
                                
                                <RankBeerDetails 
                                alkPercent={tr.alcohol}
                                dystrybution={tr.dystrybution}
                                type={tr.type}
                                material={tr.material}
                                img={Beers}
                                brewery={tr.brewery.name}
                                group="Bracia"
                                rate={tr.averageOfRatings}
                                name={tr.name}
                                />

                                <RankDescription desc={tr.description} name={tr.name}/>
                                                         
                            </tr>
                        );
                    })}
                </table></Aux> : null }
                </Aux>
                } 
                </div>
            </Aux>
            
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
        fetchAllBeersActionCreator: () => dispatch(fetchAllBeersActionCreator()),
        fetchAllBeers: (beers) => dispatch(fetchAllBeers(beers)),
        fetchAllBeersErrors: (errors) => dispatch(fetchAllBeersErrors(errors))

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Ranks);