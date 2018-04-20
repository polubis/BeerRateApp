import React from 'react';
import './_flipCart.css';
const flipCart = props => {
    const height = props.height !== "" ? props.height : '100%';
    const width = props.width !== "" ? props.width : '200px';
    const margin = props.margin !== "" ? props.margin : '50px 0';
    return(
        <div style={{height: height, width: width, margin: margin}} className="flip-container" onTouchStart="this.classList.toggle('hover');">
        <div className="flipper">
            <div style={{height: height, width: width, margin: margin}} className="front">
                {props.front}
            </div>
            <div style={{height: height, width: width, margin: margin}} className="back">
                {props.back}
            </div>
        </div>
        </div>
    );
   
    
};

export default flipCart;