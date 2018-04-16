import React, { Component } from 'react';
import './_universalForm.css';
import SubmitButton from '../UI/_submitButton/_submitButton';
import ValidationError from '../UI/_validationError/_validationError';
import Input from '../UI/_input/_input';
import { validateOneInput, validateTwoTheSameInputs } from '../../services/validationMethods';
import Backdrop from '../UI/_backdrop/_backdrop';
import Spinner from '../UI/_spinner/_spinner';
import { withRouter } from 'react-router-dom';
import { measuringTextStrength } from '../../services/measuringTextStrength';
import Checkbox from '../UI/_checkbox/_checkbox';
import { connect } from 'react-redux';
import { registerActionCreator } from '../../store/Register/Actions';
import { logingInActionCreator } from '../../store/Loging/Actions';


class UniversalForm extends Component {
    state = {
        validationResultArray: [...this.props.validationArray],
        spinner: false
    }
    componentDidUpdate(prevProps){
        if(prevProps.registerResult !== this.props.registerResult ||
            prevProps.loginResult !== this.props.loginResult){
            this.setState({spinner: false});
        }
    }
    onChangeHandler = (event) => {     
        const index = event.target.id;   
        const newValidationResultArray = [...this.state.validationResultArray];
        if(event.target.type === "checkbox"){
            newValidationResultArray[index].value = event.target.checked;
            newValidationResultArray[index].error = event.target.checked;        
        }
        else{
            newValidationResultArray[index].value = event.target.value;
            let validationResult = validateOneInput(newValidationResultArray[index].value,
                false, this.props.items[index].name, newValidationResultArray[index].min,
                this.props.items[index].type);
    
    
            if(this.props.formHeader === "Rejestracja" &&
            !validationResult && newValidationResultArray[2].value
            && newValidationResultArray[3].value){
                validationResult = validateTwoTheSameInputs(newValidationResultArray[2].value, 
                    newValidationResultArray[3].value, "Hasło", "Powtórz hasło");
            }
            
            newValidationResultArray[event.target.id].error = validationResult;
    
            if(newValidationResultArray[event.target.id].strength !== undefined){
                newValidationResultArray[event.target.id].strength = 
                    measuringTextStrength(newValidationResultArray[event.target.id].value, 20);
            }
        }
        this.setState({validationResultArray: newValidationResultArray});
    }
    onSubmitHandler = (e) => {
        console.log(this.Validate());
        e.preventDefault();
        if(this.Validate()){
            this.setState({spinner: true});
            this.isRedirectOnClickHandler();
        }
        else{
            this.AfterSubmitValidation();
        }
    }
    Validate = () => {
        const resultArray = this.state.validationResultArray;
        console.log(resultArray);
        for(let i = 0; i < resultArray.length; i++){
            if(resultArray[i].type === "checkbox" ){
                if(!resultArray[i].error)
                    return false;
            }
            else{
                if(resultArray[i].error !== "" || resultArray[i].error === undefined)
                    return false;
            }
        }
        return true;
    }
    AfterSubmitValidation = () => {
        const newValidationResultArray = [...this.state.validationResultArray];
        let validationResult = null;
        for(let i = 0; i < this.state.validationResultArray.length; i++){
            if(this.state.validationResultArray[i].type === "checkbox"){
                newValidationResultArray[i].error = this.state.validationResultArray[i].value;
            }
            else{
                validationResult = validateOneInput(this.state.validationResultArray[i].value,
                    false, this.props.items[i].name, this.state.validationResultArray[i].min,
                    this.props.items[i].type);
                if(validationResult){
                    newValidationResultArray[i].error = validationResult;
                }
            }
        }  
        this.setState({validationResultArray: newValidationResultArray});
    }
    isRedirectOnClickHandler = () => {
        if(this.props.formHeader === "Rejestracja"){
            this.props.Register(this.state.validationResultArray, this.props.history);
        }
        if(this.props.formHeader === "Zaloguj się"){
            this.props.Loging(this.state.validationResultArray, this.props.history);
        }
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
                            <label>{i.name}<b className="red-link"> {i.styleReq}</b></label>
    
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

                    {this.props.formHeader === "Rejestracja" ?
                    <Checkbox value={this.state.validationResultArray[4].value}
                    id={4} error={this.state.validationResultArray[4].error}
                    change={e => this.onChangeHandler(e)}
                    label={<label htmlFor="box">Oświadczam, że zapoznałem się z 
                    <b className="blue-link"> regulaminem</b> 
                    <i className="orange-link"> piwopinie</i></label>} /> : null}
                    
                    {this.props.formFooter}
                </form>
                

                <Backdrop showBackdrop={this.state.spinner}>
                    <Spinner
                    spinnerContent={this.props.formHeader === "Rejestracja" ? 
                    "jesteś rejestrowany..." : "trwa logowanie..."} color="white" fontSize="32px"/>
                </Backdrop>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        registerResult: state.RegisterReducer.registerResult,
        loginResult: state.LogingReducer.loginResult
    };
}
const mapDispatchToProps = dispatch => {
    return {
        Register: (registerObject, historyObject) => dispatch(registerActionCreator(registerObject, historyObject)),
        Loging: (logingObject, historyObject) => dispatch(logingInActionCreator(logingObject, historyObject))

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UniversalForm));



