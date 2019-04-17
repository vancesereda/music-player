import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { WebBrowser } from 'expo';
import SearchBar from '../components/SearchBar'
import AppHeader from '../components/AppHeader'
import VideoList from '../components/VideoList'
import YTSearch from 'youtube-api-search'
import TrackList from '../components/TrackList'
import ModalComponent from '../components/ModalComponent'


const artists = ["Machine Girl"]
const tracks = ["MG1",
 "Ionic Funk (20XXX Battle Music)",
 "Krystle (URL Cyber Palace Mix)",
 "Ginger Claps",
 "Ghost",
 "覆面調査員 (GabberTrap Mix)",
 "Out By 16, Dead on the Scene",
 "Post Rave Maximalist",
 "Phase α",
 "Free Will"
]

const albums= ["WLFGRL"]


const trackItemsMachineGirl = tracks.map((track) => {
 return { "track": track , artist: "Machine Girl", runTime:"2:30", album: "WLFGRL" }
})


const music = {
  trackItemsMachineGirl
}

const API_KEY = 'AIzaSyCx2WmYgEsrUwU-uGhT_Z3WS7x-qP2m0mw'

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: 'Tracks'
    }
  }

  static navigationOptions = {
    header: null,
  };


  _changeSelection = (selection) => {
    this.setState({selection})
  }

  render() {
    const { selection } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: "black"}}>
        {/* <AppHeader headerText="Your Library" modal={true} /> */}
        <AppHeader leftComponent=
            {<ModalComponent selection={selection} _changeSelection={this._changeSelection}/>  } 
            rightComponent={<View></View>}
         />
        <TrackList music={music.trackItemsMachineGirl} />
        {/*selection === 'Tracks' ? 
        <TrackList music={trackItemsMachineGirl}/>
        : selection === 'Albums' ? 
        <AlbumList music={props.albumList} />
        : selection ===  'Artists' ? 
        <ArtistList music={props.artistList} />
        : 
        <Playlists music={props.playlists} />
      */}
        
        
      </View>
    );
  }





  // // _maybeRenderDevelopmentModeWarning() {
  // //   if (__DEV__) {
  // //     const learnMoreButton = (
  // //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  // //         Learn more
  // //       </Text>
  // //     );

  // //     return (
  // //       <Text style={styles.developmentModeText}>
  // //         Development mode is enabled, your app will be slower but you can use useful development
  // //         tools. {learnMoreButton}
  // //       </Text>
  // //     );
  // //   } else {
  // //     return (
  // //       <Text style={styles.developmentModeText}>
  // //         You are not in development mode, your app will run at full speed.
  // //       </Text>
  // //     );
  // //   }
  // // }

  // _handleLearnMorePress = () => {
  //   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  // };

  // _handleHelpPress = () => {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  //   );
  // };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
