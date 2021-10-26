import React from 'react'
import { View, Text,ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import SettingItem from '../Components/SettingItem'

const {width,height}=Dimensions.get('window')
const Settings = (props) => {
    console.log(props)
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ImageBackground source={require('../assets/images/background.jpg')} style={{height:height,width:width,alignItems:'center',justifyContent:'center'}} >
            <Text style={{fontSize:27,color:'white',fontWeight:'bold',marginBottom:17}}>SETTINGS</Text>


            <SettingItem title="SET APPI ALARMS" onPress={()=>props.navigation.navigate("ChooseReminder")}/>
            <SettingItem title="ABOUT APPINESS" onPress={()=>props.navigation.navigate("About")}/>
          
            <SettingItem title="EXPERT MODE" onPress={()=>props.navigation.navigate("About")}/>
            <SettingItem title="SIGN OUT" onPress={()=>props.navigation.navigate("AccountOption")}/>

            </ImageBackground>
        </View>
    )
}

export default Settings
