import React, { Component } from 'react';
import "./BreweriesList.css";
import Searcher from '../../components/UI/_searcher/_searcher';
import Aux from '../../hoc/auxilary';
import Brewery from '../../assets/beer-rewards/Browary.jpg';
import BreweryIcon from '../../assets/icons/beer-factory.png';
import GroupIcon from '../../assets/icons/brewery-group.png';
import { Link } from 'react-router-dom';
import Slicker from '../../components/UI/_slicker/_slicker';
import { connect } from 'react-redux';
import { fetchAllBreweriesActionCreator } from '../../store/Breweries/Actions';
import Spinner from '../../components/UI/_spinner/_spinner';
import NotFoundResult from '../../components/UI/_notFoundResult/_notFoundResult';

class BreweriesList extends Component {
    state = {
        searchValue: "",
        items: [],
        searchedItems: [],
        loadingBreweriesSpinner: true
    }
    componentWillMount(){
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
    //#CC330030-beautiful-br…-wordpress:130 #fff#444444style.css?ver=5…lpha-43049:103#656565style.min.css?v…-alpha-43049:1
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
                        <div key={i.id} className="brewery-single-item-main-container">
                        <div className="brewery-single-item-long">
                           <div>   
                               <div>
                                   <img src={BreweryIcon} alt="Ikona browaru" />
                               </div>
                               <p className="brewery-title brewery-name">
                                   {i.name}
                               </p>
                               <div className="brewery-group-stats">
                                   <img src={GroupIcon} alt="Ikonka" />
                                   <Link className="link-to-group-details" 
                                   to={`/grupy/${i.brewingGroup.id}`}>{i.brewingGroup.name}</Link>
                               </div>     
                                          
   
                           </div>
                           <article>
                           <p className="brewery-title">Istnieje od {i.brewingGroup.createDate.slice(0, 4)} roku</p>    
                           O {i.description}
                           Opis piwa dsadasd asd asd as asdasdds a daasas a asdas dadas dads a adas as a adas adas a a aOpis piwa dsadasd asd asd as asdasdds a daasas a asdas dadas dads a adas as a adas adas a a a v Opis piwa dsadasd asd asd as asdasdds a daasas a asdas dadas dads a adas as a adas adas a a a Opis piwa dsadasd asd asd as asdasdds a daasas a asdas dadas dads a adas as a adas adas a a apis piwa dsadasd asd asd as asdasdds a daasas a asdas dadas dads a adas as a adas adas a a a asdasdas adad adaa </article>   
   
                           
                         
                       </div>
                           <h3>Marki piw <b>{i.beers.length}</b></h3>
                           <Slicker classy="slider-container">
                               <div>
                                   <img src={BreweryIcon} alt="Przykład" />
                                   <img src={BreweryIcon} alt="Przykład" />
                                   <img src={BreweryIcon} alt="Przykład" />
                                   <img src={BreweryIcon} alt="Przykład" />
                                   <img src={BreweryIcon} alt="Przykład" />
                               </div>
                               <div>
                                   <img src={BreweryIcon} alt="Przykład" />
                                   <img src={BreweryIcon} alt="Przykład" />
                                   <img src={BreweryIcon} alt="Przykład" />
                                   <img src={BreweryIcon} alt="Przykład" />
                                   <img src={BreweryIcon} alt="Przykład" />
                               </div>
                           </Slicker>
   
                           <Link params={{id: i.id}} to={`/browary/${i.id}`} className="go-to-details-button">
                               Zobacz szczegóły
                           </Link>     
                       </div>
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





