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
        title={video.snippet.title.replace('&#39;', "'")}
        subtitle={video.snippet.channelTitle}
        containerStyle={styles.containerStyle}
    />


)

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