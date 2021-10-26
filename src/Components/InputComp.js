import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'



const InputComp = (props) => {
    return (
        <View>
        <Text style={{}}>{props.placeholder}</Text>
        <TextInput value={props.value} placeholder={props.placeholder} onChangeText={props.onChangeText} style={{backgroundColor:'white',marginBottom:10,borderWidth:1,paddingLeft:18,fontSize:17,borderColor:'#59d7f6',borderRadius:17,color:'black'}}/>
        {props.error?<Text style={{color:'red',fontWeight:'700',marginBottom:10}}>{props.error}</Text>:null}
        
        </View>
    )
}

export default InputComp
