import React,{useState,useEffect} from 'react'
import { View, Text,Image, ImageBackground, Dimensions, TouchableOpacity, Modal, Button, Alert } from 'react-native'
import Textarea from 'react-native-textarea';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../assets/constants/colors';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import * as ActionTypes from '../store/actionTypes'

const {width,height}=Dimensions.get('window')
const Home = (props) => {
    const[user,setUser]=useState(props.user.user)
    const[value,setValue]=useState()
    const[modalVisibility,setmodalVisibility]=useState(false)
    const [lengthError,setLengthError]=useState(null)
    const [ImageSource,setImageSource]=useState(require('../assets/images/neutral.jpg'))
  
    useEffect(() => {
        console.log("$",props.user.user)
      // const data=JSON.parse(props.user)
       setUser(props.user.user)
        //console.log(props.user.user)
    }, [])
    function validateLength(value)
    {
        setValue(value)
        if(value.length==120)
        setLengthError("Cannot exceed ")
        else
        setLengthError(null)

    }
    function ChangeLevel(value)
    {
        if(value>50)
        setImageSource(require('../assets/images/happy.jpg'))
        else
        setImageSource(require('../assets/images/neutral.jpg'))
        
    }

    function DoneButton()
    {
        if(value!=undefined)
        { 
               if(value.length!=0)
                 {
                     var token=props.user.user.token
                     fetch('https://secret-coast-80478.herokuapp.com/user/newPost/'+props.user.user.id,{
                         method:'POST',
                         headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json',
                            'Authorization':'Bearer '+token
                         }
                     })
                     .then(response=>response.json())


                     props.navigation.navigate("GoodDay")}
                else
                 Alert.alert("Empty Error","Should not be empty")
        }
        else
        Alert.alert("Empty Error","Should not be empty")
    }

    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{flex:1}} >
        <Header navigation={props.navigation}/>
<View style={{width:'100%',flex:1,alignItems:'center',justifyContent:'center'}}>
        <Image source={{uri:user.picture.data.url}} style={{height:80,width:80,borderRadius:50,borderColor:'white',borderWidth:1}}/>
        <Text style={{fontSize:16,color:'white',marginTop:10}}>Hello {user.first_name}</Text>
        
        <Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>WHAT`S NEW </Text>
        <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>YOUR APPI BAR IS SET</Text>

    <Image source={ImageSource} style={{height:50,width:50}}/> 
        <Slider
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={100}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  onValueChange={(value)=>ChangeLevel(value)}
/>

<View style={{width:'70%',marginTop:10}}>
    <TouchableOpacity onPress={()=>setmodalVisibility(true)}>
        <Textarea
    maxLength={120}
    value={value}
    editable={false}
    placeholder={'WHATS ON YOUR MIND'}
    placeholderTextColor='grey'
    underlineColorAndroid={'transparent'}
    onChangeText={(value)=>validateLength(value)}
    containerStyle={{   
        height: 150,
        padding: 5,
        borderRadius:20,
        backgroundColor: '#FFFFFF',}}
  />
  {lengthError?<Text style={{color:'red'}}>{lengthError}</Text>:null}
  </TouchableOpacity>
</View>
</View>
<Modal
visible={modalVisibility}

transparent={true}>
<View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center'}}>
    <View style={{   
        padding: 5,
        width:width-20,
        marginLeft:10,
        marginRight:10,
        borderRadius:25,
        backgroundColor: '#FFFFFF',}}>
<Textarea
    maxLength={120}
    value={value}
    placeholder={'WHATS ON YOUR MIND'}
    placeholderTextColor='black'
    underlineColorAndroid={'transparent'}
    onChangeText={(value)=>validateLength(value)}
  />
  <TouchableOpacity onPress={()=>setmodalVisibility(false)}>
      <Text style={{justifyContent:'flex-end',textAlign:'center',marginBottom:10,fontWeight:'700'}} >OK</Text>
      </TouchableOpacity>
      </View>
</View>
</Modal>
<TouchableOpacity style={{alignItems:'center',marginBottom:20}} onPress={()=>DoneButton()}>
<Icon name="checkcircle" size={45} color={colors.primary}/>
</TouchableOpacity>
            </ImageBackground>
    )
}

const mapStateToProps=(state)=>({user:state.user});
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
export default connect(mapStateToProps,mapDispatchToProps)(Home)
