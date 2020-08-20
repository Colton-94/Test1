import React from 'react';
import {View,StyleSheet, ImagePropTypes} from 'react-native';

const  Card=(props)=>{
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles=StyleSheet.create({
    container:{ 
       backgroundColor:'grey'     
    }
});

export {Card};