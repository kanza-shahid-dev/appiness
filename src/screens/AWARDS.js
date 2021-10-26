import React,{useState,useEffect} from 'react'
import { View, Text,ImageBackground, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import Header from '../Components/Header'

const AWARDS = (props) => {
    const[DATA,setDATA]=useState([])


    useEffect(()=>{

        fetch('https://secret-coast-80478.herokuapp.com/user/awards/'+props.user.user.id)
        .then(response=>response.json())
        .then(json=>setDATA(json))
    },[])
    const data=[
        {
            name:'1 week',image:require('../assets/images/award.jpg')
        },
        {
            name:'2 week',image:require('../assets/images/lockedaward.jpg')
        },
        {
            name:'3 week',image:require('../assets/images/lockedaward.jpg')
        },
        {
            name:'4 week',image:require('../assets/images/lockedaward.jpg')
        },
        {
            name:'5 week',image:require('../assets/images/lockedaward.jpg')
        },
        {
            name:'5 week',image:require('../assets/images/lockedaward.jpg')
        },
        {
            name:'5 week',image:require('../assets/images/lockedaward.jpg')
        },
        
    ]
    const data2=[
      
        {
            name:'2 week',image:require('../assets/images/lockedaward.jpg')
        },
        {
            name:'2 week',image:require('../assets/images/lockedaward.jpg')
        },
       
        
    ]
    const data3=[
      
        {
            name:'2 week',image:require('../assets/images/award.jpg')
        },
        
    ]
    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{flex:1}} >
        <Header navigation={props.navigation}/>

<View style={{flex:1,justifyContent:'center'}}>
        <Text style={{fontSize:28,textAlign:'center',fontWeight:'bold',color:'white'}}>APPI AWARDS</Text>


<View>
<FlatList
style={{marginTop:20,margin:20}}
data={DATA}
horizontal={true}
renderItem={({item})=><View style={{borderBottomWidth:1,borderColor:'white',paddingBottom:15}}>
    <Image source={item.image} style={{height:70,width:70}}/>
    <Text style={{color:'white',textAlign:'center'}}>{item.name}</Text>
    </View>}
/>
</View>


<View style={{borderBottomWidth:1,borderColor:'white'}}>
<FlatList
style={{marginTop:20,margin:20}}
data={data2}
horizontal={true}
renderItem={({item})=><View >
    <Image source={item.image} style={{height:70,width:70}}/>
    <Text style={{color:'white',textAlign:'center'}}>{item.name}</Text>
    </View>}
/>
</View>

</View>
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
export default connect(mapStateToProps,mapDispatchToProps)(AWARDS)
