import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import { setNavigator } from './src/components/navigationRef';

import reducers from './src/reducers';

import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';

const navigator=createStackNavigator({
    SignUp:SignUp,
    Home:Home
  },
  {
    initialRouteName:'SignUp',
    defaultNavigationOptions:{
    title: 'Task 1'
  }}
  );

const App=createAppContainer(navigator);

const store = createStore(reducers,(applyMiddleware(reduxThunk)));

export default ()=>{
  return(
    <Provider store={store} >
    <App ref={(navigator)=>setNavigator(navigator) }/>
    </Provider>
  )
}

