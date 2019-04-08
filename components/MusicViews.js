import React from 'react';
import { Text, View, Button , StyleSheet, Alert} from 'react-native';
import styled from 'styled-components'
import { Header } from 'react-native-elements'

// const Button = styled.Text`
//     color: white

// `

const buttons = [
    "Tracks",
    "Albums",
    "Artists",
    "Playlists"
]

// const ButtonStyled = styled.View`

// //     max-width: 25%,
// //     display: flex


// // `
export default class MusicViews extends React.Component {

    onPress = () => {
        Alert.alert('Boys Now')
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ddd'}}>
                <Header 
                    centerComponent={{text: 'Search Youtube', style: { color: 'white'}}}
                    outerContainerStyles={{ backgroundColor: '#e62117'}}
                />






                {/* {buttons.map((obj,i) => {
                    return (
                        <Button title={obj} key={i} color="#000000" onPress={this.onPress}/>
                    )
                })} */}

            </View>
        )
    }






}


const styles = StyleSheet.create({

    buttonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})