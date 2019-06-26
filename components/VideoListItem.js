import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Share, TouchableWithoutFeedback, AsyncStorage, PermissionsAndroid } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ModalComponent from './ModalComponent'
import Axios from 'axios';
import TrackPlayer from 'react-native-track-player';
import axios from 'axios';
import RNBackgroundDownloader from 'react-native-background-downloader';



const icons = ["playlist-plus", "play", "share", "download"];
const text = ["Save", "Stream", "Share", "Download"];

class VideoListItem extends Component {
    

    constructor(props) {
        super(props);
        this.state={
            dropdown: false,
            isVisible: false,
            music: []

        }
    }

    componentDidMount() {
        TrackPlayer.setupPlayer();
        this._retrieveData('music');

    }


    _toggleModal = () => {
        this.setState({isVisible: !this.state.isVisible})
    }


    _retrieveData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key).then(async obj=> {
            if (!this.state.hasOwnProperty(key)) {
                this.setState({[key]: JSON.parse(obj)})
            } 
          })
          .catch(e=>console.log(e));
          
        } 
        catch (error) {
          console.warn('Error retrieving async data.')
        }
    

    }

    _storeData = async (key, dataObject) => {
        
        
        //check to see if AsyncStorage has this key ('music' in this case, but I'd like it to be generalized)
        // console.log(this.state[key], dataObject, 'this.state.key')
        if (!this.state[key].length) {
            var data = [];
            data.push(dataObject);
            console.log(data)
            // console.log(data, dataObject)
            console.log('data', data)
            await AsyncStorage.setItem(key, JSON.stringify(data)).catch(e=>console.warn(e))
            this.setState({[key]: data})
            
        } else {
            //get state object relating to key so we can append to it

            var stateObject = this.state[key];
            for (let i = 0; i < stateObject.length; i++) {
                if (stateObject[i].title === dataObject.title) {
                    return;
                }
            }
            stateObject.push(dataObject);


            await AsyncStorage.setItem(key, JSON.stringify(stateObject))
            this.setState({[key]:stateObject})
        }
    }

    _testDownload = async () => {
        // const getTrack = await AsyncStorage.getItem('current-play').then((data)=> {
        //     // this.setState({track: JSON.parse(track)});
        //     const track = JSON.parse(data);
        //     this.setState({track})

        // })
        // const { track: {url, title}} = this.state;
        // console.log(url)
        // const filename = `${title.replace(/\s/g, '-')}.mp4`;
        // console.log(filename)


        try {

            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Title',
                message: 'Write your files',
            }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const trackId = await TrackPlayer.getCurrentTrack();
                const { title, url } = await TrackPlayer.getTrack(trackId);
                const filename = `${title.replace(/\s/g, '-')}.mp4`;
                let task = RNBackgroundDownloader.download({
                    id: title,
                    url: url,
                    destination: `${RNBackgroundDownloader.directories.documents}/${filename}`
                }).begin((expectedBytes) => {
                    console.log(`Going to download ${expectedBytes} bytes!`);
                }).progress((percent) => {
                    console.log(`Downloaded: ${percent * 100}%`);
                }).done(() => {
                    console.log('Download is done!');
                }).error((error) => {
                    console.log('Download canceled due to error: ', error);
                });
                
            }
        } catch (e) {
          console.error(e)
        }
      }

    _getVideoInfo = async (id, title, channelTitle, imgUrl, idx) => {
    
        const response = await axios.get(`https://youtube-video-info.herokuapp.com/api`, {
          params: { id }
        })
        .then(res=>{
          
          const { url } = res.data.filter(obj=>obj.itag==='140')[0];
          title = title.replace(/\&#39;/g, "'").replace(/\&quot;/g, '"');
          const track = {
            id,
            title,
            url,
            artist: channelTitle,
            artwork: imgUrl
          }
    
          AsyncStorage.setItem('current-play', JSON.stringify(track))
          this._storeData("music", track)
          this.setState({track})
          TrackPlayer.add(track).then(()=>TrackPlayer.play())
    
        }).catch(e=>console.log(e))
        
    }



    _handleTouch = async (idx) => {
        const { id: {videoId}, snippet } = this.props.video;
        const title = snippet.title.replace(('&#39;', "'"))
        if (idx===0) { //add song to async storage object (local storage)

        } else if (idx===1) { //handle stream
        
            this._getVideoInfo(videoId, title, snippet.channelTitle, snippet.thumbnails.medium.url)

        } else if (idx===2) { //handle share

            Share.share({message:`https://www.youtube.com/watch?v=${videoId}`})

        } else if (idx===3) { //handle download modal
            
            console.log(idx)
            // this._toggleModal();
            this._getVideoInfo(videoId, title, snippet.channelTitle, snippet.thumbnails.medium.url).then(()=>this._testDownload());
        }

    }


 

    render() {
        const { snippet, snippet: {thumbnails: {medium: {url}}} } = this.props.video;
        const { isVisible, dropdown } = this.state;
        AsyncStorage.getItem("music").then((obj)=>console.log(obj, this.state.music));
        return (
        <View>
            <TouchableOpacity onPress={()=>this.setState({dropdown: !this.state.dropdown})}>
                <ListItem 
                    leftAvatar={{ source: {uri: url}}}
                    title={snippet.title.replace(/\&#39;/g, "'")}
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