import React from 'react';
import './formContent.css';
import Transition from 'react-transition-group/Transition';

const formContent = props => (
    <div className="forms-container">


        {props.stepId == 0 ? 
        <div className={`first-part ${props.stepId == 0 ? "part-in" : null}`}>
        {props.coreItems.map(i => {
            return (
                <section key={i.id}>
                    <label>{i.label}*</label>
                    {i.id === 1 ? 
                        <textarea id={i.id} autoComplete="off" onChange={props.onInputChangeHandler} 
                        value={props.coreItemsValidation[i.id].val}
                        maxLength={i.max} placeholder={i.holder}></textarea> : 

                        <input autoComplete="off" id={i.id} onChange={props.onInputChangeHandler} 
                        value={props.coreItemsValidation[i.id].val} 
                        maxLength={i.max} placeholder={i.holder} type="text" />
                    }
                    <p>{props.coreItemsValidation[i.id].error}</p>
                </section>
            );
            
        })}
        </div> : null}

        {props.stepId == 1 ? 
        <div className={`second-part ${props.stepId == 1 ? "part-in" : null}`}>
        {props.aditionalItems.map(i => {
            return (
            <section key={i.id}>
                <label>{i.label}</label>
                <input id={i.id-props.coreItems.length} onChange={props.onDetailsChangeHandler}
                value={props.aditionalItemsValidation[i.id-props.coreItems.length].val}
                autoComplete="off" maxLength={i.max} placeholder={i.holder} type="text" />
                <p>{props.aditionalItemsValidation[i.id-props.coreItems.length].error}</p>
            </section>
            );
            

        })}
        </div> : null}

        

    </div>
);

export default formContent;
