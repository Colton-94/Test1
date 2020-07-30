import React from 'react';
import { View, StyleSheet,Button} from 'react-native';
import AuthForm from '../components/AuthForm';
import {connect} from 'react-redux';
import {signUp} from '../action';

const SignUp = ({ signUp }) => {


  return (
    <View style={styles.container}>
   
      <AuthForm
        headerText=" Please Sign Up "
        errorMessage="SomeThing went wrong Please try again"
        buttonText="Sign Up"
        onSubmit={signUp}
      />
    
    
    </View>
  );
};

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
  },
});

export default connect(null,{signUp})(SignUp);