import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation'



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
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                    <Icon name={'md-arrow-back'} style={styles.iconStyle} size={20} />
                </TouchableOpacity>
                <Icon name={'md-search'} size={20} style={styles.iconStyle} />
                <TextInput
                    style={searchTextStyle}
                    onChangeText={term=>this.setState({ term })}
                    value={this.state.term}
                    placeholder={'Search'}
                    placeholderTextColor={'white'}
                    returnKeyType="search"
                    onSubmitEditing={()=>this.props.onSearch(this.state.term)}
                    onFocus={()=>this.props.onPress(true)}
                    autoFocus={true}
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
        backgroundColor: 'black',
        borderRadius: 2,
        borderBottomWidth: 3,
        borderTopWidth: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'rgba(60,60,60,1)',
    },
    searchTextStyle: {
        flex: 1,
        fontSize: 18,
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
        marginLeft: 10,
        marginRight: 5
        // paddingTop: 13, 
        // marginLeft: 5, 
        // marginRight: 10
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

export default withNavigation(SearchBar);