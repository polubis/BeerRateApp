import React from 'react';
import './_backdrop.css';
const backdrop = props => (
    props.showBackdrop ? 
    <div className="backdrop">
        {props.children}
    </div> : null
);

export default backdrop;