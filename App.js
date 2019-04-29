/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View , Text, AppRegistry} from 'react-native';
import { withNavigation } from 'react-navigation'
import AppNavigator from './navigation/AppNavigator';
import AppHeader from './components/AppHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import { createStackNavigator, createSwitchNavigator, createAppContainer  } from 'react-navigation';
import TrackPlayer from 'react-native-track-player'
// TrackPlayer.setupPlayer().then(() => {
//   // The player is ready to be used
// });



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export const HomeNavigator = createSwitchNavigator(
  {HomeScreen,
    SearchScreen,
    SettingsScreen})

const AppContainer = createAppContainer(HomeNavigator);
AppRegistry.registerComponent('AppContainer', ()=>AppContainer)

class App extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar backgroundColor="black"/>}
        {/* <AppHeader
            rightComponent={<Icon name={'settings-outline'} size={22} color="white" />}
         /> */}
        
        <AppContainer />
        
      </View>
    )}

    
}


export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(55,55,55,1)',
    // paddingTop: 0,
    // paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
  },
});