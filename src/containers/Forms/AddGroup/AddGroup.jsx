import React, { Component } from 'react';
import './AddGroup.css';
import { validateOneInput, validatePictures } from '../../../services/validationMethods';
import Aux from '../../../hoc/auxilary';
import { connect } from 'react-redux';
import Spinner from '../../../components/UI/_spinner/_spinner';
import DragAndDrop from '../../../components/UI/_dragAndDrop/_dragAndDrop';
import Image from '../../../assets/modal/modal-group.jpg';
import { withRouter } from 'react-router-dom';
import { addGroupActionCreator, addGroup } from '../../../store/BeerGroups/Actions';
import SuccResult from '../../../components/UI/_succResult/_succResult';

class AddGroup extends Component {
    state = {
        currentValidation: [...this.props.addGroupFormItemsValidationArray],
        addGroupFormItems: [...this.props.addGroupFormItems],
        droppedFile: [],
        incorrectPictureError: "",
        showAddSpinner: false
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.addGroupResult === true){
            setTimeout(() => {
                this.props.closeModal();
            }, 1500);
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.addGroupErrors !== this.props.addGroupErrors){
            this.setState({showAddSpinner: false});
        }
    }

    onDropHandler = droppedFile => {
        const validationResult = validatePictures(droppedFile[0].type, 300000, droppedFile[0].size);
        if(!validationResult){
            this.setState({droppedFile: droppedFile, incorrectPictureError: ""});
        }
        else{
            this.setState({incorrectPictureError: validationResult});
        }
    }

    deletePicture = () => {
        this.setState({droppedFile: []});
    }
    onSubmitHandler = e => {
        e.preventDefault();
        this.validationAfterSubmit();
    }

    onChangeHandler = (e, id) => {
        const newValidation = [...this.state.currentValidation];
        newValidation[id].value = e.target.value; 
        newValidation[id].error = 
            validateOneInput(e.target.value, false, this.state.addGroupFormItems[id].name,
                 this.state.currentValidation[id].min, this.state.addGroupFormItems[id].type);

        this.setState({currentValidation: newValidation});
    }

    validationAfterSubmit = () => {
        const newValidation = [...this.state.currentValidation];
        let result = true;
        for(let i = 0; i < newValidation.length; i++){
            newValidation[i].error = validateOneInput(newValidation[i].value, false,
                this.state.addGroupFormItems[i].name, newValidation[i].min, this.state.addGroupFormItems[i].type);
            if(newValidation[i].error !== ""){
                result = false;
            }
        }

        if(!result){
            this.setState({currentValidation: newValidation});
        }
        else{
            this.setState({showAddSpinner: true});
            const formObject = {
                Name: this.state.currentValidation[0].value,
                Address: this.state.currentValidation[3].value,
                Description: this.state.currentValidation[4].value,
                Director: this.state.currentValidation[1].value,
                CreateDate: this.state.currentValidation[2].value,
                BreweriesIds: []
            };
            this.props.addGroup(formObject, this.props.history, this.state.droppedFile);
            
        }
    }
    componentWillUnmount(){
        this.props.clearGroupErrors([], null);
    }

    render() { 
        return ( 
            <form style={{backgroundImage: `url(${this.state.droppedFile.length > 0 ?
            this.state.droppedFile[0].preview : Image})`}} onSubmit={e => this.onSubmitHandler(e)} className="add-group-container">
            
            {this.props.addGroupResult ? <SuccResult show={this.props.addGroupResult}
            message="Pomyślnie dodano grupę, jesteś przekierowywany..."/> : null}
            
                <div className="add-group-form-left">
                    {this.props.addGroupErrors.length > 0 ? 
                    <p className="serwer-error">{this.props.addGroupErrors[0]}</p> : null}
                    
                    <h1>Formularz dodawania grupy</h1>
                    
                    <div className="form-left-content">
                        <label>Historia grupy *</label>
                        <textarea
                        onChange={e => this.onChangeHandler(e, 4)}
                        value={this.state.currentValidation[4].value}
                        maxLength={255} placeholder="przedstaw historie grupy...">
                            
                        </textarea>
                        {this.state.currentValidation[4].error ? 
                        <p>{this.state.currentValidation[4].error}</p> : null}
                    </div>

                    <DragAndDrop
                    deletePic={this.deletePicture}
                    incorrectPictureError={this.state.incorrectPictureError}
                    files={this.state.droppedFile} 
                    onDropHandler={this.onDropHandler} />
                     
                    
                </div>

                 <div className="add-group-form-right">
                    {this.state.showAddSpinner ? 
                    <div className="add-group-spinner-container">
                        <Spinner position="relative" spinnerContent="trwa dodawanie..."/>
                    </div>
                    : null}

                    {this.state.addGroupFormItems.map( i => {
                        return (
                            <Aux key={i.id}>
                                {
                                i.type ? 
                                    <section>
                                    <label>
                                        {i.name} * 
                                    </label>
                                    <input 
                                    className={this.state.currentValidation[i.id].error ?
                                        "input-border-errors" : null}
                                    onChange={e => this.onChangeHandler(e, i.id)} 
                                    value={this.state.currentValidation[i.id].value}
                                    maxLength={i.max} 
                                    type={i.type} 
                                    placeholder={i.placeholder} /> 
                                    <p className="form-validation-error">
                                        {this.state.currentValidation[i.id].error}
                                    </p>
                                    
                                    </section> : null}
                            </Aux>
                            
                        );
                    })}

                    <input className="add-group-submit submit-form-button" type="submit" value="Dodaj grupę"/>
                </div>

            </form>
        )
    }
}
 


const mapStateToProps = state => {
    return {
        addGroupErrors: state.BeerGroupsReducer.addGroupErrors,
        addGroupResult: state.BeerGroupsReducer.addGroupResult,
        
        addPictureResult: state.BeerGroupsReducer.addPictureResult,
        addPictureErrors: state.BeerGroupsReducer.addPictureErrors

    };
}

const mapDispatchToProps = dispatch => {
    return {
        addGroup: (formObject, history, files) => dispatch(addGroupActionCreator(formObject, history, files)),
        clearGroupErrors: (errors, result) => dispatch(addGroup(errors, result))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddGroup));



