import React from 'react';
import './_validationError.css';

const validationError = props => (
    <p className="validation-error">{props.message}</p>
);

export default validationError;