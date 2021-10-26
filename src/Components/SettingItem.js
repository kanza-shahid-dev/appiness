import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

const SettingItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
        <Text style={{fontSize:20,color:'white',fontWeight:'900',marginBottom:8}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default SettingItem
