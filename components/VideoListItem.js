import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const icons = ["playlist-plus", "play", "share", "download"];
const text = ["Save", "Stream", "Share", "Download"];

class VideoListItem extends Component {
    

    constructor(props) {
        super(props);
        this.state={
            dropdown: false
        }
    }

    _renderDropdownView = () => { 
       
      if (this.state.dropdown) {
      return ( 
        <View style={styles.dropdownStyle}>
            {icons.map((icon, idx) => (
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems:'center', flex: 1}} key={idx}> 
                    <MaterialCommunityIcons key={idx} name={icon} size={40} color={'rgba(60,60,60,1)'} />
                    <Text style={styles.dropdownText}>{text[idx]}</Text>
                </View>
            ))}
            
            
        </View>
        )
      }
    }

    render() {
        const { snippet } = this.props.video;
        return (
        <View>
            <TouchableOpacity onPress={()=>this.setState({dropdown: !this.state.dropdown})}>
                
                <ListItem 
                    leftAvatar={{ source: {uri: snippet.thumbnails.medium.url}}}
                    title={snippet.title.replace('&#39;', "'")}
                    subtitle={snippet.channelTitle}
                    containerStyle={styles.containerStyle}
                />
                {this._renderDropdownView()}
            </TouchableOpacity>
        </View>
        )
    }

}


const styles = {
    imageStyle: {
        alignSelf: 'stretch',
        height: 180
    },
    containerStyle: {
        backgroundColor: 'rgba(220,220,220,1)',
        borderRadius: 2,
        borderBottomWidth: 1
    },
    dropdownStyle: {
        flex: 1,
        height: 75, 
        backgroundColor: 'rgba(230,230,230,1)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'stretch',

    },
    dropdownText: {
        color: 'rgba(100,100,100,1)',
        fontSize: 10,



    }
}


export default VideoListItem