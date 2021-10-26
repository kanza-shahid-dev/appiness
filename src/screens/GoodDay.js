import React from 'react'
import { View, Text, ImageBackground,Image } from 'react-native'
import colors from '../assets/constants/colors'
import ButtonComp from '../Components/ButtonComp'

const GoodDay = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:colors.primary}}>
            <Text style={{color:'white',marginTop:'20%',fontWeight:'bold',fontSize:30,textAlign:'center'}}> GOOD DAY {'\n'} MATE</Text>
            </View>
            <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'flex-end',marginBottom:20}}>
            <ButtonComp title="SHOW MY PROGRESS" type="secondary" onPress={()=>props.navigation.navigate("MyProgress")}/>

            <ButtonComp title="TAKE ME HOME" onPress={()=>props.navigation.navigate("BottomTabNavigation")}/>
            </View>
        </View>
    )
}

export default GoodDay
