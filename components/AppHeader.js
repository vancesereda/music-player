import React from 'react';
import { Header } from 'react-native-elements'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons' 
import { View , StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import Dropdown from './Dropdown'
import HeaderIcons from './HeaderIcons'


const AppHeader = (props) => (

    // <Header
    //     // leftComponent = {props.leftComponent || null}
    //     leftComponent={{ 
    //                         text: props.headerText, 
    //                         style: { 
    //                             flex: 1, color: 'white', fontSize: 22, paddingLeft: 5,
    //                             fontWeight: "bold",
    //                             marginTop: -10
                                
    //                         }
    //                     }}


    //     placement={'left'}
    //     containerStyle={styles.container}
    //     rightComponent={props.rightComponent || null }
    // />

    <View style={styles.containerStyleDarkTheme}>
                {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                    <Icon name={'md-arrow-back'} style={styles.iconStyle} size={20} />
                </TouchableOpacity> */}
                <Text style={styles.searchTextStyle}>{props.headerText}</Text>
                {/* <Icon name={'md-search'} size={20} style={styles.iconStyle} /> */}
                <HeaderIcons />
                
               

    </View>
    
)

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'rgba(220,220,220,1)',
        // height: 50,
        borderRadius: 2,
        
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderColor: '#cccccc',
        
    },
    containerStyleDarkTheme: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(65,65,65,1)',
        borderRadius: 2,
        borderBottomWidth: 2,
        borderTopWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#232323',
        marginTop: -3,
        paddingTop: 15, 
        paddingBottom: 15
    },
    searchTextStyle: {
        flex: 1,
        fontSize: 20,
        paddingLeft: 5,
        // fontWeight: 'bold',
        color: 'white'
        
        // paddingTop: 10,
        // paddingBottom: 10
    },
    buttonStyle: {
        height: 30,
        marginBottom: 8
    },
    iconStyle: {
        color: "black", 
        marginLeft: 10,
        marginRight: 5
        // paddingTop: 13, 
        // marginLeft: 5, 
        // marginRight: 10
    },
})
export default AppHeader;