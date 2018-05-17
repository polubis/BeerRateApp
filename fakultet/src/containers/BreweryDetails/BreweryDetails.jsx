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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class BreweryDetails extends Component{
    state = {
        spinner: true,
        showDetailsArray: []
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
        if(prevProps.loadedBrewery !== this.props.loadedBrewery && 
            prevProps.loadedBreweryErrors.length === 0)
            this.setState({showDetailsArray: this.initialShowDetails(this.props.loadedBrewery.beers)});
        
    }
    initialShowDetails = beers => {
        const newArray = [];
        for(let i = 0; i < beers.length; i++){
            newArray.push({id: beers[i].id, val: false});
        }
        return newArray;
    }
    changeShowDetails = id => {
        const newShowDetails = [...this.state.showDetailsArray];
        const index = newShowDetails.findIndex(i => {
            return i.id === id
        });
        newShowDetails[index].val = !newShowDetails[index].val;
        this.setState({showDetailsArray: newShowDetails});        
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
                        desc={this.props.loadedBrewery.description}
                        beersCount={this.props.loadedBrewery.beers !== null ? 
                            this.props.loadedBrewery.beers.length : 0}
                        brewingGroup={this.props.loadedBrewery.brewingGroup} />
                        
                        <div className="brewery-details-middle">
                            <h1>Produkty</h1>
                            <Description description={this.props.loadedBrewery.description} />
                        </div> 
                        <div className="brewery-details-bottom"> 
                        <Slider className="brewery-slicker" {...settings}>
                            {this.props.loadedBrewery.beers.map((i,index) => {
                                return (
                                    <BottomContent
                                    item={i}
                                    key={i.id}
                                    toggle={() => this.changeShowDetails(i.id)}
                                    showDetails={this.state.showDetailsArray[index] ? 
                                        this.state.showDetailsArray[index].val
                                        : false}
                                    setings={settings}
                                    />
                                );
                            })}
                        </Slider>
                        </div>
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