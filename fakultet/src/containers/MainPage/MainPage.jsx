import React, { Component} from 'react';
import './MainPage.css';
import { withRouter } from 'react-router-dom';
//import Backdrop from '../../components/UI/_backdrop/_backdrop';
//import Spinner from '../../components/UI/_spinner/_spinner';
import Image from '../../assets/BeerBackground.jpg';
import Sidebar from '../../components/AuthUserComponents/Navigation/Sidebar/Sidebar';
import Navbar from '../../components/AuthUserComponents/Navigation/Navbar/Navbar';
import MainPageContent from './MainPageContent/MainPageContent';
/*
                <Backdrop showBackdrop={this.state.initialBackdropWithSpinner}>
                    <Spinner spinnerContent="trwa ładowanie..." color="white" fontSize="32px"/>
                </Backdrop>
*/



class MainPage extends Component {
    state = {
        
    }
    
    onClick = () => {
        localStorage.clear();
        this.props.history.push('/');
    }
    redirectToHomePage = () => {
        this.props.history.push('/');
    }
    render() { 
        return ( 
            <div style={{backgroundImage: `url(${Image})`}} className="main-page-container" >
                <div className="place-holder-block"></div>
                <Sidebar />
                <Navbar clicked={this.redirectToHomePage} />
                <MainPageContent />
            </div>
         )
    }
}
 
export default withRouter(MainPage);