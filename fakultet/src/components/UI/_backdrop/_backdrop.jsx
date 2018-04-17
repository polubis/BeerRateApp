import React from 'react';
import './_backdrop.css';
const backdrop = props => (
    props.showBackdrop ? 
    <div onClick={props.closeBackdrop} className="backdrop">
        {props.children}
    </div> : null
);

export default backdrop;