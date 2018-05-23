import React from 'react';
import './_checkbox.css';
const checkbox = props => (
    <div className={props.error === undefined ? "checkbox-container" :
    props.error ? "checkbox-container" 
        : "checkbox-container checkbox-error"}>
        
        <input id={props.id} onChange={props.change}
        checked={props.value} type="checkbox" />
        {props.label}
    </div>
);

export default checkbox;