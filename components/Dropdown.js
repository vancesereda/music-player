import React, {Component} from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


class Dropdown extends Component {
  state = {
    dropdownOpen: true,
  };

  setVisible = () => {
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  }

  render() {
    
    return (
        <View>
            <TouchableOpacity onPress={()=>console.log('WORK')}>
                <View>
                <Ionicons  
                name="md-funnel" 
                size={20} 
                color="white" 
                style={{marginLeft: 10}}
            />
            </View>
            </TouchableOpacity>

        {/* {this.state.dropdownOpen ? 
            //     <View 
            //     style={styles.optionsView}>
            //     <Text style={styles.titleText} >{this.props.title}</Text>
            //     <View style={{backgroundColor: "black"}} onPress={this.dropDownOpen}>
                
            //         {this.props.selectableOptionsText.map((option,index) => (
                        
            //                 <Button key={index} title={option} style={styles.text} onPress={this.setVisible}/>
                        
            //         ))}

            //     </View>
            //     </View>:
            // null
           ''
            : null



        } */}
        </View>


    )
  }
}

const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: "black"
    },
    mapView: {
        flexDirection: 'column'
    },
    text: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        color: "white",
        fontSize: 25
    },
    checkbox: {
        justifyContent: "flex-end"
    },
    optionsView: {
        // top: 25, 
        // left: 5,
        // width: 200,
        // height: 200, 
        width: 200,
        height: 200,
        marginTop: 250,
        color: 'white',
        backgroundColor: 'black'
        
    },
    titleText: {
        color: 'white',
        fontSize: 25
    }
})

export default Dropdown;