import { withNavigation } from "react-navigation";
import React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const HeaderIcons = (props) => {
    console.log(props.navigation)
    return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 20, width: Dimensions.get('window').width/4 , paddingLeft: 20}}>
    <TouchableOpacity onPress={()=>props.navigation.navigate('SearchScreen')}>
      <Icon name={'search-web'} size={26} color="white"  />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>props.navigation.navigate('SettingsScreen')}>
      <Icon name={'settings-outline'} size={26} color="white" style={{marginLeft: 25}} />
    </TouchableOpacity>
    </View>
  )}

export default withNavigation(HeaderIcons)
  