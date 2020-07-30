import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {connect } from 'react-redux';


const Home = (props) => {
  console.log(props);
const { container } = styles
 return(
  <View style={container}>
    <Text>{props.data.name}</Text>
  </View>
  )
};



const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
});

const mapStateToProps=state=>{
  return {data:state.user};
}

export default connect(mapStateToProps)(Home);

