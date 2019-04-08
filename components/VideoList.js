import React from 'react';
import { ScrollView, View } from 'react-native'
import VideoListItem from './VideoListItem'



const VideoList = ({videos}) => (
    <ScrollView>
        <View style={styles.containerStyle}>
            {videos.map((v)=>
                <VideoListItem 
                    key={v.etag}
                    video={v}
                />
            )}
        </View>
    </ScrollView>
)


const styles = {
    containerStyle: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 50
    }
}


export default VideoList;