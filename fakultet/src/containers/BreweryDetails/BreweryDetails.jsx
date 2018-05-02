import React, { Component } from 'react';
import './BreweryDetails.css';
import BreweryDetail from '../../components/BreweryDetail/BreweryDetail';
import Description from './_description/_description';
import BottomContent from './_botomContent/_botomContent';
import Spinner from '../../components/UI/_spinner/_spinner';
import { connect } from 'react-redux';
import { loadBreweryActionCreator } from '../../store/Breweries/Actions';
import Aux from '../../hoc/auxilary';
import NotFoundResult from '../../components/UI/_notFoundResult/_notFoundResult';

class BreweryDetails extends Component{
    state = {
        showBeerDetails: false,
        spinner: true
    }
    componentWillMount(){
        const indexOfId = window.location.href.lastIndexOf("/");
        const value = window.location.href.slice(indexOfId+1, window.location.href.length);
        this.props.loadBrewery(value);
    }
    componentDidUpdate(prevProps){
        if(prevProps.loadedBrewery !== this.props.loadedBrewery || 
            prevProps.loadedBreweryErrors !== this.props.loadedBreweryErrors){
                this.setState({spinner: false});
            }
    }
    render(){
        const settings = {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
        };
        return(
           
            <div className="brewery-details-container">

                {this.state.spinner ? <Spinner color="white" spinnerContent="trwa ładowanie... "/> : 

                this.props.loadedBreweryErrors.length > 0 ? <NotFoundResult
                message={this.props.loadedBreweryErrors[0]} /> :

                    <Aux>
                        <BreweryDetail 
                        name={this.props.loadedBrewery.name} 
                        desc={this.props.loadedBrewery.description} />

                        <div className="brewery-details-middle">
                            <h1>Produkty</h1>
                            <Description />
                        </div>  

                        <BottomContent
                        toggle={() => this.setState({showBeerDetails: !this.state.showBeerDetails})}
                        showDetails={this.state.showBeerDetails}
                        settings={settings} />
                    </Aux>

                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loadedBreweryErrors: state.BreweriesReducer.loadedBreweryErrors,
        loadedBrewery: state.BreweriesReducer.loadedBrewery
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadBrewery: (id) => dispatch(loadBreweryActionCreator(id))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(BreweryDetails);