import React from 'react';
import { View, Text , Button} from 'react-native'

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <View><Button onPress={()=>this.props.navigation.navigate('HomeScreen')} title={'Go Back'}></Button><Text>Settings</Text></View>;
  }
}
