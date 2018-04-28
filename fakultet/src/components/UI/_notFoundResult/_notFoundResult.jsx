import React from 'react';
import './_notFoundResult.css';

const notFoundResult = props => (
    <div className="not-found-result-container">
        <h1>Uaa Diabeł</h1>
        <i className="fa fa-bug"></i>
        <p>{props.message}</p>
        <p onClick={() => window.location.reload()} className="redirect-page-link">
            Załaduj ponownie
        </p>
     
    </div>
);

export default notFoundResult;