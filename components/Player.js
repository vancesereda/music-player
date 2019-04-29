import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TrackPlayer from 'react-native-track-player'


export default class Player extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            track: true,
        }
    }
    
    componentDidMount() {

        TrackPlayer.setupPlayer();
        TrackPlayer.updateOptions({
            stopWithApp: false,
            capabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_PAUSE,
              TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
              TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
              TrackPlayer.CAPABILITY_STOP
            ],
            compactCapabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_PAUSE
            ]
          });

    }


    togglePlayback = async () => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack == null) {
          await TrackPlayer.reset();
          await TrackPlayer.add(playlistData);
          await TrackPlayer.add({
            id: 'local-track',
            url: localTrack,
            title: 'Pure (Demo)',
            artist: 'David Chavez',
            artwork: 'https://picsum.photos/200',
          });
          await TrackPlayer.play();
        } else {
          if (PlayerStore.playbackState === TrackPlayer.STATE_PAUSED) {
            await TrackPlayer.play();
          } else {
            await TrackPlayer.pause();
          }
        }
      }
    
      skipToNext = async () => {
        try {
          await TrackPlayer.skipToNext()
        } catch (_) {}
      }
    
      skipToPrevious = async () => {
        try {
          await TrackPlayer.skipToPrevious()
        } catch (_) {}
      }
    
      getStateName(state) {
        switch (state) {
          case TrackPlayer.STATE_NONE: return 'None'
          case TrackPlayer.STATE_PLAYING: return 'Playing'
          case TrackPlayer.STATE_PAUSED: return 'Paused'
          case TrackPlayer.STATE_STOPPED: return 'Stopped'
          case TrackPlayer.STATE_BUFFERING: return 'Buffering'
        }
      }

    render() {
        if (this.state.track) {
        return (
        
        <View style={styles.playerStyle}>


            <View style={styles.playerViewStyle}>
                <ListItem 
                        Component={TouchableScale}
                        friction={90} //
                        tension={100} // These props are passed to the parent component (here TouchableScale)
                        activeScale={0.95} //
                        leftAvatar={{source: require('../assets/images/icon.png')}}
                        title={music.track}
                        subtitle={music.artist}
                        titleStyle={{color: 'white', fontWeight: 'bold'}}
                        // rightSubtitle={music.runTime}
                        containerStyle={{ backgroundColor: `black`}}
                        subtitleStyle={{color: 'grey'}}
                        rightSubtitleStyle={{color: 'white', paddingTop: 10}}
                    />
            </View>

        </View>
        )} else return null;
    }
}

const styles = StyleSheet.create({
    playerStyle: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'black'
    },
    playerViewStyle: {
        flex: 1,
    },
    playerTextStyle: {
        color: 'white',
    }
})