import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const VideoListItem = ({video}) => (
    
    // <View>
    //     <Card>
    //     <Image 
    //         style={styles.imageStyle}
    //         source={{uri: video.snippet.thumbnails.medium.url}}
    //     />
    //     <Text>{video.snippet.title}</Text>
    //     <Text>{video.snippet.chanelTitle}</Text>
    //     <Text>{video.snippet.description}</Text>
    //     </Card>
    // </View>
    <ListItem 
        leftAvatar={{ source: {uri: video.snippet.thumbnails.medium.url}}}
        title={video.snippet.title}
        subtitle={video.snippet.channelTitle}
    />


)

const styles = {
    imageStyle: {
        alignSelf: 'stretch',
        height: 180
    }
}


export default VideoListItem;