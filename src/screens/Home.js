import React, { Component } from 'react';
import { ActivityIndicator,View } from 'react-native';
import Result from '../components/Result';
//import { Card } from 'react-native-elements';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }
 
 componentDidMount() {
this.fet();
} 

 fet=async()=>{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category: "movies",
    language: "telugu",
     genre: "all",
    sort: "voting" })
};
const response = await fetch('https://hoblist.com/movieList', requestOptions);
const data = await response.json();
//console.log('respsssssss',data);
this.setState({ data: data.result,isLoading:false });
}

  render() {
    const { data, isLoading } = this.state;
  //console.log('wwer',data);
    return (
     
          <View style={{ flex: 1, padding: 24,justifyContent:'center' }}>
          {isLoading ? <ActivityIndicator/> : (
            <Result data={data} /> 
          )}
        
          </View>
      );
              }
            
}

Home.navigationOptions = () => {
  return {
    header: () => true,
  };
};
