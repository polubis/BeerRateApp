import React, { Component} from 'react';
import './MainPage.css';
import { withRouter } from 'react-router-dom';
import Backdrop from '../../components/UI/_backdrop/_backdrop';
import Spinner from '../../components/UI/_spinner/_spinner';

import Sidebar from '../../components/AuthUserComponents/Navigation/Sidebar/Sidebar';

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
    render() { 
        return ( 
            <div onClick={this.onClick} className="main-page-container" >
                <Sidebar />
                
            </div>
         )
    }
}
 
export default withRouter(MainPage);