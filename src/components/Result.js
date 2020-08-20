import React from 'react'
import { View, Text, StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native'
//import {Card, CardSection} from 'react-native-elements';
import {Button} from '../common';
import { AntDesign } from '@expo/vector-icons';



const Result = (props) => {
if(!props)
return null;

 return(
     
    <FlatList
    data={props.data}
    keyExtractor={({ _id, }) =>_id}
    renderItem={({ item,index }) => (
        
          <View style={styles.container}>
              <View style={styles.container1}>
                    <View style={styles.votes}>          
                      <TouchableOpacity>
                      <AntDesign style={{marginLeft:5}} name="caretup" size={24} color="black" />
                      </TouchableOpacity>
                         <Text style={{marginLeft:10}}>{item.totalVoted}</Text>
                     <TouchableOpacity>
                      <AntDesign style={{marginLeft:5}} name="caretdown" size={24} color="black" />
                      </TouchableOpacity>
                      <Text>Votes</Text>
                </View>
                <View style={{paddingHorizontal:10}}>
                        <Image style={styles.image} source={{ uri :item.poster}} />
                </View>
                <View style={styles.body}>
                    <Text style={{fontWeight:'400',fontSize:20,paddingBottom:10}}>{item.title}</Text>
                        <View ellipsizeMode="tail" style={{flexDirection:'row'}}>
                            <View >
                                <Text style={{color:'grey',fontSize:13,fontWeight:'700',paddingBottom:2}}>Genre:</Text>
                                <Text style={{color:'grey',fontSize:13,fontWeight:'700',alignSelf:'stretch',paddingBottom:2}}>Director:</Text>
                                <Text style={{color:'grey',fontSize:13,fontWeight:'700',paddingBottom:2}}>Starring:</Text>  
                            </View>
                            <View ellipsizeMode="tail" style={{alignItems:'flex-start',flexShrink:1}}>
                                <Text style={{textTransform:'capitalize',fontSize:13, paddingBottom:2}}>{item.genre}</Text>
                                <Text style={{textAlign:'left',fontSize:13, paddingBottom:2}}>{item.director}</Text>
                                <Text  numberOfLines={1}  ellipsizeMode='tail' style={{textAlign:'left',fontSize:13,}}>{item.stars}</Text>
                            </View>
                        </View>
                             
                    <Text style={{fontSize:13,paddingBottom:2}}>Mins|{item.language}</Text>
                    <Text style={{color:'#007aff',fontSize:13}} >{item.pageViews} Views|Voted by {item.totalVoted} people</Text>

                </View> 
                 </View>
                        <View style={styles.buttonStyle}>
                                <Button onPress={()=>console.log('index',index)}>
                                 Watch Trailer
                                </Button>
                        </View>
          </View>
       
    )}
  />
  )
}


const styles = StyleSheet.create({
    container:{
        borderBottomWidth:2,
        borderColor:'#D3D3D3',
        flex: 1,
         flexWrap: 'wrap',
         width:100
        
    },
    container1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:10,  
    },
    image:{
        width:65,
        height:125,
        borderRadius:7,
        justifyContent:'center',
        
    },
    buttonStyle:{
        bottom:3,
    },
    body:{
        
        alignContent:'stretch',
        textAlign:'center',
        paddingHorizontal:0,
       
    },
    votes:{
        alignContent:'center',
        flexDirection:'column',
        justifyContent:'space-evenly',

    },
    heading:{
        fontSize:18,
        color:'#D3D3D3',
        fontWeight:'200'
    },
    text:{
        fontSize:12,
        textAlign:'center'
    }
})
export default Result;

Result.navigationOptions = () => {
    return {
      header: () => false,
    };
  };
  