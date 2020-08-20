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
    keyExtractor={({ _id }) =>_id}
    renderItem={({ item }) => (
        
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
                    <Text style={{fontWeight:'400',fontSize:20}}>{item.title}</Text>
                        <View style={{flexDirection:'row'}}>
                            <View >
                                <Text style={{color:'grey',fontSize:12,fontWeight:'700'}}>Genre:</Text>
                                <Text style={{color:'grey',fontSize:12,fontWeight:'700',alignSelf:'stretch'}}>Director:</Text>
                                <Text style={{color:'grey',fontSize:12,fontWeight:'700'}}>Starring:</Text>  
                            </View>
                            <View style={{alignItems:'flex-start'}}>
                                <Text style={{textTransform:'capitalize',fontSize:12}}>{item.genre}</Text>
                                <Text style={{textAlign:'left',fontSize:12}}>{item.director}</Text>
                                <Text style={{textAlign:'left',fontSize:12,}}>{item.stars}</Text>
                            </View>
                        </View>
                             
                    <Text style={{fontSize:12}}>Mins|{item.language}|{}</Text>
                    <Text style={{color:'#007aff',fontSize:12}} >{item.pageViews} Views|Voted by {item.totalVoted} people</Text>

                </View> 
                 </View>
                        <View style={styles.buttonStyle}>
                                <Button>
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
        paddingHorizontal:5,
        borderBottomWidth:2,
        borderColor:'#D3D3D3',
        
        
    },
    container1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:10,
        flex:1
        
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
        paddingHorizontal:5,
        
        
        
    },
    votes:{
        alignContent:'center',
        flexDirection:'column',
        justifyContent:'space-evenly',
        paddingHorizontal:5,

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
  