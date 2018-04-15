import React, { Component } from 'react';
import './LoginForm.css';
import UniversalForm from '../_universalForm/_universalForm';
import { logingFormItems } from '../../consts/HelpfullArrays';
class LoginForm extends Component {
    render() { 
        return ( 
            <div className="login-form-container">
                <h1>Zaloguj się</h1>
                <p className="p-blue-link-container">lub <b className="blue-link">załóż nowe konto</b></p>
                <UniversalForm items={logingFormItems} submitName="Zaloguj" formType="loginForm"
                />
                <p className="under-form-info">
                    <i>Nie wiesz jak korzystać z <b className="orange-link">piwopini</b> ?</i>
                    <span className="blue-link">kliknij tutaj i się dowiedz!</span>
                </p>
                
            </div>
        )
    }
}
 
export default LoginForm;