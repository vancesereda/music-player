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
            playerState: 1,
            data: null,
            TrackPlayerStates: {}
        }
    }
    
    componentDidMount() {
        
        TrackPlayer.setupPlayer().then(async ()=>{
            
            const TrackPlayerStates = {};
            for (let [key, value] of Object.entries(TrackPlayer)) {
                if (key.match(/STATE/)) {
                    Object.assign(TrackPlayerStates, {[key]: value})

                }
            }
            this.setState({TrackPlayerStates})
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
            
            })
        
        

        this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
            const { title, artist, artwork } = await TrackPlayer.getTrack(data.nextTrack)
            this.setState({title, artist, artwork})
            
        });

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



    render() {
        const { TrackPlayerStates: { STATE_BUFFERING, STATE_PAUSED, STATE_PLAYING },
                playerState, artwork, title, artist, TrackPlayerStates} = this.state;

        if (playerState === STATE_PLAYING || 
            playerState === STATE_BUFFERING ||
            playerState === STATE_PAUSED) {
        return (
        
        <View style={styles.playerStyle}>
            <ListItem 
                leftAvatar={{source: artwork ? {uri: artwork} : require('../assets/images/icon.png')}}
                title={title ? title.replace('&#39;',"'") : ''}
                subtitle={artist || ''}
                titleStyle={{color: 'white', fontWeight: 'bold'}}
                rightSubtitle={<IconSwitch state={playerState} TrackPlayerStates={TrackPlayerStates} />}
                containerStyle={{ backgroundColor: `black`}}
                subtitleStyle={{color: 'grey'}}
                rightSubtitleStyle={{color: 'white', paddingTop: 10}}
            />
        </View>
        )} else return( <View></View>);
    }
}

const IconSwitch = ({state, TrackPlayerStates}) => (
    
    <View>
    <TouchableOpacity>{
        state === TrackPlayerStates.STATE_PLAYING || state === TrackPlayerStates.STATE_BUFFERING
        ? 
        <Icon name={'pause'} size={25} style={styles.iconStyle} onPress={()=>TrackPlayer.pause()}/>
        :
        <Icon name={'play'} size={25} style={styles.iconStyle} onPress={()=>TrackPlayer.play()}/>
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