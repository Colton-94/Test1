import React from 'react';
import { View, StyleSheet,Button} from 'react-native';
import AuthForm from '../components/AuthForm';
import {connect} from 'react-redux';
import {signUp} from '../action';
import firebase from 'firebase';

class SignUp extends React.Component {
componentDidMount(){
  if (!firebase.apps.length){
  firebase.initializeApp({
            
    apiKey: 'AIzaSyCoTspiNnlYDEcIIHE6VvI8Ql6WeNc8Z8o',
    authDomain: 'auth-50a22.firebaseapp.com',
    databaseURL: 'https://auth-50a22.firebaseio.com',
    projectId: 'auth-50a22',
    storageBucket: 'auth-50a22.appspot.com',
    messagingSenderId: '606327983697',
    appId: '1:606327983697:web:c728c9fb822400e9ddf270',
    measurementId:'G-DR4ZLZ5N43'
  });
}
}
render(){
  return (
    <View style={styles.container}>
   
      <AuthForm
        headerText=" Please Sign Up "
        errorMessage="SomeThing went wrong Please try again"
        buttonText="Sign Up"
        onSubmit={this.props.signUp}
      />
    
    
    </View>
  );
}}

SignUp.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  }
});

export default connect(null,{signUp})(SignUp);