import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Result from '../components/Result';
import { Card } from 'react-native-elements';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }
 /* componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' ,})
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
       // console.log(response)
        .then(data => this.setState({ data: data.id }));
}   */
 
 componentDidMount() {
  // POST request using fetch with async/await
this.fet();
} 
//componentDidUpdate(){
  //this.fet();
//}
  
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

  /*async componentDidMount () {
    
    const response =  await axios.get('https://hoblist.com/favourites/list/movies',  {
  params :  {  
          category: "movies",
        language: "telugu",
         genre: "all",
        sort: "voting"
          //}
  });
  console.log('resp',response.data);

  //this.setState({data : response,isLoading:false});
  }

  let data = await axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
    this.setState({ todos: data.data });
  }

 /*const response = await fetch(`https://hoblist.com/favourites/list/movies`);
  const json = await response.json();
  this.setState({ data: json });

*/



  render() {
    const { data, isLoading } = this.state;
  //console.log('wwer',data);
    return (
     
          <View style={{ flex: 1, padding: 24,justifyContent:'center' }}>
          {isLoading ? <ActivityIndicator/> : (
            // <FlatList
            //   data={data}
            //   keyExtractor={({ id }, index) => id}
            //   renderItem={({ item }) => (
            //     <Card>
            //       <Text>{item.title}</Text>
            //       </Card>
            //   )}
            // />
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
