import React from 'react';
import './sideBar.css';
import '../Navigation.css';
import { navBarNavItemsBeforeLogingIn } from '../../../consts/HelpfullArrays';
import UniversalForm from '../../_universalForm/_universalForm';
import { 
    logingFormItems, loginFormValidationArray,
    registerFormItems, registerFormValidationItems } from '../../../consts/HelpfullArrays';
import Transition from 'react-transition-group/Transition';

const sidebar = props => {
    const showClass = "side-bar-container " 
            + (!props.show ? "side-bar-open" : "side-bar-closed");

    const loginFormFooter = (<p className="under-form-info">
        <i>Nie wiesz jak korzystać z <b className="orange-link">piwopini</b> ?</i>
        <span className="blue-link">kliknij tutaj i się dowiedz!</span>
    </p>);

    const loginFormAdnotation = (
        <p className="p-blue-link-container">lub <b className="blue-link">załóż nowe konto</b></p>
    );

    const loginForm = (
        <UniversalForm 
        items={logingFormItems}
        submitName="Zaloguj"
        formHeader="Zaloguj się"
        formFooter={loginFormFooter} 
        formAdnotation={loginFormAdnotation}
        validationArray={loginFormValidationArray} />
    );
    const registerFormFooter = (
        <div className="checkboxes-container">
            <input type="checkbox" value="coding" />
            <label htmlFor="coding">Oświadczam, że zapoznałem się z regulaminem <i className="orange-link">piwopinie</i></label>
        </div>
    );
    const registerForm = (
        <UniversalForm 
        items={registerFormItems}
        submitName="Dołącz do nas"
        formHeader="Rejestracja"
        formFooter={registerFormFooter} 
        validationArray={registerFormValidationItems} />
    );

   
    return(
        <div className={showClass}>
            <div className="side-bar-nav-container">
                {navBarNavItemsBeforeLogingIn.map(i => {
                    return (<button 
                    onClick={props.changeBlock} 
                    id={i}
                    key={i} 
                    className={"side-bar-buttons " + 
                    (props.actualBlock === i?
                    "side-bar-button-active" : null)}
                    >{i}</button>);
                })}
            </div>
            <Transition mountOnEnter unmountOnExit 
            in={props.actualBlock === "Logowanie" ? true : false} timeout={0}>   
            {state => (
                loginForm
            )}                 
            </Transition>
            <Transition mountOnEnter unmountOnExit 
            in={props.actualBlock !== "Logowanie" ? true : false} timeout={0}>   
            {state => (
                registerForm
            )}                 
            </Transition>
        </div>
    );
}



export default sidebar;