import React from 'react';
import './_submitButton.css';
import Aux from '../../../hoc/auxilary';
const submitButton = (props) => (
    <Aux>
        <input 
        className="submit-button"
        value={props.name}
        type="submit" />
    </Aux>
    
);
export default submitButton;