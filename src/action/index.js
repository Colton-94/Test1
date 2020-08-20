import {  navigate } from '../components/navigationRef';
import {AsyncStorage} from 'react-native';
import firebase from 'firebase';

export const signUp=({name,email,password,phone,selectedValue})=>{
        return async (dispatch)=>{
            await firebase.auth().createUserWithEmailAndPassword(email,password);
           // AsyncStorage.setItem('user',name);
        dispatch({type:'SIGN_UP', payload:name,email,password,phone,selectedValue});
        navigate('SignIn');
    }
    };

export const signIn=({email,password})=>{
    return async(dispatch)=>{
            try{
             await firebase.auth().signInWithEmailAndPassword(email,password);
            //  AsyncStorage.setItem('user',email);
              dispatch({type:'SIGN_IN',payload:email,password});
              navigate('Home');
            }catch(err){
           dispatch({type:'ERR',payload:'Invalid Credentials'});
        
        }
    }
};