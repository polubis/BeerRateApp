import React, { Component} from 'react';
import './MainPage.css';
import { withRouter } from 'react-router-dom';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.history.location.pathname
            !== this.props.history.location.pathname){  
            return true;
        }
    }
    onClick = () => {
        localStorage.clear();
        this.props.history.push('/');
    }
    render() { 
        return ( 
            <div onClick={this.onClick}>
                Siemaneczko kliknij zeby wylogowac dziala a jest 1 :/
            </div>
         )
    }
}
 
export default withRouter(MainPage);