import React from 'react';
import { View, Text } from 'react-native'

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
    return <View><Text>Settings</Text></View>;
  }
}
