import React from 'react';
import { StyleSheet, View, Dimensions, Text, ScrollView , TouchableOpacity, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import { MaterialCommunityIcons  } from '@expo/vector-icons'
import Youtube from '../apis/Youtube';
import axios from 'axios';



// const previousSearches = ["majority report", "john coltrane", "wayne shorter"]


export default class SearchScreen extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      loading: false,
      videos: [],
      searching: false,
      oldSearches: ["majority report", "john coltrane", "wayne shorter"]
    }
  }
  static navigationOptions = {
    header: null,
  };

  onSearch = (term) => {
    this.searchYT(term);
  }
  onPress = (state) => {
    this.setState({searching: state})
  }

  searchYT = async (term) => {
    console.log(term)

    // previousSearches.push(term)
    this.setState({loading: true})

    const response = await Youtube.get("/search", {
      params: {
        q: term
    }}).then(res=> {
      console.log(res.data.items)
    }).catch(e=>console.log(e))

  }

  getVideoInfo = async (link) => {
    const response = await axios.get(`https://youtube-video-info.herokuapp.com/${link}`).then(res=>{
      console.log(res.data)
    }).catch(e=>console.log(e))
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <AppHeader headerText={'Search Youtube'}   /> */}
     
        <SearchBar onSearch={this.onSearch}
                    onPress={this.onPress}
                    loading={this.state.loading}
                    oldSearches={this.state.previousSearches}
        />
        <ScrollView style={{flex: 1, flexDirection: 'column', paddingBottom: 0, marginBottom: 0}}>
          <View>
            <Button title="Test Link" onPress={()=>this.getVideoInfo('rcgzsbyiy4s')} />
          </View>
         {/* this.state.searching ?
            this.state.oldSearches.map((term, idx) => 

                <View key={idx} style={styles.oldSearches}>
                <TouchableOpacity onPress={()=>this.searchYT(term)}>
                 
                    <MaterialCommunityIcons name={'reload'} size={30} style={styles.iconStyleStart}/>
                  
                
                    <Text style={styles.oldSearchText}>{term}</Text>
                  
                 
                    <MaterialCommunityIcons name={'arrow-top-left'} size={30} style={styles.iconStyleEnd} />
                </TouchableOpacity>
                </View>
            )
         : null*/}






        </ScrollView>
            
        <VideoList videos={this.state.videos} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: 'gray',
  },
  iconStyleStart: {
    color: "black", 
    marginLeft: 5, 
    marginRight: 10,
    flex: 1,
    justifyContent: 'flex-start'
  },
  iconStyleEnd: {
    color: "black", 
    marginLeft: 5, 
    marginRight: 10,
    flex: 1,
    justifyContent: 'flex-end'
  },
  oldSearchText: {
      fontSize: 16,
      flex: 6,
      color: "rgba(0,0,0,0.8)"
      
  },
  oldSearches: {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'stretch',
     
  }
});
