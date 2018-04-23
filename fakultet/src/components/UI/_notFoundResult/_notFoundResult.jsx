import React from 'react';
import './_notFoundResult.css';

const notFoundResult = props => (
    <h1 className="not-found-result-container">
        {props.message}
    </h1>
);

export default notFoundResult;