import React, { Component } from 'react';
import './_chaos.css';
import Backdrop from '../_backdrop/_backdrop';

class Chaos extends Component {
    state = {
        inlineStyles: {}
    }
 
    componentDidMount(){
        window.addEventListener('resize', this.handleWindowResize = this.handleWindowResize.bind(this))
        this.handleWindowResize();
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleWindowResize = this.handleWindowResize.bind(this));
    }
    handleWindowResize = () => {
        const inlineStyles = {
            width: document.documentElement.clientWidth*0.75,
            height: document.documentElement.clientHeight*0.75,
            left: (document.documentElement.clientWidth*0.5)*25/100,
            top: (document.documentElement.clientHeight*0.5)*25/100
        }
        this.setState({inlineStyles: inlineStyles});
    }
    render() { 
        return ( 
                
            <Backdrop showBackdrop={this.props.addGroupModal} >
                <div style={this.state.inlineStyles} className="chaos">
                    <i onClick={this.props.handleToggleAddGroupModal} className="fa fa-times"></i>
                    {this.props.children}
                </div>    
            </Backdrop>
           
        )
    }
}
 
export default Chaos;