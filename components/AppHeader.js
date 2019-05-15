import React from 'react';
import { Header } from 'react-native-elements'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons' 
import { View , StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import HeaderIcons from './HeaderIcons'


const AppHeader = (props) => (


    <View style={styles.containerStyleDarkTheme}>
                <TouchableOpacity onPress={()=>null}>
                    <Icon name={'ios-menu'} style={styles.iconStyle} size={22} />
                </TouchableOpacity>
                <Text style={styles.searchTextStyle}>{props.headerText}</Text>
                {/* <Icon name={'md-search'} size={20} style={styles.iconStyle} /> */}
                <HeaderIcons size={22} color={'white'}/>
                
               

    </View>
    
)

const styles = StyleSheet.create({
    containerStyleLightTheme: { 
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(240,240,240,1)',
        borderRadius: 2,
        borderBottomWidth: 2,
        borderTopWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#333333',
        marginTop: -3,
        paddingTop: 15, 
        paddingBottom: 15
        
    },
    containerStyleDarkTheme: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'black',
        borderRadius: 2,
        borderBottomWidth: 2,
        borderTopWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(60,60,60,1)',
        marginTop: -3,
        paddingTop: 15, 
        paddingBottom: 15
    },
    searchTextStyle: {
        flex: 1,
        fontSize: 20,
        paddingLeft: 20,
        marginBottom: 2,
        fontWeight: 'normal',
        color: 'white'
        
        // paddingTop: 10,
        // paddingBottom: 10
    },
    buttonStyle: {
        height: 30,
        marginBottom: 8
    },
    iconStyle: {
        color: "white", 
        marginLeft: 15,
        marginRight: 10
        // paddingTop: 13, 
        // marginLeft: 5, 
        // marginRight: 10
    },
})
export default AppHeader;