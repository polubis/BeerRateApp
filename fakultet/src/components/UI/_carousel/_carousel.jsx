import React, { Component } from 'react';
import './_carousel.css';
import BreweryDetails from '../../_breweryDetails/_breweryDetails';
import Aux from '../../../hoc/auxilary';
        


class Carousel extends Component{
    state = { 
        actualBlock: 0,
        isAnimating: true,
        helpBlock: 0,
        objectsToMap: []
    }
    handleClick = id => {
        this.setState({helpBlock: id, isAnimating: false});
        setTimeout(this.changeActualBlock, 1000);
    }
    changeActualBlock = () => {
        this.setState({isAnimating: true, actualBlock: this.state.helpBlock});
    }
    componentDidMount(){
        if(this.state.objectsToMap.length === 0){
            const incomingItems = [...this.props.items];
            const newObjectsToMap = [];
            for(let k = 0; k < incomingItems.length; k++){
                newObjectsToMap.push({id: k, item: <BreweryDetails name={incomingItems[k].name}
                    description={incomingItems[k].description} id={incomingItems[k].id} />})
            }
            this.setState({objectsToMap: newObjectsToMap});
        }
    }
    render(){
        return(
            <div className="carousel-container">
                {this.state.objectsToMap.length > 0 ? 
                <Aux>
                    <nav>
                        {this.state.objectsToMap.map(c => {
                            return <i style={{color: this.state.actualBlock === c.id ? "orange" : "white"}}
                            onClick={() => this.handleClick(c.id)} key={c.id} className="fa fa-circle"></i>;
                        })}
                    </nav>
                    <div className={!this.state.isAnimating ? 
                    "carousel-content carousel-hidden-block" : "carousel-content carousel-visible-block"}>
                        {this.state.objectsToMap[this.state.actualBlock].item}
                    </div>
                
                </Aux>
                : null}
                 
            </div>
        );
    }
}


export default Carousel;