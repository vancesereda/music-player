import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import AppHeader from '../components/AppHeader';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';

export default class LinksScreen extends React.Component {
  state = {
    loading: false,
    videos: []
  }

  onPressSearch = (term) => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({loading: true})
    YTSearch({key: API_KEY, term }, videos => {
      console.log(videos);
      this.setState(({loading: false, videos }))
    })
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <AppHeader headerText={"Search Youtube"} />
        <SearchBar onPressSearch={this.onPressSearch}
                    loading = {this.state.loading}
        />
            
        <VideoList videos={this.state.videos} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#000',
  },
});
