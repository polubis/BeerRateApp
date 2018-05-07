import React from 'react';
import './_succResult.css';


const succResult = props => (
    <div className="succ-result-container">
        <p className={props.show ? "succ-result-in" : null}>
            {props.message}
        </p>
    </div>
            
);

export default succResult;
