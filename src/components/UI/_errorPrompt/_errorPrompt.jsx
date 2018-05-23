import React from 'react';
import './_errorPrompt.css';

const errorPrompt = props => (
    <p className={props.regStat ? "confirmed-prompt-message" : 
    "error-prompt-container"}>
        <i className={!props.regStat ? "fa fa-times" : 
        "fa fa-check"}></i> {props.message}
    </p>
);

export default errorPrompt;