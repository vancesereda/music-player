import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TrackPlayer from 'react-native-track-player'
import {ListItem} from 'react-native-elements';


export default class Player extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            artwork: null,
            title: null,
            artist: null,
            playerState: null
        }
    }
    
    componentDidMount() {
        
        TrackPlayer.setupPlayer().then(async ()=>{
            
            const playerState = await TrackPlayer.getState()===TrackPlayer.STATE_PLAYING;
            this.setState({playerState})
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
                })
            }
        )
        

          this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
            // console.warn(data)
            const { title, artist, artwork } = await TrackPlayer.getTrack(data.nextTrack)
            this.setState({playerState: true})
            console.warn(await TrackPlayer.getState(), TrackPlayer.STATE_PAUSED, TrackPlayer.STATE_STOPPED,TrackPlayer.STATE_NONE,TrackPlayer.STATE_BUFFERING)
            this.setState({title, artist, artwork})
            console.log(artwork)
            // const { track, artist, artwork } = await TrackPlayer.getTrack(data.nextTrack);
            // this.setState({title, artist, artwork });
            
        });

        
        // this.pause = TrackPlayer.addEventListener('remote-pause', () => {
        //     TrackPlayer.pause()
        //     console.log('remote-pause event')
        //   });
        this._onStateChanged = TrackPlayer.addEventListener('playback-state', (data) => {
            this.setState({playerState: data.state})
        })

    
    
        

    }

    componentWillUnmount() {
        // Removes the event handler
        this.onTrackChange.remove();
        this._onStateChanged.remove();
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

    getState = async () => {
        return await TrackPlayer.STATE_PLAYING
    }



    render() {
        console.log(this.state.playerState, this.getState())
        if (this.state.playerState) {
        return (
        
        <View style={styles.playerStyle}>


            
                <ListItem 
                        
                        leftAvatar={{source: this.state.artwork ? {uri: this.state.artwork} : require('../assets/images/icon.png')}}
                        title={this.state.title ? this.state.title.replace('&#39;',"'") : ''}
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