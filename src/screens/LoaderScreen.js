import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{useEffect} from 'react'
import { View, Text,Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux';
import * as ActionTypes from '../store/actionTypes'
//import AnimatedLoader from "react-native-animated-loader";
import LottieView from 'lottie-react-native';
import colors from '../assets/constants/colors';
import LoaderComponent from '../Components/LoaderComponent';
const LoaderScreen = (props) => {
    useEffect(()=>{
        try{
         
        AsyncStorage.getItem('user')
        .then((value)=>
        {   
            console.log(value)
            if(value==null)
            props.navigation.navigate("AccountOption")
            else
            {
                const user=JSON.parse(value)
                props.addUser(user)
               props.navigation.navigate("BottomTabNavigation")
            }
            })
        }
        catch(error)
        {
            console.log(error)
        }
    },[])
    return (
          <LoaderComponent/>
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
export default connect(null,mapDispatchToProps)(LoaderScreen)