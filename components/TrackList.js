import React, { Component } from 'react';
import { ScrollView, View} from 'react-native';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'
import Colors from '../constants/Colors';




const TrackList = ({music}) => (
    <ScrollView>
        {music.map((music, key) => (
            <View key={key}>
                <ListItem 
                    Component={TouchableScale}
                    friction={90} //
                    tension={100} // These props are passed to the parent component (here TouchableScale)
                    activeScale={0.95} //
                    leftAvatar={{source: require('../assets/images/icon.png')}}
                    title={music.title}
                    subtitle={music.artist}
                    titleStyle={{color: 'white', fontWeight: 'bold'}}
                    rightSubtitle={music.runTime || '2:30'}
                    containerStyle={{ backgroundColor: `${key%2 ? `rgba(45,45,45,1)` : `rgba(40,40,40,1)`}`}}
                    subtitleStyle={{color: 'grey'}}
                    rightSubtitleStyle={{color: 'white', paddingTop: 10}}
                />
            </View>
        ))}
    </ScrollView>
)

export default TrackList;
