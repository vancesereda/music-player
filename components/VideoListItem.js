import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

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
        <View style={{height: 75, backgroundColor: 'rgba(230,230,230,1)'}}>
            <Text>Testing Testing</Text>
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
    }
}


export default VideoListItem;