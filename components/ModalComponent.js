import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import Modal from 'react-native-modal';
import { Checkbox } from 'react-native-elements'


export default class ModalComponent extends Component {


    constructor(props) {
        super(props);
    }


    

    

    render(){
        const { selection, isVisible } = this.props;
        return (
        <Modal 
            animationIn={'zoomInUp'}
            animationOut={'zoomOutDown'}
            isVisible={isVisible} 
            style={styles.modalContent} 
            hasBackdrop={true} 
            backdropOpacity={0.5} 
            onBackdropPress={this.props._toggleModal}
        >
            <View style={styles.modalView}>
                <View styles={styles.modalDialog}>
                    <Text style={styles.modalText}>Hello!</Text>
                    <TouchableOpacity onPress={this.props._toggleModal}>
                        <Text style={styles.modalText}>Hide me!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        
  



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
})