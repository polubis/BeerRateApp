import React from 'react';
import './_spinner.css';
const spinner = props => (
    <div style={{color: props.color, fontSize: props.fontSize}} className="spinner">
        <i className="fa fa-beer"></i>
        <i className="spinner-message">{props.spinnerContent}</i>
    </div>
);
export default spinner;