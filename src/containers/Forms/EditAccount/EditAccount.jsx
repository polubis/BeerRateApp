import React, { Component } from 'react';
import './EditAccount.css';
import { editAccount } from '../../../consts/HelpfullArrays';
import { validateOneInput, validatePictures } from '../../../services/validationMethods';
import AddPictureBlock from '../AddBeer/addPictureBlock/addPictureBlock';
import DragAndDrop from '../../../components/UI/_dragAndDrop/_dragAndDrop';

class EditAccount extends Component {
    state = {
        editAccountValidation: [
            {id: 0, error: "", val: JSON.parse(localStorage.getItem('loggedUserData')).username},
            {id: 1, error: "", val: JSON.parse(localStorage.getItem('loggedUserData')).email},
            {id: 2, error: "", val: ""},
            {id: 3, error: "", val: ""},
        ],
        droppedFile: [],
        incorrectPictureError: "",
    }

    onInputChangeHandler = e => {
        const newCoreItems = [...this.state.editAccountValidation];
        newCoreItems[e.target.id].val = e.target.value;
        const result = validateOneInput(e.target.value, editAccount[e.target.id].req, editAccount[e.target.id].label, 
            editAccount[e.target.id].min, editAccount[e.target.id].type);

        newCoreItems[e.target.id].error = result; 
        this.setState({editAccountValidation: newCoreItems});
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

    render() { 
        return ( 
            <form onSubmit={e => this.onSubmitHandler(e)} className="edit-account-form-container">
                <h1>Edycja profilu użytkownika</h1>
                <div className="main-div">
                    <div className="left">
                        {editAccount.map(i => {
                        return (
                            <section key={i.id}>
                            {i.id === 2 ? <h2>Zmień hasło</h2>:null}
                                <label>{i.label}<font style={{color:"red"}}>*</font></label>
                                    <input autoComplete="off" id={i.id} onChange={e => this.onInputChangeHandler(e)} 
                                    value={this.state.editAccountValidation[i.id].val} 
                                    maxLength={i.max} placeholder={i.holder} type={i.type} />
                                <p>{this.state.editAccountValidation[i.id].error}</p>
                            </section>
                        );
                        })}
                    </div>
                    <div className="right">
                        <div className="botle-higher">
                            {this.state.droppedFile.length > 0 ?

                            <div style={{backgroundImage: `url(${this.state.droppedFile.length > 0 ? this.state.droppedFile[0].preview : null})`}} 
                            className={`botle-container`}>

                            </div> :
                            
                            <div style={{backgroundImage: `url(${require("../../../assets/avatarPlaceholder.png")})`}} 
                            className={`botle-container`}>
                            </div>
                        
                        }

                        </div>

                        <DragAndDrop 
                        deletePic={() => this.setState({droppedFile: []})}
                        incorrectPictureError={this.state.incorrectPictureError} 
                        files={this.state.droppedFile}
                        onDropHandler={this.onDropHandler} />

                    </div>
                </div>
                <input className="subm-butt" type="submit" value="Zapisz" />
            </form>
        )
    }
}
export default EditAccount;