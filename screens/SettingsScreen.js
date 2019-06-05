import React from 'react';
import { View, Text , Button} from 'react-native'
import AppHeader from '../components/AppHeader'

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
    return <View>
      <AppHeader headerText={'Settings'} icon={"md-arrow-back"}
      onPress={()=>this.props.navigation.navigate('HomeScreen')}
     
     />
     
     </View>;
  }
}
