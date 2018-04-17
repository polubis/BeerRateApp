import React from 'react';
import './_errorPrompt.css';

const errorPrompt = props => (
    <p className="error-prompt-container">
        <i class="fa fa-times"></i> {props.message}
    </p>
);

export default errorPrompt;