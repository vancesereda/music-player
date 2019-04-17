import React from 'react';
import { Header } from 'react-native-elements'
import Colors from '../constants/Colors'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons' 
import { View , StyleSheet, Dimensions } from 'react-native'
import Dropdown from './Dropdown'


const AppHeader = (props) => (

    <Header
        // leftComponent = {props.leftComponent || null}
        leftComponent={{ 
                            text: props.headerText, 
                            style: { 
                                flex: 1, color: 'white', fontSize: 22, paddingLeft: 5,
                                paddingTop: 16,
                            }
                        }}


        placement={'left'}
        containerStyle={styles.container}
        rightComponent={props.rightComponent || null }
    />
)

const styles = StyleSheet.create({
    container: { 
        backgroundColor: Colors.darkTheme.tabColor,
        
        borderBottomWidth: 0,
        
    }
})
export default AppHeader;