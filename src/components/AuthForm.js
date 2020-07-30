import React,{useState} from 'react';
import {StyleSheet,View,Picker}from 'react-native';
import {Text,Input,Button} from 'react-native-elements';



const AuthForm=({textHeader,buttonText,errmsg,onSubmit})=>{
    const[name,setName]=useState('');
    const[email,setEmail]=useState(''); 
    const[password,setPassword]=useState('');
    const[phone,setPhone]=useState('');
    const[selectedValue,setSelectedValue]=useState('Other');
    return (
        <View style={styles.container}>
            <Text h3>{textHeader}</Text>
            <Input label="Name" value={name} onChangeText={setName} autoCapitalize="none" autoCorrect={false} />
            <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
            <Input label="Pwd" value={password} onChangeText={setPassword}  autoCapitalize="none" autoCorrect={false} secureTextEntry />
            <Input label="Phone" value={phone} onChangeText={setPhone} autoCapitalize="none" autoCorrect={false} />
             {errmsg?<Text>{errmsg}</Text>:null}
            <Picker
                selectedValue={selectedValue}
                style={{flex:1, width:150,paddingBottom:100,paddingTop:-50 }}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}  >
                <Picker.Item label="Doctor" value="doctor" />
                <Picker.Item label="Engineer" value="engineer" />
                <Picker.Item label="Entrepreneur" value="entrepreneur" />
                <Picker.Item label="Other" value="Other" />
            </Picker> 
                <Button style={{paddingTop:50}}
                title={buttonText} 
                onPress={()=>{onSubmit({name,email,password,phone,selectedValue})}}/> 
            </View>
            
           
        );
};

const styles=StyleSheet.create({
    container: {
    flex:1,
    paddingTop:-20,
    alignItems: "center"
  }
});


export default AuthForm;



