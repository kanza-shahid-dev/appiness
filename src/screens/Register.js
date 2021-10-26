import React,{useState,useEffect} from 'react'
import { View, Text, Image, ScrollView, Alert } from 'react-native'
import ButtonComp from '../Components/ButtonComp'
import InputComp from '../Components/InputComp'
import {RadioButton} from 'react-native-paper'
import CalenderInputComp from '../Components/CalenderInputComp'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux';
import * as ActionTypes from '../store/actionTypes'

const Register = (props) => {
    const user=props.route.params.user

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [date,setDate]=useState()

    const [gender, setgender] = useState('male');

    const[nameError,setnameError]=useState(false)
    const[emailError,setemailError]=useState(false)
    const[dateError,setDateError]=useState(false)

    useEffect(()=>{
       // console.log("&",user)
        setName(user.name)
        setEmail(user.email)

    },[])


    function validateName(value)
    {
        if(value.length==0)
        {
            setnameError("Name Required")
        }
        else
        {
            setnameError(null)

        }
    }
    function validateEmail(value)
    {
        if(value.length==0)
        {
            setemailError("Email required")

        }
        else if(!(value.includes("@") && value.includes("!")))
        {
            setemailError("Invalid Email")
        }
        else
        {
            setemailError(null)
            
        }
    }
    function validateDate(value)
    {
        setDate(value)
        if(value.length==0)
        {
            setDateError("Date Required")
        }
        else
        {
            setDateError(null)
        }
    }
     
    function ValidateForm ()
    {
        if(name!=undefined && date!=undefined && email!=undefined)
        StoreUserinAsyn()
        else
        Alert.alert("Invalid","Form is invalid, Enter required fields")
    }
    async function StoreUserinAsyn(){
        console.log(user)
        props.addUser(user)
        try{
            const user=JSON.stringify(user)
            await AsyncStorage.setItem('user',user)
            .then(
                props.navigation.navigate("IntroSlider")
            )
         }
        catch(error)
        {

        }
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{}}>
                <Image source={require('../assets/images/cover.jpg')} style={{width:'100%',height:200}}/>
            </View>
        <View style={{flex:1,paddingLeft:60,paddingRight:60}}>
                  <RadioButton.Group
                    value={gender}
                    onValueChange={value => {setgender(value)}} >
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:20,marginTop:15}}>
                   <RadioButton.Item position='leading' label="MALE" value="male" />
                   <RadioButton.Item position='leading' label="FEMALE" value="female"  />
                   </View>
                </RadioButton.Group>

            <InputComp value={name} placeholder="Full Name" error={nameError} onChangeText={(value)=>validateName(value)}/>
            <InputComp value={email} placeholder="Email" error={emailError} onChangeText={(value)=>validateEmail(value)}/>
            <CalenderInputComp value={date} placeholder="Birthday" error={dateError} onChangeText={(value)=>validateDate(value)}/>

          
        </View>
        <View style={{alignSelf:'center',flex:1,marginBottom:25,justifyContent:'flex-end'}}>
                <ButtonComp title="OK, I`M GOOD" onPress={()=>ValidateForm()}/>
            </View>
        </View>
        </ScrollView>
    )
}


const mapDispatchToProps=(dispatch)=>({
    addUser:(user)=>
    {
    dispatch({
        type:ActionTypes.Add_USER,
        payload:{
          user
        },
    })  
   }
});
export default connect(null,mapDispatchToProps)(Register)
