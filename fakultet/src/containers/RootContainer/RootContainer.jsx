import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import MainPage from '../MainPage/MainPage';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import Aux from '../../hoc/auxilary';
import MainPageContent from '../MainPage/MainPageContent/MainPageContent';
import BeerGroups from '../BeerGroups/BeerGroups';
import BeerGroupsList from '../BeerGroupsList/BeerGroupsList';
import Ranks from '../Ranks/Ranks';
import BeersList from '../BeersList/BeersList';

      
class RootContainer extends Component {
    render() { 
        const responseObject = JSON.parse(localStorage.getItem('loggedUserData'));
        const afterLogingInRoutes = (
            <Aux>
                <Route path="/glowna" exact component={MainPageContent} />
                <Route path="/grupy" exact component={BeerGroupsList} />
                <Route path="/grupy/:id" exact component={BeerGroups} />
                <Route path="/rankingi" exact component={Ranks} />
                <Route path="/piwa" exact component={BeersList} />
                
            </Aux>
        );
        return ( 
            <div className="root-container">
                <Router>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        
                        {responseObject ? <MainPage>
                            {afterLogingInRoutes}
                        </MainPage> : null}
                    </Switch>
                </Router>
            </div>
         )
    }
}
 
export default RootContainer;