import React from 'react';
import { StyleSheet, View, Dimensions, Text, ScrollView , TouchableOpacity, Button, AsyncStorage } from 'react-native';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import { MaterialCommunityIcons  } from 'react-native-vector-icons'
import Youtube from '../apis/Youtube';
import axios from 'axios';
import Player from '../components/Player'
import TrackPlayer from 'react-native-track-player'
import RNBackgroundDownloader from 'react-native-background-downloader';



//old mock data

// const previousSearches = ["majority report", "john coltrane", "wayne shorter"]
// [{"kind":"youtube#searchResult","etag":"\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/lhT34dZPUt009rzPl2W3lttA01Y\"","id":{"kind":"youtube#channel","channelId":"UC-3jIAlnQmbbVMV6gR7K8aQ"},"snippet":{"publishedAt":"2010-05-25T02:04:46.000Z","channelId":"UC-3jIAlnQmbbVMV6gR7K8aQ","title":"The Majority Report w/ Sam Seder","description":"The Majority Report is a daily, political talk show at majority.fm live at 12PM ET. Call the show after 12:30PM ET 646-257-3920. Available on Itunes or the site as ...","thumbnails":{"default":{"url":"https://yt3.ggpht.com/-Xafcs7_oX7U/AAAAAAAAAAI/AAAAAAAAAAA/QmgbPsCCLeU/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"},"medium":{"url":"https://yt3.ggpht.com/-Xafcs7_oX7U/AAAAAAAAAAI/AAAAAAAAAAA/QmgbPsCCLeU/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"},"high":{"url":"https://yt3.ggpht.com/-Xafcs7_oX7U/AAAAAAAAAAI/AAAAAAAAAAA/QmgbPsCCLeU/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"}},"channelTitle":"The Majority Report w/ Sam Seder","liveBroadcastContent":"upcoming"}},{"kind":"youtube#searchResult","etag":"\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/JlKzkgMQUcvJi_0T2BWLp2EvQ00\"","id":{"kind":"youtube#video","videoId":"SK4BOXlShO4"},"snippet":{"publishedAt":"2019-04-19T00:00:00.000Z","channelId":"UC-3jIAlnQmbbVMV6gR7K8aQ","title":"Williams Barr&#39;s Press Conference Made NO Sense At All","description":"Attorney General William Barr decided to hold a press conference on the Mueller report before it was even released, which made zero sense. Sam Seder and ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/SK4BOXlShO4/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/SK4BOXlShO4/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/SK4BOXlShO4/hqdefault.jpg","width":480,"height":360}},"channelTitle":"The Majority Report w/ Sam Seder","liveBroadcastContent":"none"}},{"kind":"youtube#searchResult","etag":"\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/Nn-yzDNihe6dOFBHM7rgcZSLfCY\"","id":{"kind":"youtube#video","videoId":"-0637SDnkYI"},"snippet":{"publishedAt":"2019-04-17T04:30:00.000Z","channelId":"UC-3jIAlnQmbbVMV6gR7K8aQ","title":"Fox Hosts Melt Down As Bernie Continually Owns Them During Town Hall","description":"Brett Baier and Martha MacCallum had a very hard time controlling Bernie Sanders' awesomeness at a recent Fox News townhall. Sam Seder and the Majority ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/-0637SDnkYI/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/-0637SDnkYI/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/-0637SDnkYI/hqdefault.jpg","width":480,"height":360}},"channelTitle":"The Majority Report w/ Sam Seder","liveBroadcastContent":"none"}}],

export default class SearchScreen extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      loading: false,
      videos: [],
      videoInfo: []
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


  componentDidMount() {
    this._retrieveData('videos')
  }

  searchYT = async (term) => {
    console.log('loading')
    this.setState({loading: true})
    const response = await Youtube.get("/search", {
      params: {
        q: term
    }}).then(res=> {
      this.setState({videos: res.data.items})
      this._storeData("videos", res.data.items)
    }).catch(e=>console.log(e))

  }

  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key).then(async obj=> {
          console.log(obj)
          if (obj) {
            this.setState({videos: JSON.parse(obj)})
          }


      })
      .catch(e=>console.log(e));
      
    } 
    catch (error) {
      console.warn('Error retrieving async data.')
    }

  }

  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
      // console.log(value)
    } 
    catch (error) {
      console.warn('Error storing async data. \n ', error)
    }

  }





  render() {
    return (
      <View style={styles.container}>
     
        <SearchBar onSearch={this.onSearch}
                    onPress={this.onPress}
                    loading={this.state.loading}
                    oldSearches={this.state.previousSearches}
        />
        <VideoList videos={this.state.videos} 
                    getVideoInfo={this.getVideoInfo} 
                    videoInfo={this.state.videoInfo}
                    testDownload={this.testDownload}
        /> 
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'rgba(50,50,50,1)',
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
