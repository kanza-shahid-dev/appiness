import React from 'react'
import { View, Text, ImageBackground, Dimensions } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../assets/constants/colors';

const {width,height}=Dimensions.get('window')
const IntroSlider = (props) => {
    const slides = [
        {
          key: 1,
          title: 'WELCOME TO APPINESS',
          text: 'APPINESS APP WAS CREATED TO HELP YOU ACHIEVE A CLEARER PERSPECTIVE OF YORSELF.',
        image: require('../assets/images/background.jpg'),
          backgroundColor: '#59b2ab',
        },
        {
          key: 2,
          title: '',
          text: 'EVERYDAY APPINESS APP WILL SEND YOU 2 REMINDERS ASKING YOU TO PICK YOUR APPI TYPE AND WRITE ABOUT YOUR APPI STATE OF MIND.',
        image: require('../assets/images/background.jpg'),
          backgroundColor: '#febe29',
        },
        {
          key: 3,
          title: '',
          text: 'ONCE APPINESS WILL GET TO KNOW YOU,YOU WILL BE ABLE TO VIEW YOUR DAY-TO-DAY ANALYSED \n WANT TO ADD SOMETHING ELSE? FEEL FREE TO WRITE ANYTHING THATS ON YOUR MIND.',
        image: require('../assets/images/background.jpg'),
          backgroundColor: '#22bcb5',
        },
        {
            key: 4,
            title: '',
            text: 'WANT TO SEE WHAT YOUR THOUGHTS WERE ON SPECIAL DAY? \n GO TO THE "ON MY MIND" SECTION, CHOOSE A DATE AND SEE WHAT YOUR THOUGHTS WERE.',
           image: require('../assets/images/background.jpg'),
            backgroundColor: '#22bcb5',
          },
          {
            key: 5,
            title: '',
            text: 'A NOTE FROM THE CREATORS: FOR APPINESS TO PROVIDE YOU WITH THE BEST ANALYSIS,BE COMMITTED TO YOUR DAY-TO-DAY APPI UPDATES.',
           image: require('../assets/images/background.jpg'),
            backgroundColor: '#22bcb5',
          },
          {
            key: 6,
            title: '',
            text: 'IT IS HERE NOTE FROM THE CREATORS: FOR APPINESS TO PROVIDE YOU WITH THE BEST ANALYSIS,BE COMMITTED TO YOUR DAY-TO-DAY APPI UPDATES.',
           image: require('../assets/images/background.jpg'),
            backgroundColor: '#22bcb5',
          },
      ];

    return (
       <AppIntroSlider
       data={slides}
       renderNextButton={()=>{return <Icon name="arrow-forward-ios" size={30} color="black"/>}}
       renderPrevButton={()=>{return <Icon name="arrow-forward-ios" size={30} color="black"/>}}
       renderDoneButton={ ()=>{return <View style={{backgroundColor:'#3DBFE3',padding:10}}><Text>Done</Text></View>}}
       onDone={()=>props.navigation.navigate("BottomTabNavigation")}
       renderItem={({item})=>
        {return <View style={{flex:1}}>
               <ImageBackground source={item.image} style={{height:height,width:width}}>
                <View style={{flex:1,paddingLeft:15,paddingRight:15,borderWidth:1,justifyContent:'center'}}>
                <Text style={{fontSize:40,fontWeight:'bold',color:'white'}}>{item.title}</Text>
                <Text style={{fontSize:20,color:'white'}}>{item.text}</Text>
                </View>
                </ImageBackground>

                </View>}}
       />
    )
}

export default IntroSlider
