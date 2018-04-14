import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
  
class RootContainer extends Component {
    render() { 
        return ( 
            <div className="root-container">
                <Router>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                    </Switch>
                </Router>
            </div>
         )
    }
}
 
export default RootContainer;