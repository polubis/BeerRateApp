import React, { Component} from 'react';
import './MainPage.css';
import { withRouter } from 'react-router-dom';
import Image from '../../assets/background.jpg';
import Sidebar from '../../components/AuthUserComponents/Navigation/Sidebar/Sidebar';
import Navbar from '../../components/AuthUserComponents/Navigation/Navbar/Navbar';
import Chaos from '../../components/UI/_chaos/_chaos';
import AddGroup from '../Forms/AddGroup/AddGroup';
import { addGroupFormItems, addGroupFormItemsValidationArray , addBreweryItems, addBreweryValidationArray} from '../../consts/HelpfullArrays';
import AddBrewery from '../Forms/AddBrewery/AddBrewery';


class MainPage extends Component {
    state = {
        addGroupModal: false,
        addBreweryModal: false,
        addBeerModal: false,
        spinner: true
    }

    
    logout = () => {
        localStorage.clear();
        this.props.history.push('/');
    }

    redirectToAnotherBlock = event => {
        if(event.target.title !== ""){
            this.props.history.push("/" + event.target.title);
        }   
    }
    redirectToForms = event => {
        if(event.target.title !== ""){
            this.props.history.push("/" + event.target.title);
        }
    }

    clearErrors = array => {
        for(let key in array){
            array[key].error = "";
            array[key].value = "";
        }
    }

    handleToggleAddGroupModal = () => {
        this.setState({addGroupModal: !this.state.addGroupModal});
        this.clearErrors(addGroupFormItemsValidationArray);
    }
    handleToggleAddBreweryModal = () => {
        this.setState({addBreweryModal: !this.state.addBreweryModal});
        this.clearErrors(addBreweryValidationArray);
    }

    handleToggleAddBeerModal = () => {
        this.setState({addBeerModal: !this.state.addBeerModal});
    }
    redirectToAddBeer = () => {
        this.props.history.push("/nowepiwo");
    }

    redirectToGroupList = e => {
        this.setState({addBreweryModal: false});
        this.props.history.push(e.target.id);
    }

    render() { 
        return ( 
            <div style={{backgroundImage: `url(${Image})`}} className="main-page-container" >
                <div className="place-holder-block"></div>
               
                <Navbar 
                redirectToAddBeer={this.redirectToAddBeer}
                redirect={e => this.redirectToForms(e)}
                handleToggleAddGroupModal={this.handleToggleAddGroupModal}
                handleToggleAddBreweryModal={this.handleToggleAddBreweryModal}
                handleToggleAddBeerModal={this.handleToggleAddBeerModal} />
                
                <Sidebar 
                redirect={e => this.redirectToAnotherBlock(e)}
                logout={this.logout}
                />
                
                {this.props.children}



                { this.state.addGroupModal ? 
                <Chaos toggle={this.handleToggleAddGroupModal}
                show={this.state.addGroupModal}>
                    <AddGroup
                    closeModal={this.handleToggleAddGroupModal}
                    addGroupFormItems={addGroupFormItems}
                    addGroupFormItemsValidationArray={addGroupFormItemsValidationArray} />
                </Chaos> : null }   


                {this.state.addBreweryModal ? 
                <Chaos toggle={this.handleToggleAddBreweryModal}
                show={this.state.addBreweryModal}>
                    <AddBrewery 
                    closeModal={this.handleToggleAddBreweryModal}
                    redirectToGroupList={e => this.redirectToGroupList(e)}
                    addBreweryItems={addBreweryItems}
                    addBreweryValidationArray={addBreweryValidationArray}
                    handleToggleAddBreweryModal={this.handleToggleAddBreweryModal}
                    handleToggleAddGroupModal={this.handleToggleAddGroupModal} />

                </Chaos> : null }   

                {this.state.addBeerModal ? 
                <Chaos toggle={this.handleToggleAddBeerModal}
                show={this.state.addBeerModal}>
                    <AddBrewery 
                    addBreweryItems={addGroupFormItems}
                    addBreweryValidationArray={addGroupFormItemsValidationArray} />
                </Chaos> : null }   
           
                
                
            </div>
         )
    }
}
 
export default withRouter(MainPage);
