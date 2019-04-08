import React from 'react';
import { Header } from 'react-native-elements'
import Colors from '../constants/Colors'

const AppHeader = (props) => (
    <Header centerComponent={ { text: props.headerText, style: { color: 'white', fontSize: 16, fontWeight: 'bold' } } }
            containerStyle={{ backgroundColor: Colors.darkTheme.tabColor,
                borderBottomWidth: 0
         }}
    />
)

export default AppHeader;