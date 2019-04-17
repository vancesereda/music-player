import React, { Component } from 'react'
import { View, TextInput} from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state={
            term: '',
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
                <Ionicons name={'md-search'} size={20} style={{color: "black", paddingTop: 13, marginLeft: 5, marginRight: 10}} />
                <TextInput
                    style={searchTextStyle}
                    onChangeText={term=>this.setState({ term })}
                    value={this.state.term}
                    placeholder={'Search'}
                    placeholderTextColor={'white'}
                    returnKeyLabel={'search'}
                />
                {/* <Button 
                    buttonStyle={buttonStyle}
                    title={this.props.loading ? `Loading`: `Search`}
                    onPress={()=>this.props.onPressSearch(this.state.term)}
                /> */}

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
    }
}

export default SearchBar;