import React from 'react';
import { Header } from 'react-native-elements'
import Colors from '../constants/Colors'
import { Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons' 
import { View , StyleSheet, Dimensions } from 'react-native'
import Dropdown from './Dropdown'


const AppHeader = (props) => (

    <Header
        // leftComponent = {props.leftComponent || null}
        leftComponent={{ 
                            text: props.headerText, 
                            style: { 
                                flex: 1, color: 'white', fontSize: 22, paddingLeft: 5,
                                marginTop: -10
                                
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
        height: 50,
        borderBottomWidth: 0,
        
    }
})
export default AppHeader;