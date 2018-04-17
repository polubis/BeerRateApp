import React, { Component } from 'react';
import SideBar from '../../components/Navigation/sideBar/sideBar';
import Navbar from '../../components/Navigation/navBar/navBar';
import HomePageBeer from '../../assets/BeerBackground.jpg';
import NextHomePageBeer from '../../assets/beers.jpg';
import LastHomePageBeer from '../../assets/HomePageBeer.jpg';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';
import { logingIn, register} from '../../store/Authentication/Actions';

import './HomePage.css';
class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showSideBar: true,
            whichScrollBlock: 1,
            actualBlock: "Logowanie"
        }
        this.windowScrollHandler = this.windowScrollHandler.bind(this);
    }
    componentDidUpdate(prevState){
        if(prevState.actualBlock !== this.state.actualBlock){
            this.props.Register([]);
            this.props.Loging([]);
        }
    }
    onClickHandler = (event) => {

        this.setState({actualBlock: event.target.id ? event.target.id : "Rejestracja"});
    }
    componentDidMount(){
        window.addEventListener('scroll', this.windowScrollHandler);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.windowScrollHandler);
    }
    windowScrollHandler = () => {
        const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        let whichBlockScrollBlock = 1;
        if(window.scrollY >= h){
            whichBlockScrollBlock = 2;
        }
        if(window.scrollY >= (h+h)){
            whichBlockScrollBlock = 1;
        }
        this.setState({showSideBar: window.scrollY >= h ? false : true, 
            whichScrollBlock: whichBlockScrollBlock, 
            showFooter: window.scrollY === 3*h ? true : false});
    }
    ControlViewPortHandler = (e) => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
          });
        this.setState({actualBlock: e.target.value}); 
    }
    render() { 
        return ( 
            <div className="home-page-container">
                
                <header>
                    <Navbar 
                    scrollUp={e => this.ControlViewPortHandler(e)}
                    show={this.state.whichScrollBlock}/>
                    <Transition 
                    mountOnEnter 
                    unmountOnExit 
                    in={this.state.showSideBar}
                    timeout={400}>
                        {state => (
                            <SideBar changeBlock={this.onClickHandler}
                            show={this.state.showSideBar} 
                            actualBlock={this.state.actualBlock} />
                        )}
                    </Transition>
                </header>
                
                <main>
                    <div style={{backgroundImage: `url(${HomePageBeer})`,
                    backgroundAttachment: this.state.showSideBar ? 'fixed' : 'unset'}}
                    className="block-container">
                        <div className="page-desc-second-container">
                            <p>Łączy nas pasja do piwa...</p>
                        </div>
                         
                    </div>
                    <div style={{backgroundImage: `url(${NextHomePageBeer})`, 
                    backgroundAttachment: this.state.showSideBar ? 'unset' : 'fixed'}}
                    className="block-container">
                        <div className="page-desc-second-container">
                            
                        </div>
                        <div className="page-desc-container">
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${LastHomePageBeer})`}} 
                    className="block-container">
                        <div className="page-desc-second-container">
                            
                        </div>
                    </div>

                    <footer>
                        Stopka
                    </footer>
                </main>
                
                

                
                
                
            </div>
         )
    }
}
 


const mapDispatchToProps = dispatch => {
    return {
        Register: (registerObject) => dispatch(logingIn(registerObject)),
        Loging: (logingObject) => dispatch(register(logingObject))

    };
}
export default connect(null, mapDispatchToProps)(HomePage);