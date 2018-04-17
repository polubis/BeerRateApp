import React, { Component } from 'react';
import './MainPageContent.css';
import Image from '../../../assets/beers.jpg';
class MainPageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="beers-block-container">
                <div className="all-jumbo-tron-container">
                        <div className="jumbo-for-container">
                            <div style={{backgroundImage: `url(${Image})`}} className="image-bar">
                                <p>4.36</p>
                            </div>
                            <div style={{backgroundImage: `url(${Image})`}} className="image-bar">
                                <p>4.36</p>
                            </div>
                            <div style={{backgroundImage: `url(${Image})`}} className="image-bar">
                                <p>4.36</p>
                            </div>
                            <div style={{backgroundImage: `url(${Image})`}} className="image-bar">
                                <p>4.36</p>
                            </div>
                        </div>

                        <div className="jumbo-for-container">
                            <div style={{backgroundImage: `url(${Image})`}} className="image-bar">
                                <p>4.36</p>
                            </div>
                            <div style={{backgroundImage: `url(${Image})`}} className="image-bar">
                                <p>4.36</p>
                            </div>
                            <div style={{backgroundImage: `url(${Image})`}} className="image-bar">
                                <p>4.36</p>
                            </div>
                            
                        </div>

                        <div className="jumbo-for-container">
                            <div style={{backgroundImage: `url(${Image})`}} className="image-bar">
                                
                                <p>4.36</p>
                            </div>
                            <div style={{backgroundImage: `url(${Image})`}} className="image-bar">
                                <p>4.36</p>
                            </div>
                        
                            
                        </div>
                        <div className="jumbo-for-container">
                            <div style={{backgroundImage: `url(${Image})`}} className="image-bar">
                                <p>4.36</p>
                            </div>
                        </div>
                        
                        
                        
                    </div>
               
            </div>
                
         )
    }
}
 
export default MainPageContent;