import React from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components'

// const Button = styled.Text`
//     color: white

// `

const buttons = [
    "Tracks",
    "Albums",
    "Artists",
    "Playlists"
]
export default class MusicViews extends React.Component {

    onPress = () => {

    }

    render() {
        return (
            <View>
                {buttons.map((obj,i) => {
                    return (
                        <Button title={obj} key={i} onPress={this.onPress}/>
                    )
                })}

            </View>
        )
    }






}