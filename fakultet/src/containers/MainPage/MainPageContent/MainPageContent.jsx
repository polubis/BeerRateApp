import React, { Component } from 'react';
import './MainPageContent.css';
import Curiosities from '../../../components/_curiosity/_curiosity';
class MainPageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() {  
        return ( 
            <div className="beers-block-container">
                <Curiosities />
               
            </div>
                
         )
    }
}
 
export default MainPageContent;