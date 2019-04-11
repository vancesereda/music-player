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
                    title={music.track}
                    subtitle={music.artist}
                    titleStyle={{color: Colors.darkTheme.textColor, fontWeight: 'bold'}}
                    rightSubtitle={music.runTime}
                    containerStyle={{ backgroundColor: `${key%2 ? `rgba(12,12,12,1)` : `rgba(10,10,10,1)`}`}}
                    subtitleStyle={{color: 'white'}}
                    rightSubtitleStyle={{color: 'white', paddingTop: 10}}
                />
            </View>
        ))}
    </ScrollView>
)

export default TrackList;
