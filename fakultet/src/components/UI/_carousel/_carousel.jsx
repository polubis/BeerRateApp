import React, { Component } from 'react';
import './_carousel.css';
import BreweryDetails from '../../_breweryDetails/_breweryDetails';

        
const objectsToMap = [
    {id: 0, item: <BreweryDetails name="Browar tyskie"/>},
    {id: 1, item: <BreweryDetails name="Browar lomza"/>},
    {id: 2, item: <BreweryDetails name="Browar warka"/>}
]

class Carousel extends Component{
    state = { 
        actualBlock: 0,
        isAnimating: true,
        helpBlock: 0
    }
    handleClick = (id) => {
        this.setState({helpBlock: id, isAnimating: false});
        setTimeout(this.changeActualBlock, 1000);
    }
    changeActualBlock = () => {
        this.setState({isAnimating: true, actualBlock: this.state.helpBlock});
    }
    render(){

        return(
            <div className="carousel-container">
                 <nav>
                    {objectsToMap.map(c => {
                        return <i style={{color: this.state.actualBlock === c.id ? "orange" : "white"}}
                        onClick={() => this.handleClick(c.id)} key={c.id} className="fa fa-circle"></i>;
                    })}
                </nav>
                <div className={!this.state.isAnimating ? 
                "carousel-content carousel-hidden-block" : "carousel-content carousel-visible-block"}>
                    {objectsToMap[this.state.actualBlock].item}
                </div>
            </div>
        );
    }
}


export default Carousel;