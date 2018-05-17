import React from 'react';
import Aux from '../../../../hoc/auxilary';
import Transition from 'react-transition-group/Transition';
import './navigation.css';


const navigation = props => {
    const navDescs = ["W tym panelu wypełnisz podstawowe i niezbędne informacje dotyczące piwa", 
    "W tym panelu dodasz opcjonalne parametry, które pozwolą nam lepiej klasyfikować piwo"];

    return(
    <Aux>
        <nav>
            <button type="button" id={0} className={props.stepId == 0 ? "active-form-button" : null} 
            onClick={props.changeStepId}>Etap 1</button>
            <button type="button" id={1} className={props.stepId == 1 ? "active-form-button" : null} 
            onClick={props.changeStepId}>Etap 2</button>
        </nav> 

                
        <Transition
        mountOnEnter
        unmountOnExit
        in={props.stepId == 0 ? true : false} timeout={100}>   
            {state => (
                <h2 className={`btn-descs ${props.stepId == 0 ? "animate-in-par" : "animate-out-par"}`}>
                    {navDescs[0]}
                </h2>
            )}                 
        </Transition>

        <Transition
        mountOnEnter
        unmountOnExit
            in={props.stepId == 1 ? true : false} timeout={100}>   
            {state => (
                <h2 className={`btn-descs ${props.stepId == 1 ? "animate-in-par" : "animate-out-par"}`}>
                    {navDescs[1]}
                </h2>
            )}                 
        </Transition>
    </Aux>
    );
    
};

export default navigation;