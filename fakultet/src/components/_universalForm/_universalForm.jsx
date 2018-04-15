import React from 'react';
import './_universalForm.css';
import SubmitButton from '../UI/_submitButton/_submitButton';
import ValidationError from '../UI/_validationError/_validationError';
import Input from '../UI/_input/_input';
const universalForm = (props) => {
    return(
        <form onSubmit={props.onSubmitHandler}>
            {props.items.map(i => {
                return (<section key={i.id}>
                    <label>{i.name}</label>
                    <Input type={i.type} placeholder={i.placeholder} />
                    <ValidationError message="Zły login lub hasło" />
                </section>);
            })}
            <SubmitButton name={props.submitName} />
        </form>
    );
}
 
export default universalForm;