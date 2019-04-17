import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
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
            <TouchableOpacity onPress={this._toggleModal} style={styles.modalToggle}>
                {/* <Text style={styles.selectionText}>{selection}</Text>  */}
                <MaterialIcons name={'filter-list'} size={22} style={styles.icon}/>
            </TouchableOpacity>
            {/* <Text style={styles.mainText}></Text> */}
        </View>

        <Modal 
            animationIn={'zoomInUp'}
            animationOut={'zoomOutDown'}
            isVisible={this.state.isVisible} 
            style={styles.modalContent} 
            hasBackdrop={true} 
            backdropOpacity={0} 
            onBackdropPress={this._toggleModal}
        >
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
        height: 200,
        width: 200,
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