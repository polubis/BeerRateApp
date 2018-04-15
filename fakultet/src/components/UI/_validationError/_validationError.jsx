import React from 'react';
import './_validationError.css';

const validationError = props => (
    <p className={props.message?
    "validation-error error-in" : "validation-error"}>
    {props.message}</p>
);

export default validationError;