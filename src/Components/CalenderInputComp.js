import React,{useState} from 'react'
import { View, Text, TouchableOpacity,TextInput } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CalenderInputComp = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(props.value);
    
    function handleDate(date)
    {
        setDatePickerVisibility(false)
        var selected=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
        setDate(selected.toString());
        props.onChangeText(selected)
    }

    return (
        <View>
        <Text style={{}}>{props.placeholder}</Text>
        <TouchableOpacity onPress={()=>{setDatePickerVisibility(true)}}>
        <TextInput value={date} editable={false} placeholder={props.placeholder} style={{backgroundColor:'white',marginBottom:10,borderWidth:1,paddingLeft:18,fontSize:17,borderColor:'#59d7f6',borderRadius:17,color:'black'}}/>
        </TouchableOpacity>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        onConfirm={(date)=>handleDate(date)}
        onCancel={()=>setDatePickerVisibility(false)}
      />
      </View>
    )
}

export default CalenderInputComp
