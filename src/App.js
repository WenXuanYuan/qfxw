import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {  Provider } from 'react-redux';
import * as reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import Main from './Main';
import { LoginSection, MainFrame, GoodsClassList, GoodsClassCreate } from './containers';

const reducersApp = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducersApp);

export default class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          {() =>
            <Router history={history}>
              <Route path="/" component={Main}>
                <Route path='goods' component={MainFrame} >
                  <Route path='class' component={GoodsClassList}/>
                  <Route path='class/create' component={GoodsClassCreate}/>
                </Route>
              </Route>
              <Route path='/login' component={LoginSection}></Route>
            </Router>
          }
        </Provider>
    );
  }
}
