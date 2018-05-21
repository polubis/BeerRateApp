import React, { Component } from 'react';
import './AddBeer.css';
import BeerIcon from '../../../assets/icons/beer-icon.png';
import Navigation from './navigation/navigation';
import { validateOneInput, validatePictures } from '../../../services/validationMethods';
import FormContent from './formContent/formContent';
import AddPictureBlock from './addPictureBlock/addPictureBlock';
import { coreItems, aditionalItems} from '../../../consts/HelpfullArrays';
import Modal from '../../../components/UI/_chaos/_chaos';
import { connect } from 'react-redux';
import { fetchAllBreweriesActionCreator, loadingBreweriesErrors } from '../../../store/Breweries/Actions';
import Spinner from '../../../components/UI/_spinner/_spinner';
import ModalBackground from '../../../assets/background.jpg';
import NotFoundResult from '../../../components/UI/_notFoundResult/_notFoundResult';
import BreweryLogo from '../../../assets/icons/beer-factory.png';
import BrewingGroupLogo from '../../../assets/icons/brewery-group.png';
import Aux from '../../../hoc/auxilary';
import { addBeerActionCreator, addBeer } from '../../../store/Beers/Actions';
import { withRouter } from 'react-router-dom';
import Prompt from '../../../components/UI/_errorPrompt/_errorPrompt';

