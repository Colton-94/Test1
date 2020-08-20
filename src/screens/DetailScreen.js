import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



const DetailScreen = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <Text>DetailScreen</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})
export default DetailScreen