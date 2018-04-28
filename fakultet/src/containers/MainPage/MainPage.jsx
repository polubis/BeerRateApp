import React, { Component} from 'react';
import './MainPage.css';
import { withRouter } from 'react-router-dom';
import Image from '../../assets/background.jpg';
import Sidebar from '../../components/AuthUserComponents/Navigation/Sidebar/Sidebar';
import Navbar from '../../components/AuthUserComponents/Navigation/Navbar/Navbar';
import Chaos from '../../components/UI/_chaos/_chaos';

class MainPage extends Component {
    state = {
        addGroupModal: false,
     
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
    
    handleToggleAddGroupModal = () => {
        this.setState({addGroupModal: !this.state.addGroupModal});
    }
    render() { 
        return ( 
            <div style={{backgroundImage: `url(${Image})`}} className="main-page-container" >
                <div className="place-holder-block"></div>
               
                <Navbar 
                redirect={e => this.redirectToForms(e)}
                handleToggleAddGroupModal={this.handleToggleAddGroupModal} />
                
                <Sidebar 
                redirect={e => this.redirectToAnotherBlock(e)}
                logout={this.logout}
                />
                
                {this.props.children}

                { this.state.addGroupModal ? 
                <Chaos  handleToggleAddGroupModal={this.handleToggleAddGroupModal}
                addGroupModal={this.state.addGroupModal}/> : null }   
           
                
                
            </div>
         )
    }
}
 
export default withRouter(MainPage);