import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Share, TouchableWithoutFeedback } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ModalComponent from './ModalComponent'
import Axios from 'axios';
const icons = ["playlist-plus", "play", "share", "download"];
const text = ["Save", "Stream", "Share", "Download"];

class VideoListItem extends Component {
    

    constructor(props) {
        super(props);
        this.state={
            dropdown: false,
            isVisible: false
        }
    }


    _toggleModal = () => {
        this.setState({isVisible: !this.state.isVisible})
    }


    _handleTouch = (idx) => {
        const { videoId } = this.props.video.id;

        if (idx===0) { //add song to async storage object (local storage)

        } else if (idx===1) { //handle stream
        
        } else if (idx===2) { //handle share

            Share.share({message:`https://www.youtube.com/watch?v=${videoId}`})

        } else if (idx===3) { //handle download modal
            
            console.log(idx)
            // this._toggleModal();
            this.props.getVideoInfo(videoId);
        }

    }


 

    render() {
        const { snippet } = this.props.video;
        const { isVisible, dropdown } = this.state;
        return (
        <View>
            <TouchableOpacity onPress={()=>this.setState({dropdown: !this.state.dropdown})}>
                <ListItem 
                    leftAvatar={{ source: {uri: snippet.thumbnails.medium.url}}}
                    title={snippet.title.replace('&#39;', "'")}
                    titleStyle={{color: 'black'}}
                    subtitle={snippet.channelTitle}
                    containerStyle={styles.containerStyle}
                />
                <DropdownView dropdown={dropdown} _handleTouch={this._handleTouch} />
                <ModalComponent isVisible={isVisible} _toggleModal={this._toggleModal}/>
            </TouchableOpacity>
        </View>
        )
    }

}



const DropdownView = (props) => { 
    
    if (props.dropdown) {
    return ( 
      <View style={styles.dropdownStyle}>
          {icons.map((icon, idx) => (
              <TouchableWithoutFeedback onPress={(e)=>e.preventDefault()} key={idx}>
                  <View style={styles.iconTextView}> 
                      <TouchableOpacity onPress={()=>props._handleTouch(idx)} >
                          <Icon name={icon} size={45} color={'rgba(60,60,60,1)'} />
                      </TouchableOpacity>
                      <Text style={styles.dropdownText}>{text[idx]}</Text>
                  </View>
              </TouchableWithoutFeedback>
          ))}
      </View>
      )
    } else return null;
}




const styles = {
    imageStyle: {
        alignSelf: 'stretch',
        height: 180
    },
    containerStyle: {
        backgroundColor: 'rgba(220,220,220,1)',
        borderRadius: 2,
        borderBottomWidth: 1
    },
    dropdownStyle: {
        flex: 1,
        height: 75, 
        backgroundColor: 'rgba(230,230,230,1)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'stretch',

    },
    iconTextView: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems:'center', 
        flex: 1
    },
    dropdownText: {
        color: 'rgba(100,100,100,1)',
        fontSize: 10,
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        height: 300,
        width: 300,
        backgroundColor: 'rgba(240,240,240,1)',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 5,
        borderColor: 'rgba(100,100,100,1)'
    },
    modalText: {
        fontSize: 30,
        color: 'black',
        margin: 10,
    },
    modalToggle: {
        flex: 1, 
        flexDirection: 'row', 
        marginTop: 15,
        paddingLeft: 5
    },
    selectionText: {
        color: "white",
        fontSize: 18, 
        fontWeight: 'bold'
    },
    icon: {
        paddingRight: 5,
        color: 'white',

    },
    mainText: { 
        color: 'white', 
        fontSize: 20,
        paddingLeft: 25
    }
}


export default VideoListItem