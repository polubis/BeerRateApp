import React, { Component } from 'react';
import './_universalForm.css';
import SubmitButton from '../UI/_submitButton/_submitButton';
import ValidationError from '../UI/_validationError/_validationError';
import Input from '../UI/_input/_input';
import { validateOneInput } from '../../services/validationMethods';
import Backdrop from '../UI/_backdrop/_backdrop';
import Spinner from '../UI/_spinner/_spinner';
import { withRouter } from 'react-router-dom';
import { measuringTextStrength } from '../../services/measuringTextStrength';


class UniversalForm extends Component {
    state = {
        validationResultArray: this.props.validationArray,
        isRedirecting: false
    }
    
    onChangeHandler = (event) => {
        const newValidationResultArray = [...this.state.validationResultArray];
        newValidationResultArray[event.target.id].value = event.target.value;
        const validationResult = validateOneInput(newValidationResultArray[event.target.id].value,
            false, this.props.items[event.target.id].name, newValidationResultArray[event.target.id].min);
        newValidationResultArray[event.target.id].error = validationResult;
        
        if(newValidationResultArray[event.target.id].strength !== undefined){
            newValidationResultArray[event.target.id].strength = 
                measuringTextStrength(newValidationResultArray[event.target.id].value, 20);
        }
        this.setState({validationResultArray: newValidationResultArray});
        
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        if(this.Validate()){
            this.isRedirectOnClickHandler();
        }
        else{
            this.AfterSubmitValidation();
        }
    }
    Validate = () => {
        for(let key in this.state.validationResultArray){
            if(this.state.validationResultArray[key].error !== ""){
                return false;
            }
        }
        return true;
    }
    AfterSubmitValidation = () => {
        const newValidationResultArray = [...this.state.validationResultArray];
        let validationResult = null;
        for(let key in this.state.validationResultArray){
            validationResult = validateOneInput(this.state.validationResultArray[key].value,
                false, this.props.items[key].name, this.state.validationResultArray[key].min);
            if(validationResult){
                newValidationResultArray[key].error = validationResult;
            }
        }  
        this.setState({validationResultArray: newValidationResultArray});
    }
    isRedirectOnClickHandler = () => {
        this.setState({isRedirecting: true});
        this.props.history.push('/');
    }

    render() {
        return (  
            <div style={{padding: this.props.formHeader === "Rejestracja" ? 
            '0 30px' : '30px'}} className="universal-form-container">
                <h1>{this.props.formHeader}</h1>
                {this.props.formAdnotation}
                <form onSubmit={(e) => this.onSubmitHandler(e)}>

                    {this.props.items.map(i => {
                        return (<section key={i.id}>
                            <label>{i.name}</label>

                            <Input change={(event) => this.onChangeHandler(event)}
                            type={i.type}
                            placeholder={i.placeholder}
                            value={this.state.validationResultArray[i.id].value}
                            id={i.id}
                            max={i.max}
                            isValid={this.state.validationResultArray[i.id].error}
                            />

                            {(i.type === "password" && this.props.formHeader === "Rejestracja") ?
                            <progress 
                            style={{opacity: this.state.validationResultArray[i.id].strength ?
                            '1' : '0'}}
                            value={this.state.validationResultArray[i.id].strength}
                            max="40"></progress> : null}

                            <ValidationError 
                            message={this.state.validationResultArray[i.id].error}
                            />
                        </section>);
                    })}

                    <SubmitButton name={this.props.submitName} />

                </form>
                {this.props.formFooter}

                <Backdrop showBackdrop={this.state.isRedirecting}>
                    <Spinner color="white" fontSize="32px"/>
                </Backdrop>
            </div>
        );
    }
}
 
export default withRouter(UniversalForm);
