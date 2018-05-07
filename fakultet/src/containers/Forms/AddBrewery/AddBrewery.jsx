import React, { Component } from 'react';
import './AddBrewery.css';
import BreweryBackground from '../../../assets/modal/brewery-form.jpg';
import DragAndDrop from '../../../components/UI/_dragAndDrop/_dragAndDrop';
import { validateOneInput, validatePictures } from '../../../services/validationMethods';
import Aux from '../../../hoc/auxilary';
import { connect } from 'react-redux';
import { fetchAllGroupsActionCreator, 
    loadingGroupError } from '../../../store/BeerGroups/Actions';

import { addBreweryActionCreator } from '../../../store/Breweries/Actions';    
import Spinner from '../../../components/UI/_spinner/_spinner';
import Director from '../../../assets/beer-group-details/owner-png.png';
import MapPic from '../../../assets/beer-group-details/map.png';
import BirthDate from '../../../assets/beer-group-details/birth-date.png';
import { withRouter } from 'react-router-dom';

import SuccResult from '../../../components/UI/_succResult/_succResult';
import ErrorResult from '../../../components/UI/_errorPrompt/_errorPrompt';

class AddBrewery extends Component{
    state = { 
        currentValidation: [...this.props.addBreweryValidationArray],
        addBreweryItems: [...this.props.addBreweryItems],
        droppedFile: [],
        incorrectPictureError: "",
        addedGroup: null,
        loadedGroups: [],
        loadGroupsSpinner: true,

        addedGroupError: "",
        redirectToDesc: false,

        addBrewerySpinner: false



    }
    componentWillMount(){
        this.props.fetchAllGroups();
    }
    componentWillReceiveProps(prevProps){
        if(prevProps.loadedGroups !== this.props.loadedGroups){
            this.setState({loadedGroups: this.props.loadedGroups, loadGroupsSpinner: false});
        }
        if(prevProps.loadingAllGroupsErrors !== this.props.loadingAllGroupsErrors){
            this.setState({loadGroupsSpinner: false});
        }
        if(prevProps.addBreweryErrors !== this.props.addBreweryErrors || 
        prevProps.addBreweryResult !== this.props.addBreweryResult){
            this.setState({addBrewerySpinner: false});   
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.loadedGroups !== this.props.loadedGroups){
            this.setState({loadedGroups: this.props.loadedGroups, loadGroupsSpinner: false});
        }
        if(prevProps.loadingAllGroupsErrors !== this.props.loadingAllGroupsErrors){
            this.setState({loadGroupsSpinner: false});
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
            validateOneInput(e.target.value, false, this.state.addBreweryItems[id].name,
                 this.state.currentValidation[id].min, this.state.addBreweryItems[id].type);

        this.setState({currentValidation: newValidation});
    }

    validationAfterSubmit = () => {
        const newValidation = [...this.state.currentValidation];
        let result = true;
        for(let i = 0; i < newValidation.length; i++){
            if(newValidation[i].id !== 3){
                newValidation[i].error = validateOneInput(newValidation[i].value, false,
                    this.state.addBreweryItems[i].name, newValidation[i].min, this.state.addBreweryItems[i].type);
                if(newValidation[i].error !== ""){
                    result = false;
                }
            }
        }
        if(this.state.addedGroup === null){
            result = false;
        }
      

        if(!result){
            this.setState({currentValidation: newValidation, addedGroupError: "Musisz wybrac grupe piwowarska"});
        }
        else{
            this.setState({addedGroupError: "", redirectToDesc: true});
        }
    }

    chooseGroupHandler = item => {
        this.setState({addedGroup: item});
    }

    denyAddedGroup = () => {
        this.setState({addedGroup: null, addedGroupError: ""});
    }

    onSubmitSecondFormHandler = e => {  
        e.preventDefault();
        let newValidation = [...this.state.currentValidation];
        const result = validateOneInput(newValidation[3].value, false, this.state.addBreweryItems[3].name,
            this.state.currentValidation[3].min, this.state.addBreweryItems[3].type);

        newValidation[3].error = result;
    
        if(result !== ""){
            this.setState({currentValidation: newValidation});
        }
        else{
            this.setState({addBrewerySpinner: true});
            this.props.addBrewery(this.state.currentValidation[0].value, 
                this.state.currentValidation[3].value, this.state.currentValidation[1].value, 
                this.state.currentValidation[2].value, this.state.addedGroup, 
                this.props.history);

            setTimeout( () => {
                this.props.closeModal();
            }, 1500)

        }
    }

    componentWillUnmount(){
        this.props.loadingGroupError([]);
    }
    render(){
        return(

            <Aux>
                

                {this.state.redirectToDesc ? 
                <form
                style={{backgroundImage: `url(${this.state.droppedFile.length > 0 ?
                    this.state.droppedFile[0].preview : BreweryBackground})`}}
                onSubmit={e => this.onSubmitSecondFormHandler(e)} className="on-submit-desc-container">
                    
                    {this.props.addBreweryResult ? 
                        <SuccResult show={this.props.addBreweryResult}
                        message="Pomyślnie dodano browar, trwa przekierowywanie..."/> : null}

                    {this.props.addBreweryErrors.length > 0 ?
                        <p className="serwer-error">{this.props.addBreweryErrors[0]}</p> : null}
                    
                    <h1 className="form-title">Formularz dodawania browarów</h1>
                    
                    <h2>Historia browaru</h2>

                    {this.state.addBrewerySpinner ? <div className="add-brewery-spinner-container">
                        <Spinner color="black" fontSize="22px" 
                        spinnerContent="trwa dodawanie browaru..." position="relative" />
                    </div> : null}
                   
                    <textarea
                    placeholder={this.state.addBreweryItems[3].placeholder} 
                    value={this.state.currentValidation[3].value}
                    onChange={e => this.onChangeHandler(e, 3)}></textarea>

                    <p style={{backgroundColor: this.state.currentValidation[3].error ? 
                    "red" : "transparent"}}>{this.state.currentValidation[3].error}</p>

                    <div>
                        <input className="submit-form-button submit-brewery-button" type="submit" value="Dodaj browar" />
                        <button onClick={() => this.setState({redirectToDesc: false})} className="submit-form-button submit-brewery-button">Cofnij</button>
                    </div>
                        
                    
                        
                   

                    
                 
                </form> : 
                

                <form
                onSubmit={e => this.onSubmitHandler(e)}
                style={{backgroundImage: `url(${this.state.droppedFile.length > 0 ?
                this.state.droppedFile[0].preview : BreweryBackground})`}}
                className="add-brewery-container">

                    

                    <h1 className="form-title">Formularz dodawania browarów</h1>
                    <div className="brewery-left-form-sections">
                        {this.state.addBreweryItems.map(i => {
                            return (
                                <Aux key={i.id}>
                                    {i.type ? 
                                        <section>
                                        <label>{i.name} *</label>
                                        <input
                                        className={this.state.currentValidation[i.id].error ?
                                            "input-border-errors" : null}
                                        maxLength={i.max}
                                        type={i.type}
                                        placeholder={i.placeholder} 
                                        onChange={e => this.onChangeHandler(e, i.id)} 
                                        value={this.state.currentValidation[i.id].value}
                                    
                                        />
    
                                        <p className="form-validation-error">
                                            {this.state.currentValidation[i.id].error}
                                        </p>
                                    </section>
                                    : null}
                                </Aux>
                                
                            );
                        })}
                        <input
                        className="submit-form-button submit-brewery-button"
                        type="submit"
                        value="Dalej"
                        />
    
    
                        <p className="form-info-prompt">Pamietaj, że przy dodawaniu browarów bardzo ważna jest grupa piwowarska. Przed dodaniem upewnij sie, czy
                           dana grupa znajduje sie na naszej <b onClick={this.props.redirectToGroupList} id="/grupy"
                                                                className="orange-link">liście</b>.
                           Jeżeli nie to poprostu ją <b onClick={ (event) => { this.props.handleToggleAddBreweryModal();
                                                     this.props.handleToggleAddGroupModal()}} className="orange-link">dodaj</b>.
                        </p>
                        <i className="fa fa-hand-o-right"></i>
                    </div>
    
                    <div className="brewery-right-form-sections">
                        
                        <div style={{backgroundColor: !this.state.addedGroup ? "rgba(10, 31, 39, 0.8)" : "transparent"}}
                         className="form-list-holder">
                            
                        
                                {this.state.loadGroupsSpinner ? 
    
                                <div className="absolute-sp-container">
                                    <Spinner 
                                    color="white"
                                    spinnerContent="trwa wczytywanie..."
                                    position="absolute"/>
                                </div> : 
    
                                this.state.addedGroup ?
                                <div className="added-group-block">
                                    <div className="added-group-header">
                                        <div style={{backgroundImage: `url(${BreweryBackground})`}} className="added-group-picture"></div>
                                        <div className="added-group-det-container">
                                            <h2>{this.state.addedGroup.name}</h2>
                                            <article>
                                                <div>
                                                    <img src={Director} alt="Właściciel" />
                                                    <p>{this.state.addedGroup.director}</p>
                                                </div>
                                                <div>
                                                    <img src={MapPic} alt="Miejsce" />
                                                    <p>{this.state.addedGroup.address}</p>
                                                </div>
                                                <div>
                                                    <img src={BirthDate} alt="Data stworzenia" />
                                                    <p>{this.state.addedGroup.createDate.slice(0, 10)}</p>
                                                </div>
                                            </article>
                                        </div>
    
                                    </div>
                                    <button onClick={this.denyAddedGroup}
                                    className="delete-group-button">Usuń dodaną grupe</button>
    
    
                                </div> :
    
                                
                                this.props.loadingAllGroupsErrors.length > 0 ?
                                <p className="serwer-error">{this.props.loadingAllGroupsErrors[0]}</p> : 
                                <Aux>
                                
                                {this.state.addedGroupError ? <p className="serwer-error">{this.state.addedGroupError}</p> : null}
                                
                                <div className="list-header">
                                    <h2>Wybierz grupe piwowarska</h2>
                                </div>
                                <ul className="loaded-groups-list">
                                    {this.state.loadedGroups.map( i => {
                                        return (
                                            <li key={i.id}>
                                                <div style={{backgroundImage: `url(${BreweryBackground})`}} className="beer-group-avatar">
                                                </div>
                                                <div className="list-item-content">
                                                    <p>{i.name}</p>
                                                    <span onClick={e => this.chooseGroupHandler(i)}>Wybierz ta grupe</span>
                                                </div>
                                                
                                            </li>
                                        );
                                    })}
                                </ul>
                                </Aux>}
                        </div>
                        
    
    
    
    
    
    
                        <div className="drag-drop-form-handler">
                            <DragAndDrop
                            deletePic={this.deletePicture}
                            incorrectPictureError={this.state.incorrectPictureError}
                            files={this.state.droppedFile} 
                            onDropHandler={this.onDropHandler} />
                        </div>
                        
                        
                    </div>
                  
    
                </form>
                }
            </Aux>

        );
    }
}

const mapStateToProps = state => {
    return {
        loadingAllGroupsErrors: state.BeerGroupsReducer.loadingAllGroupsErrors,
        loadedGroups: state.BeerGroupsReducer.loadedGroups,
        
        addBreweryErrors: state.BreweriesReducer.addBreweryErrors,
        addBreweryResult: state.BreweriesReducer.addBreweryResult
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllGroups: () => dispatch(fetchAllGroupsActionCreator()),
        loadingGroupError: (errors) => dispatch(loadingGroupError(errors)),

        addBrewery: (name, desc, address, date, brewingGroup, history) => dispatch(addBreweryActionCreator(name, desc, address, date, brewingGroup, history))
        
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddBrewery));



