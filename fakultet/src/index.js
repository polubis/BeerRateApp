import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootContainer from './containers/RootContainer/RootContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import AuthenticationReducer from './store/Authentication/Reducers';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import BeerGroupsReducer from './store/BeerGroups/Reducers';
import BeersReducer from './store/Beers/Reducers';
import BreweriesReducer from './store/Breweries/Reducers';
import CommentsReducer from './store/Comments/Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    AuthenticationReducer: AuthenticationReducer,
    BeerGroupsReducer: BeerGroupsReducer,
    BeersReducer: BeersReducer,
    BreweriesReducer: BreweriesReducer,
    CommentsReducer: CommentsReducer
}); 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
      <RootContainer />
    </Provider>,
    document.getElementById('root')
  );
registerServiceWorker();

