import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = (props) => {
    return (
        <TouchableOpacity onPress={()=>props.navigation.navigate("Settings")}>
            <View style={{padding:10,marginTop:10,width:'100%',alignItems:'flex-start',justifyContent:'flex-end'}}>
            <Icon name="ios-settings-sharp" size={32} color="white"/>
            </View>
        </TouchableOpacity>
    )
}

export default Header
