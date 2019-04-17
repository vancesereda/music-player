import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Modal from 'react-native-modal';
import { Checkbox } from 'react-native-elements'


export default class ModalComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }


    _toggleModal = () => {

        this.setState({isVisible: !this.state.isVisible})
    }
    _changeSelection = (selection) => {
        this.props._changeSelection(selection)
        this._toggleModal();
    }

    render(){
        const { selection } = this.props;
        return (
        <View>
        <View >
        <TouchableOpacity onPress={this._toggleModal} style={{flex: 1, flexDirection: 'row', paddingTop: 20, paddingLeft: 5}}>

            <Text style={{color:"white", fontSize: 18, fontWeight: 'bold'}}>{selection}</Text> 
            
            <Ionicons name={'md-arrow-dropdown'} size={20} style={{color: 'white', paddingLeft: 10}}/>
        </TouchableOpacity>
        </View>

        <Modal isVisible={this.state.isVisible} style={styles.modalContent} hasBackdrop={true} backdropOpacity={0.4} onBackdropPress={this._toggleModal}>
        <View style={styles.modalView}>
            <View styles={styles.modalDialog}>
                <Text style={styles.modalText}>Hello!</Text>
                <TouchableOpacity onPress={this._toggleModal}>
                <Text style={styles.modalText}>Hide me!</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
        </View>

        
  



        )
      
    }
  
}


const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        height: 300,
        width: 300,
        backgroundColor: 'rgba(200,200,200,1)',
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
    modalDialog: {

    }
})