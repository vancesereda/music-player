import { withNavigation } from "react-navigation";
import React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const HeaderIcons = ({size, color, navigation}) => {
    return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', width: Dimensions.get('window').width/4 , paddingLeft: 20}}>
    <TouchableOpacity onPress={()=>navigation.navigate('SearchScreen')}>
      <Icon name={'search-web'} size={size} color={color}  />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('SettingsScreen')}>
      <Icon name={'settings-outline'} size={size} color={color} style={{marginLeft: 25}} />
    </TouchableOpacity>
    </View>
  )}

export default withNavigation(HeaderIcons)
  