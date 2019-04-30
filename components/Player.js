import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TrackPlayer from 'react-native-track-player'
import {ListItem} from 'react-native-elements';


export default class Player extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            track: true,
        }
    }
    
    componentDidMount() {

       
       

          this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
            // console.warn(data)
            const { title, artist, artwork } = await TrackPlayer.getTrack(data.nextTrack)
            this.setState({title, artist, artwork})
            console.log(artwork)
            // const { track, artist, artwork } = await TrackPlayer.getTrack(data.nextTrack);
            // this.setState({title, artist, artwork });
            
        });
        

    }

    componentWillUnmount() {
        // Removes the event handler
        this.onTrackChange.remove();
    }



    togglePlayback = async () => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack == null) {
          await TrackPlayer.reset();
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
        if (this.state.title) {
        return (
        
        <View style={styles.playerStyle}>


            
                <ListItem 
                        
                        leftAvatar={{source: this.state.artwork ? {uri: this.state.artwork} : require('../assets/images/icon.png')}}
                        title={this.state.title.replace('&#39;',"'") || ''}
                        subtitle={this.state.artist || ''}
                        titleStyle={{color: 'white', fontWeight: 'bold'}}
                        rightSubtitle={<IconSwitch />}
                        containerStyle={{ backgroundColor: `black`}}
                        subtitleStyle={{color: 'grey'}}
                        rightSubtitleStyle={{color: 'white', paddingTop: 10}}
                    />
            

        </View>
        )} else return( <View></View>);
    }
}

const IconSwitch = (props) => (
    
    <View>
    <TouchableOpacity>{
    TrackPlayer.STATE_PLAYING 
    ? 
    <Icon name={'pause'} size={25} style={styles.iconStyle}/> 
    :
    TrackPlayer.STATE_PAUSED 
    ? <Icon name={'play'} size={25} style={styles.iconStyle}/> :
    TrackPlayer.STATE_STOPPED 
    ? <Icon name={'stop'} size={25} style={styles.iconStyle}/> :
    TrackPlayer.STATE_BUFFERING
    ? <Icon name={'play-speed'} size={25} style={styles.iconStyle}/> 
    :
     null
    }
    </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    playerStyle: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'black',
        elevation: 1,
        height: 75,
        width: '100%'
    },
    playerViewStyle: {
        flex: 1,
    },
    playerTextStyle: {
        color: 'white',
    },
    iconStyle: {
        color: 'white'
    }
})