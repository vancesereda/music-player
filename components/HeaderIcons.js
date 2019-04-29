import { withNavigation } from "react-navigation";
import React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const HeaderIcons = (props) => {
    return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', width: Dimensions.get('window').width/4 , paddingLeft: 20}}>
    <TouchableOpacity onPress={()=>props.navigation.navigate('SearchScreen')}>
      <Icon name={'search-web'} size={22} color="rgba(255,255,255,0.9)"  />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>props.navigation.navigate('SettingsScreen')}>
      <Icon name={'settings-outline'} size={22} color="rgba(255,255,255,0.9)" style={{marginLeft: 25}} />
    </TouchableOpacity>
    </View>
  )}

export default withNavigation(HeaderIcons)
  