import React from 'react'
import { View, Text, Image,ImageBackground, Dimensions } from 'react-native'
import Header from '../Components/Header'

const {width,height}=Dimensions.get('window')

const MyProgress = (props) => {
    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{flex:1}} >
        <Header navigation={props.navigation}/>
<View style={{width:'100%',flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/images/progress.jpg')} style={{height:height/4,width:width/2}}/>
            <Text style={{color:'white',fontSize:17}}>COME BACK IN 6 DAYS TO FIND OUT MORE</Text>
        </View>
        </ImageBackground>
    
    )
}

export default MyProgress
