import React from 'react'
import { View, Text,ImageBackground } from 'react-native'
import CustomCalendar from '../Components/CustomCalendar'
import Header from '../Components/Header'

const OnMyMind = (props) => {
    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{flex:1}} >
        <Header navigation={props.navigation}/>
        <View style={{width:'100%',flex:1,alignItems:'center',marginTop:50}}>
        <Text style={{fontSize:28,fontWeight:'bold',color:'white'}}>WORDS OF WISDOM</Text>
        
        <Text style={{fontSize:18,color:'white'}}> </Text>

        <CustomCalendar/>
       
        </View>
        </ImageBackground>
    )
}

export default OnMyMind
