import React from 'react';
import './_input.css';
import Aux from '../../../hoc/auxilary';
const input = props => (
    <Aux>
        <input autoComplete="off" className={props.isValid ? "validation-input-error" : null}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.change}
            value={props.value}
            id={props.id}
            maxLength={props.max} />
    </Aux>
);
export default input;