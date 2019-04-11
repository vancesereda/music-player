import React from 'react';
import { Header } from 'react-native-elements'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons' 
import { View } from 'react-native'
import Dropdown from './Dropdown'


const AppHeader = (props) => (

    <Header 
    leftComponent={<Dropdown 
                        title={"Sort By"}
                        selectableOptionsText={["Title", "Album", "Artist", "Duration", "Ascending"]} /* I will be adding more to this in the future - importing my own NPM component */ 
                    />
                   }
        // leftContainerStyle={{position: 'absolute', zIndex: 5}}
        centerComponent={ { text: props.headerText, style: { color: 'white', fontSize: 18, fontWeight: 'bold' } } }
                containerStyle={{ backgroundColor: Colors.darkTheme.tabColor,
                    borderBottomWidth: 0
            }}
    />
)


const OrganizeFunnel = (props) => (
    <Ionicons name="md-funnel" color="white" size={18} onPress={()=>console.log('')}/>
)



export default AppHeader;