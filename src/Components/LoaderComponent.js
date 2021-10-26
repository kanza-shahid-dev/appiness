import React from 'react'
import { View, Text, ImageBackground,Image } from 'react-native'
import LottieView from 'lottie-react-native';

const LoaderComponent = () => {
    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{flex:1,justifyContent:'center'}} >
        <View style={{flex:1,justifyContent:'center',alignItems:'center',borderWidth:1}}>
            <Image source={require('../assets/images/appName.jpg')} style={{height:100,width:200}}/>
            <View style={{height:50,width:'100%',alignItems:'center',justifyContent:'center'}}>
          <LottieView 
        source={require("../assets/loading.json")}
         autoPlay
          loop />
          </View>
          <View style={{}}>
       <Text style={{fontSize:20,textAlign:'center',color:'white',fontWeight:'bold'}}>Welcome to your Appiness</Text>
</View>
</View>
</ImageBackground>
    )
}

export default LoaderComponent
