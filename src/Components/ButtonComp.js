import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ButtonComp = (props) => {
    function getType()
    {
        if(props.type=="secondary")
        {

            return '#33a2cc'

        }
        else if(props.type=="white")
        {
            return 'white'
        }
        else
        {
            return '#3DBFE3'

        }

    }
    function getTextColor()
    {
        if(props.type=="secondary")
        {

            return 'white'

        }
        else if(props.type=="white")
        {
            return '#33a2cc'
        }
        else
        {
            return 'white'

        }
    }
    return (
        <TouchableOpacity onPress={props.onPress}>
        <View style={{borderRadius:30,alignSelf:'baseline',margin:5,paddingLeft:40,paddingRight:40,paddingTop:13,paddingBottom:13,backgroundColor:getType(),alignItems:'center'}}>
            <Text style={{fontWeight:'bold',color:getTextColor()}}>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default ButtonComp
