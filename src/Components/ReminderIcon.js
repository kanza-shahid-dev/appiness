import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ReminderIcon = (props) => {
    return (
        <View style={{backgroundColor:'white',borderRadius:10,padding:10,margin:10}}>
            <Icon name={props.icon} color={props.color} size={50}/>
        </View>
      
    )
}

export default ReminderIcon
