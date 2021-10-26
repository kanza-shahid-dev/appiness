import React from 'react'
import { View, Text ,ImageBackground} from 'react-native'

const About = () => {
    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{flex:1,alignItems:'center',justifyContent:'center',padding:30}} >

            <Text style={{fontSize:27,fontWeight:'bold',color:'white'}}>ABOUT APPINESS</Text>
            <Text style={{fontSize:20,fontWeight:'600',color:'white',textAlign:'center'}}>APPINESS APP WAS CREATED TO HEP YOU ACHIEVE A CLEARER PERSPECTIVE OF YOUR DAY-TO-DAY LIFE.</Text>
        </ImageBackground>
    )
}

export default About
