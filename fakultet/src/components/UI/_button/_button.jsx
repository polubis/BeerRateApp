import React from 'react';
import './_button.css';

const button = props => (
    <button style={{opacity: props.show ? "1" : "0"}} onClick={props.click} className={props.btnClass}>
        {props.title}
    </button>
);

export default button;