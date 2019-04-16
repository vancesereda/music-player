import React from 'react';
import { Header } from 'react-native-elements'
import Colors from '../constants/Colors'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons' 
import { View } from 'react-native'
import Dropdown from './Dropdown'


const AppHeader = (props) => (

    <Header
        // leftContainerStyle={{position: 'absolute', zIndex: 5}}
        leftComponent = {props.leftComponent}
        centerComponent={ { text: props.headerText, style: { color: 'white', fontSize: 18, fontWeight: 'bold' } } }
                containerStyle={{ backgroundColor: Colors.darkTheme.tabColor,
                    borderBottomWidth: 0
            }}
        rightComponent={props.rightComponent}
    />
)


const OrganizeFunnel = (props) => (
    <Ionicons name="md-funnel" color="white" size={18} onPress={()=>console.log('')}/>
)



export default AppHeader;