class AddBeer extends Component{
    state = {
        stepId: 0,
        coreItemsValidation: [
            {id: 0, error: "", val: ""},
            {id: 1, error: "", val: ""},
            {id: 2, error: "", val: ""},
            {id: 3, error: "", val: ""},
        ],
        aditionalItemsValidation: [
            {id: 4, error: "", val: ""},
            {id: 5, error: "", val: ""},
            {id: 6, error: "", val: ""},
            {id: 7, error: "", val: ""},
            {id: 8, error: "", val: ""},
            {id: 9, error: "", val: ""},
            {id: 10, error: "", val: ""}
        ],
        valComplited: false,

        droppedFile: [],
        incorrectPictureError: "",
        showModalWithBreweries: false,
        loadBreweriesSpinner: false,

        addingBeerModal: false,
        addingBeerSpinner: false
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.loadingAllBreweriesErrors !== this.props.loadingAllBreweriesErrors){
            this.setState({loadBreweriesSpinner: false});
        }
        if(nextProps.addBeerErrors !== this.props.addBeerErrors){
            this.setState({addingBeerSpinner: false});
        }
    }


    changeStepId = e => {
        const result = this.validate(this.state.coreItemsValidation);
        this.setState({stepId: result ? e.target.id : this.state.stepId});
    }
    onSubmitHandler = e => {
        e.preventDefault();
        if(this.state.stepId == 0){
            const valiadtionResult = this.validate(this.state.coreItemsValidation);
            if(valiadtionResult){
                this.setState({stepId: 1, valComplited: true});
            }
        }
        else{
            this.setState({showModalWithBreweries: true, loadBreweriesSpinner: true});
            this.props.fetchAllBreweries();
        }
        
    }
    validate = array => {
        const coreItemsCopy = [...array];
        let result = true;
        let helperResult = "";
        for(let i = 0; i < coreItemsCopy.length; i++){
            helperResult = validateOneInput(coreItemsCopy[i].val, coreItems[i].req,
                coreItems[i].label, 
                coreItems[i].min, coreItems[i].type);
            if(helperResult !== ""){
                result = false;
                coreItemsCopy[i].error = helperResult;
            }
        }
        this.setState({coreItemsValidation: coreItemsCopy});
        return result;

    }
    onInputChangeHandler = e => {
        const newCoreItems = [...this.state.coreItemsValidation];
        newCoreItems[e.target.id].val = e.target.value;
        const result = validateOneInput(e.target.value, coreItems[e.target.id].req, coreItems[e.target.id].label, 
            coreItems[e.target.id].min, coreItems[e.target.id].type);

        newCoreItems[e.target.id].error = result; 
        this.setState({coreItemsValidation: newCoreItems});
    }

    onDetailsChangeHandler = e => {
        const newAditionalItems = [...this.state.aditionalItemsValidation];
        newAditionalItems[e.target.id].val = e.target.value;
        const result = validateOneInput(e.target.value, aditionalItems[e.target.id].req, aditionalItems[e.target.id].label, 
            aditionalItems[e.target.id].min, aditionalItems[e.target.id].type);
        
        newAditionalItems[e.target.id].error = result; 
        this.setState({aditionalItemsValidation: newAditionalItems});
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

    toggleModalWithBreweries = () => {
        this.props.loadingBreweriesErrors([]);
        this.setState({showModalWithBreweries: false});
    }

    addBeer = id => {
        this.setState({addingBeerModal: true, addingBeerSpinner: true});
        const copiedCore = [...this.state.coreItemsValidation];
        const copiedOther = [...this.state.aditionalItemsValidation];
        this.props.addBeer(id, this.props.history, copiedCore, copiedOther, this.state.droppedFile);
    }
    componentWillUnmount(){
        this.props.addBeerResultChanger(null, []);
    }
    render(){
        return(
            <form onSubmit={e => this.onSubmitHandler(e)} className="add-beer-form-container">
                <h1>Formularz dodawania piwa</h1>

                <Navigation 
                stepId={this.state.stepId} 
                changeStepId={e => this.changeStepId(e)}
                valComplited={this.state.valComplited} />

                <div className="form-pic-container">
                    <FormContent stepId={this.state.stepId} 
                    coreItems={coreItems} 
                    coreItemsValidation={this.state.coreItemsValidation}

                    aditionalItems={aditionalItems}
                    aditionalItemsValidation={this.state.aditionalItemsValidation}

                    onInputChangeHandler={e => this.onInputChangeHandler(e)}
                    onDetailsChangeHandler={e => this.onDetailsChangeHandler(e)}
                    />

                    <AddPictureBlock 
                    deletePic={() => this.setState({droppedFile: []})}
                    incorrectPictureError={this.state.incorrectPictureError}
                    files={this.state.droppedFile}
                    onDropHandler={this.onDropHandler}
                    coreItems={this.state.coreItemsValidation}
                    aditionalItems={this.state.aditionalItemsValidation}
                    files={this.state.droppedFile} />

                </div>
                
               
                <input className="subm-butt" type="submit" value={this.state.stepId == 0 ? 
                    "Dalej" : "Dodaj"} />

                {this.state.showModalWithBreweries ? 
                    <Modal show={this.state.showModalWithBreweries} 
                    toggle={this.toggleModalWithBreweries}>

                            <div style={{backgroundImage: `url(${ModalBackground})`}} className="change-brewery-container">
                            
                            {this.state.loadBreweriesSpinner ? 
                            <Spinner position="absolute" color="white" spinnerContent="trwa wczytywanie..." /> :                            
                            <Aux>
                                <h1>Wybierz browar, w którym dodasz piwo <i>lub </i> 
                                <span onClick={() => this.addBeer(null)}>poprostu dodaj</span></h1>

                                {this.props.loadingAllBreweriesErrors.length === 0 ? 

                                this.props.loadedBreweries.length > 0 ?
                                <ul>
                                    {this.props.loadedBreweries.map(i => {
                                        return (
                                            <li key={i.id}>
                                                <img src={BreweryLogo} alt="Zdjęcie browaru" />
                                                <p>{i.name}</p>
                                                <div>
                                                    <img src={BrewingGroupLogo} alt="Ikona grupy" />
                                                    <span>{i.brewingGroup ? i.brewingGroup.name : "Brak"}</span>
                                                </div>
                                                <article>{i.description ? i.description : "Brak opisu"}</article>
                                                <button onClick={() => this.addBeer(i.id)} type="button">Wybierz</button>
                                            </li>
                                        );
                                    })}
                                
                                </ul> : <NotFoundResult message={this.props.loadingAllBreweriesErrors[0]} /> : 
                                <p className="empty-content-in-db">Aktualnie nie ma żadnych browarów w bazie danych :/</p>
                                }
                            </Aux>}
                            
                            
                        </div>
                        
                    </Modal> : null}

                

                    {this.state.addingBeerModal ? 
                        <Modal style={{backgroundImage: `url(${ModalBackground})`}} 
                        show={this.state.addingBeerModal} 
                        toggle={() => { this.setState({addingBeerModal: false}); this.props.addBeerResultChanger(null, []); }}>
                            {this.state.addingBeerSpinner ? 
                            <Spinner position="absolute" color="white" spinnerContent="trwa dodawanie piwa..." /> : null}

                            {this.props.addBeerResult === false ? 
                            <Prompt message={this.props.addBeerErrors[0]} /> : null}

                            {this.props.addBeerResult === true ? 
                            <Prompt regStat={this.props.addBeerResult} 
                            message="Pomyślnie dodano markę piwa, zostaniesz przekierowany automatycznie..."/> : null}
                        </Modal> : null
                    }
            </form>
        );
    }
}


const mapStateToProps = state => {
    return {
        loadedBreweries: state.BreweriesReducer.loadedBreweries,
        loadingAllBreweriesErrors: state.BreweriesReducer.loadingAllBreweriesErrors,
        addBeerResult: state.BeersReducer.addBeerResult,
        addBeerErrors: state.BeersReducer.addBeerErrors
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllBreweries: () => dispatch(fetchAllBreweriesActionCreator()),
        loadingBreweriesErrors: (errors) => dispatch(loadingBreweriesErrors(errors)),
        addBeer: (breweryId, history, copiedCore, copiedOther, files) => dispatch(addBeerActionCreator(breweryId, history, copiedCore, copiedOther, files)),
        addBeerResultChanger: (result, errors) => dispatch(addBeer(result, errors))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddBeer));

