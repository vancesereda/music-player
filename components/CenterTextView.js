import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions
} from 'react-native';

export default CenterViewText = ({text, onPress}) => (

    <View style={styles.centerView}>
      <TouchableOpacity onPress={onPress}>
            <Text style={styles.centerText}>
            {text}
            </Text>
      </TouchableOpacity>
    </View>

)
        
const styles = StyleSheet.create({
    centerView: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical: 'center',
      marginLeft: 25,
      marginRight: 25,
      marginBottom: 80,
      flex: 1
    },
    centerText: {
      fontSize: 24,
      color: 'rgba(230,255,255,0.9)'
    }
})