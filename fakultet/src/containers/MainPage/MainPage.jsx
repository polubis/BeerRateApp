import React, { Component} from 'react';
import './MainPage.css';
import { withRouter } from 'react-router-dom';
import Image from '../../assets/BeerBackground.jpg';
import Sidebar from '../../components/AuthUserComponents/Navigation/Sidebar/Sidebar';
import Navbar from '../../components/AuthUserComponents/Navigation/Navbar/Navbar';

class MainPage extends Component {
    logout = () => {
        localStorage.clear();
        this.props.history.push('/');
    }
    redirectToAnotherBlock = event => {
        if(event.target.title !== ""){
            this.props.history.push("/" + event.target.title);
        }   
    }

    render() { 
        return ( 
            <div style={{backgroundImage: `url(${Image})`}} className="main-page-container" >
                <div className="place-holder-block"></div>
               
                <Navbar />
                <Sidebar 
                redirect={e => this.redirectToAnotherBlock(e)}
                logout={this.logout}
                />
                
                {this.props.children}
                
                
            </div>
         )
    }
}
 
export default withRouter(MainPage);