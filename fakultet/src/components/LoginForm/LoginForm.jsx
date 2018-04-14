import React, { Component } from 'react';
import './LoginForm.css';
import UniversalForm from '../_universalForm/_universalForm';
import { logingFormItems } from '../../consts/HelpfullArrays';

class LoginForm extends Component {
    render() { 
        return ( 
            <div className="login-form-container">
                <UniversalForm items={logingFormItems}
                siema="siema" />
            </div>
        )
    }
}
 
export default LoginForm;