import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions,
  AsyncStorage
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchBar from '../components/SearchBar'
import AppHeader from '../components/AppHeader'
import VideoList from '../components/VideoList'
import TrackList from '../components/TrackList'
import ModalComponent from '../components/ModalComponent'
import {withNavigation } from 'react-navigation'
import HeaderIcons from '../components/HeaderIcons'
import Player from '../components/Player'
import CenterTextView from '../components/CenterTextView';

//Mock data

const artists = ["John Coltrane"]
const tracks = [
  "Giant Steps",
  "Cousin Mary",
  "Countdown"	,
  "Spiral",
  "Syeeda's Song Flute"	,
  "Naima",
  "Mr. P.C.",
  "Part 1: Acknowledgement	",
  "Part 2: Resolution",
  "Part 3: Pursuance",
  "Part 4: Psalm"


]



const albums= ["Giant Steps"]


const trackItemsJohnColtrane = tracks.map((track) => {
 return { "track": track , artist: "John Coltrane", runTime:"2:30", album: "Giant Steps" }
})


const music = {
  trackItemsJohnColtrane
}

//End of mock data

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: 'Tracks',
      music: [],
    }
    
  }

  static navigationOptions = {
    header: null,
  };


  componentDidMount() {
    // this._retrieveData('music')
    AsyncStorage.getItem("music").then((obj)=>{
      console.log(obj);
      this.setState({music: JSON.parse(obj)})
    }).catch(e=>console.log(e));
    console.log(this.state.music)
  }

  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key).then(async obj=> {

         this.setState({[key]: JSON.parse(obj)})


      })
      .catch(e=>console.log(e));
      // const value = await AsyncStorage.getAllKeys()  // leaving this here in case I need to use it again
      
    } 
    catch (error) {
      console.log(error)
    }

  }
  
  render() {
    const { width, height } = Dimensions.get('window')
    const { selection } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: "rgba(35,35,35,1)", marginTop: 0}}>
        <AppHeader headerText={'Library'} icon={'ios-menu'} rightComponent={<HeaderIcons size={20} color={'white'}/>}/>
        {this.state.music ? 
          <TrackList music={this.state.music} /*MOCK: music={music.trackItemsJohnColtrane} */ />
          :
          <CenterTextView text={'Nothing here yet. You can manually move music here, download it, or stream it to add it to the main queue.'} />
          
      }
        
      </View>
    );
  }
}

export default withNavigation(HomeScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 80,
    flex: 1
  },
  centerText: {
    fontSize: 24,
    color: 'rgba(230,255,255,0.9)'
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
