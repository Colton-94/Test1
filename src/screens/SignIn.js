import React,{useState,useEffect} from 'react'
import { View,StyleSheet } from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {signIn} from '../action';
import firebase from 'firebase';



const SignIn = ({msg,signIn}) => {
    const[email,setEmail]=useState(''); 
    const[password,setPassword]=useState('');
    console.log('msg',msg);
    useEffect(()=>{
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
  },[]);
    return(
  <View style={styles.container}>
    <Text style={{fontSize:30,marginLeft:100,padding:5}}>Sign In</Text>
    <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
    <Input label="Pwd" value={password} onChangeText={setPassword}  autoCapitalize="none" autoCorrect={false} secureTextEntry />
    {msg?<Text style={{color:'red',fontWeight:'bold'}}>{msg}</Text>:null}
    <Button
     title='Sign In'
     onPress={()=>signIn({email,password})}
     />
     </View>
  );
};


const styles = StyleSheet.create({
  container: {
   flex: 1 ,

  }
})

const mapStateToProps=(state)=>{
  return {msg:state.user.err}
}
export default connect(mapStateToProps,{signIn})(SignIn);

