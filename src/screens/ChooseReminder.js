import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{useState,useEffect} from 'react'
import { View, Text,ImageBackground, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ReminderIcon from '../Components/ReminderIcon'
import * as ActionTypes from '../store/actionTypes'

const ChooseReminder = (props) => {
  const [morningTime,setmorningTime]=useState()
  const [NightTime,setNightTime]=useState()
useEffect(()=>{
  fetchTime();
  const willFocusSubscription = props.navigation.addListener('focus', () => {
      fetchTime();
  });
  return willFocusSubscription;
},[])
function fetchTime()
{
console.log("*********")

      //get Morning TIme
      try{
        AsyncStorage.getItem('MorningReminder')
       .then(value=> {console.log("val",value)
                       setmorningTime(value)
                       console.log(value)
                      props.addMorningReminder(value)    } )
  
       }
       catch(error)
       {
  
       }
  
       //get Night TIme
      try{
        AsyncStorage.getItem('NightReminder')
       .then(value=> {console.log("val",value)
                      setNightTime(value)
                       console.log(value)
                      props.addNightReminder(value)    } )
  
       }
       catch(error)
       {
  
       }
}
  //   useEffect(()=>{
  //   console.log("screen")
  //   console.log("*",props.MorningReminder)



  // },[])
  // console.log(props)
    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{flex:1,alignItems:'center',justifyContent:'center'}} >

          <Text style={{fontSize:20,color:'white',fontWeight:'bold',marginBottom:10,textAlign:'center'}}>SET YOUR APPI {'\n'}REMINDERS</Text>

          <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("SetAlarms",{Time:"MorningReminder"})}>

          <ReminderIcon icon="white-balance-sunny" color="orange"/>
          <Text style={{color:'white',fontSize:17,fontWeight:'bold',textAlign:'center'}}>{morningTime}</Text>
       
          </TouchableOpacity>
     
        <TouchableOpacity onPress={()=>props.navigation.navigate("SetAlarms",{Time:"NightReminder"})}>
          
          <ReminderIcon icon="moon-waning-crescent" color="blue"/>
          <Text style={{color:'white',fontSize:17,fontWeight:'bold',textAlign:'center'}}>{NightTime}</Text>

          </TouchableOpacity>
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
export default connect(mapStateToProps,mapDispatchToProps)(ChooseReminder)
