import React, { Component } from 'react';
import './sideBar.css';
import '../Navigation.css';
import LoginForm from '../../LoginForm/LoginForm';
import { navBarNavItemsBeforeLogingIn } from '../../../consts/HelpfullArrays';


class SideBar extends Component{
    state = {
        actualBlock: "Logowanie"
    }
    onClickHandler = (blockName) => {
        this.setState({actualBlock: blockName});
    }
    render(){
        const showClass = "side-bar-container " 
            + (!this.props.show ? "side-bar-open" : "side-bar-closed");
           
        return(
            <div className={showClass}>
                <div className="side-bar-nav-container">
                    {navBarNavItemsBeforeLogingIn.map(i => {
                        return (<button onClick={() => this.onClickHandler(i)} 
                        key={i} 
                        className={"side-bar-buttons " + 
                        (this.state.actualBlock === i?
                        "side-bar-button-active" : null)}
                        >{i}</button>);
                    })}
                </div>
                <LoginForm />
            </div>
        );
    }
}



export default SideBar;