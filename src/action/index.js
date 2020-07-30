import {  navigate } from '../components/navigationRef';
import {AsyncStorage} from 'react-native';

export const signUp=({name,email,password,phone,selectedValue})=>{
        return async (dispatch)=>{
            //API requests
            await AsyncStorage.setItem('user',name);
        dispatch({type:'SIGN_UP', payload:name,email,password,phone,selectedValue})
        navigate('Home');
    }
    };