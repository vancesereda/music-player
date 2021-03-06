import React from 'react';
import { ScrollView, View } from 'react-native'
import VideoListItem from './VideoListItem'



const VideoList = ({videos, getVideoInfo, testDownload}) => (
    <ScrollView>
        <View style={styles.containerStyle}>
            {videos.map((v)=>
               
                <VideoListItem 
                    key={v.etag}
                    video={v}
                    getVideoInfo={getVideoInfo}
                    testDownload={testDownload}
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
        marginTop: 25,
        backgroundColor: 'grey'
    }
}


export default VideoList;