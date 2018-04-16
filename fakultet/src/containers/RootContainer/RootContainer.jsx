import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import MainPage from '../MainPage/MainPage';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import Aux from '../../hoc/auxilary';


class RootContainer extends Component {
    render() { 
        const responseObject = JSON.parse(localStorage.getItem('loggedUserData'));
        const afterLogingInRoutes = (
            <Aux>
                <Route path="/glowna" exact component={MainPage} />
            </Aux>
        );
        return ( 
            <div className="root-container">
                <Router>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        {responseObject ? afterLogingInRoutes : null}
                    </Switch>
                </Router>
            </div>
         )
    }
}
 
export default RootContainer;