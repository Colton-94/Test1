import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet}from 'react-native'

const Button=({children})=>{
    return(
        <View style={styles.buttonStyle}>
            <TouchableOpacity  >
          <Text style={styles.textStyle} >{children}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles=StyleSheet.create({
    textStyle:{
     alignSelf:'center',
     color:'#FFFFFF',
     fontSize:19,
     fontWeight:'100',
     paddingVertical:10
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#007aff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginHorizontal:5
    }
});

export { Button};