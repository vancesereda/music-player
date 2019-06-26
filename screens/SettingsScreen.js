import React from 'react';
import { View, Text , Button, PermissionsAndroid, StyleSheet, AsyncStorage} from 'react-native'
import RNFileSelector from 'react-native-file-selector'
import AppHeader from '../components/AppHeader'
import CenterTextView from '../components/CenterTextView'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: 'app.json',
  };

  _openFileChooser = async () => {
    console.log('TEST FILE SELECT')
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Title',
          message: ' Access your files',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        RNFileSelector.Show({
          title: 'Select File',
          onDone: path => {
            alert(path);
          },
          onCancel: () => {
            alert('cancelled');
          },
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <View style={{flex: 1}}>
      <AppHeader headerText={'Settings'} icon={"md-arrow-back"}
      onPress={()=>this.props.navigation.navigate('HomeScreen')}
     
     />
      <CenterTextView text={'Clear async storage'} onPress={()=>AsyncStorage.clear()}/>

     {/* <Button onPress={this._openFileChooser} title="Test File Select (broken)" /> */}

     </View>;
  }
}
