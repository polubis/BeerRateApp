import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootContainer from './containers/RootContainer/RootContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import LogingReducer from './store/Loging/Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    LogingReducer: LogingReducer
}); 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
      <RootContainer />
    </Provider>,
    document.getElementById('root')
  );
registerServiceWorker();

