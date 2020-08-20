import React,{useEffect}from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reduxThunk from 'redux-thunk';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './src/components/navigationRef';
//import { createDrawerNavigator } from '@react-navigation/drawer';
// i//mport { NavigationContainer } from '@react-navigation/native';

import {createDrawerNavigator} from 'react-navigation-drawer';



import reducers from './src/reducers';

import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import DetailScreen from './src/screens/DetailScreen';

const drawer=createDrawerNavigator({
  detail:DetailScreen
});

const SwitchNavigator=createSwitchNavigator({
  SignUp:SignUp,
  SignIn:SignIn,
  drawer,
    Home:Home 
  },{
    initialRouteName:'Home',
    
}
);
 
  
  

const App=createAppContainer(SwitchNavigator);

const store = createStore(reducers,(applyMiddleware(reduxThunk)));



export default ()=>{
  
  return(
    <Provider store={store} >
    <App ref={(navigator)=>setNavigator(navigator) }/>
    </Provider>
  );
}

