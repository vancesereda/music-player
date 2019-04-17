
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Modal from 'react-native-modal';
import Checkbox from ''


export default class ModalComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }


    _changeSelection = (selection) => {
        this.props._changeSelection(selection)
        this.setState({isVisible: !this.state.isVisible})
    }

    render(){
        return (
      
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 20, paddingLeft: 5}}>
        <TouchableOpacity onPress={()=>this.setState({isOpen: !this.state.isVisible})}>
            <Text style={{color:"white", fontSize: 16, fontWeight: 'bold'}}>{selection}</Text> 
            
            <Ionicons name={'md-arrow-dropdown'} size={20} style={{color: 'white', paddingLeft: 10}}/>
        </TouchableOpacity>

        <Modal isVisible={this.state.isVisible}>
        <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={()=>this._changeSelection(selection)}>
              <Text>Hide me!</Text> {this.props.whatever(true)}
            </TouchableOpacity>
          </View>




        </Modal>

        </View>
  



        )
      
    }
  
}