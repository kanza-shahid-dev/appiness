import React, { useState } from 'react'
import { View, Text,ImageBackground } from 'react-native'
import ButtonComp from '../Components/ButtonComp'
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import * as ActionTypes from '../store/actionTypes'
const SetAlarms = (props) => {
  const [visible,setVisible]=useState(true)
  var ForTime=props.route.params.Time
  const [time,setTime]=useState()
  console.log(ForTime)
  
  const selectDate =async (date)=>
  {
    //hideDatePicker();
    setVisible(false)
    var dateTime=date.nativeEvent.timestamp
    var time=dateTime.getHours()+":"+dateTime.getMinutes()
    setTime(time)

    if(ForTime=="NightReminder")
    props.addNightReminder(time)
    else
    props.addMorningReminder(time)

    console.log(ForTime)
    try{
      await AsyncStorage.setItem(ForTime,time)  
    }
    catch(error)
    {
     console.log("error",error)
    }

  }
    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{flex:1,padding:20,alignItems:'center',justifyContent:'center'}} >

<View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:20,color:'white',fontWeight:'bold',marginBottom:10,textAlign:'center'}}>APPI TO GO</Text>
          <Text style={{fontSize:20,color:'white',fontWeight:'bold',marginBottom:10,textAlign:'center'}}>SET YOUR START OF THE DAY REMINDER</Text>
<Text>{time}</Text>

</View>
        {visible?
          <DateTimePicker
        mode="time"
        display="clock"
        style={{flex: 1}}
        
        value={new Date()}
          is24Hour={true}
          onChange={(date)=>selectDate(date)}
         
        />:
        null
        }
        <View style={{flex:1,justifyContent:'flex-end'}}>
        <ButtonComp title="I`M ALL SET" onPress={()=>
          { props.navigation.navigate("ChooseReminder")}}/>
        </View>
        

        </ImageBackground>
    )
}
const mapStateToProps=(state)=>({MorningReminder:state.MorningReminder});
const mapDispatchToProps=(dispatch)=>({
    addMorningReminder:(MorningReminder)=>
    {
    dispatch({
        type:ActionTypes.Add_Morning_Reminder,
        payload:{
          MorningReminder
        },
    })  
   },
   addNightReminder:(NightReminder)=>
   {
   dispatch({
       type:ActionTypes.Add_Night_Reminder,
       payload:{
        NightReminder
       },
   })  
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(SetAlarms)
