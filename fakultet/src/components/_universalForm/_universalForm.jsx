import React from 'react';
import './_universalForm.css';

const universalForm = (props) => {
    return(
        <form onSubmit={props.onSubmitHandler}>
            {props.items.map(i => {
                return (<section key={i.id}>
                    <label>{i.name}</label>
                    <input type={i.type}  />
                </section>);
            })}
            <input className="agree-button" type="submit" />
        </form>
    );
}
 
export default universalForm;