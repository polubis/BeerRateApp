import React, { Component } from 'react';
import './MainPageContent.css';
import Curiosities from '../../../components/_curiosity/_curiosity';
import BeerGroupCart from '../../../components/_beerGroupCart/_beerGroupCart';
import LeftRank from '../../../components/_leftRank/_leftRank';

class MainPageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {  
        return ( 
            <div className="beers-block-container">
                <Curiosities />
                <div className="ranks-container">
                    <LeftRank />
                    <BeerGroupCart />
                </div>
                
                
            </div>
                
         )
    }
}
 
export default MainPageContent;