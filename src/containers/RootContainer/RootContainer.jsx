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
import BreweriesList from '../BreweriesList/BreweriesList';
import BreweryDetails from '../BreweryDetails/BreweryDetails';      
import BeerDetails from '../BeerDetails/BeerDetails';
import AddBeer from '../Forms/AddBeer/AddBeer';
import ScrollFixer from '../../hoc/scrollFixer';
import { connect } from 'react-redux';
import  { checkIsUserAdmin } from '../../store/Authentication/Actions';
class RootContainer extends Component {
    componentDidMount(){
        if(this.props.isUserAdmin === null)
            this.props.checkIsUserAdmin();
    }
    render() { 
        console.log(this.props.isUserAdmin);
        const responseObject = JSON.parse(localStorage.getItem('loggedUserData'));
        const afterLogingInRoutes = (
            <Aux>
                <Route path="/glowna" exact component={MainPageContent} />
                <Route path="/grupy" exact component={BeerGroupsList} />
                <Route path="/grupy/:id" exact component={BeerGroups} />
                <Route path="/rankingi" exact component={Ranks} />
                <Route path="/piwa" exact component={BeersList} />
                <Route path="/browary" exact component={BreweriesList} />
                <Route path="/browary/:id" exact component={BreweryDetails} />
                <Route path="/nowepiwo" exact component={AddBeer} />
                <Route path="/piwa/:id" exact component={BeerDetails} />
            </Aux>
        );
        return ( 
            <div className="root-container">
                <Router>
                <ScrollFixer>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        {responseObject ? <MainPage isUserAdmin={this.props.isUserAdmin} responseObject={responseObject}>
                            {afterLogingInRoutes}
                        </MainPage> : null}
                    </Switch>
                    </ScrollFixer>
                    
                </Router>
            </div>
         )
    }
}

const mapStateToProps = state => {
    return {
        isUserAdmin: state.AuthenticationReducer.isUserAdmin
    };
}

const mapDispatchToProps = dispatch => {
    return {
        checkIsUserAdmin: () => dispatch(checkIsUserAdmin())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);




