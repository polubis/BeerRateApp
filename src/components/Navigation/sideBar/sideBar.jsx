import React from 'react';
import './sideBar.css';
import '../Navigation.css';
import { navBarNavItemsBeforeLogingIn } from '../../../consts/HelpfullArrays';
import UniversalForm from '../../_universalForm/_universalForm';
import Transition from 'react-transition-group/Transition';

const sidebar = props => {
    const showClass = "side-bar-container " 
            + (!props.show ? "side-bar-open" : "side-bar-closed");

    const loginFormFooter = (<p className="under-form-info">
        <i>Nie wiesz jak korzystać z <b className="orange-link">piwopini</b> ?</i>
        <span className="blue-link">kliknij tutaj i się dowiedz!</span>
    </p>);

    const loginFormAdnotation = (
        <p className="p-blue-link-container">lub <b 
        onClick={props.changeBlock} className="blue-link">załóż nowe konto</b></p>
    );

    const loginForm = (
        <UniversalForm 
        items={props.logingFormItems}
        submitName="Zaloguj"
        formHeader="Zaloguj się"
        formFooter={loginFormFooter} 
        formAdnotation={loginFormAdnotation}
        validationArray={[...props.loginFormValidationArray]} />
    );
    const registerForm = (
        <UniversalForm 
        items={props.registerFormItems}
        submitName="Dołącz do nas"
        formHeader="Rejestracja" 
        validationArray={[...props.registerFormValidationItems]} />
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