import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'




class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state= {
            term: 'Majority Report',
            searching: false
        }
    }

    render() {
        const { 
            containerStyle,
            searchTextStyle,
            buttonStyle
        } = styles;
        return (
            <View style={containerStyle}>
                <Ionicons name={'md-search'} size={20} style={styles.iconStyle} />
                <TextInput
                    style={searchTextStyle}
                    onChangeText={term=>this.setState({ term })}
                    value={this.state.term}
                    placeholder={'Search'}
                    placeholderTextColor={'white'}
                    returnKeyType="search"
                    onSubmitEditing={()=>this.props.onSearch(this.state.term)}
                    onFocus={()=>this.props.onPress(true)}
                />
               

            </View>
        )
    }

}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(220,220,220, 1)',
        borderRadius: 2,
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderColor: '#cccccc'
    },
    searchTextStyle: {
        flex: 1,
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        height: 30,
        marginBottom: 8
    },
    iconStyle: {
        color: "black", 
        paddingTop: 13, 
        marginLeft: 5, 
        marginRight: 10
    },
    oldSearchText: {
        fontSize: 12,
    },
    oldSearches: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

export default SearchBar;