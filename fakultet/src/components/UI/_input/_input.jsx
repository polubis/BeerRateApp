import React from 'react';
import './_input.css';
import Aux from '../../../hoc/auxilary';
const input = props => (
    <Aux>
        <input className={props.isValid ? "validation-input-error" : null}
            type={props.type} placeholder={props.placeholder} />
    </Aux>
);
export default input;