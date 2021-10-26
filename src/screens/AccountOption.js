import React, { useEffect, useState } from 'react'
import { View, Text, Alert, Image,ImageBackground ,TouchableOpacity} from 'react-native'
import { LoginButton, AccessToken, GraphRequestManager, GraphRequest, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin,  GoogleSigninButton,  statusCodes} from '@react-native-google-signin/google-signin';
import ButtonComp from '../Components/ButtonComp'
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
const AccountOption = (props) => {
  const { width } = useWindowDimensions();
  const [userImage,setuserImage]=useState('https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png')
 const[htmlsource,sethtmlsource]=useState(null)
const[popup,setpopup]=useState(false)

  useEffect(()=>{
    GoogleSignin.configure();
    GoogleSignin.configure({
     
      webClientId: '86380306776-rnq2b8mragh9mejqvijbj51jtva37osi.apps.googleusercontent.com',
      // "client_type": 3,
      // Android client 1
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  },[])

  signIn = async () => {
    console.log("In")

    axios.get('https://secret-coast-80478.herokuapp.com/auth/google')
    .then(response=> {
      // handle success
      console.log("*",response.data);
      setpopup(true)
      const dat=response.data
    //sethtmlsource(dat)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(json=>{
      console.log("yayy")
      // always executed
    });
    // fetch('https://secret-coast-80478.herokuapp.com/auth/google')
    // .then(response=>{return response.json()})
    // .then(json=>console.log("---->",json))

    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const userInfo = await GoogleSignin.signIn();
    //  console.log("user",userInfo)

    // //   const currentUser = await GoogleSignin.getCurrentUser();
    // //  console.log(currentUser)
    // } catch (error) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     console.log("user cancelled the login flow")

    //     // user cancelled the login flow
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     console.log("operation is in progress already")

    //     // operation (e.g. sign in) is in progress already
    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     console.log("play services not available or outdated")
        
    //     // play services not available or outdated
    //   } else {
    //     console.log("some other error happened",error)

    //     // 
    //   }
    // }
  }
 
  function getFBUserData()
  {
   
    const PROFILE_REQUEST_PARAMS = {
      fields: {
          string: 'id, name, first_name,gender,birthday,last_name,picture.type(large), email'
      },
     }
  const profileRequest = new GraphRequest('/me', { parameters: PROFILE_REQUEST_PARAMS },
      (error, result) => {
          if (error) {
              console.log('Login Info has an error:', error)
          }
  
          else {
            props.navigation.navigate("Register",{user:result})
                //setuserImage(result.picture.data.url)
                  //console.log(result)
          }
      },
      )
    new GraphRequestManager().addRequest(profileRequest).start()

  }
  

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("==> Login cancelled");
        } 
        else {
          getFBUserData()
        }
       },
       function(error) {
        console.log("==> Login fail with error: " + error);
       }
     ) ;
  }
    return (
      <ImageBackground source={require('../assets/images/background.jpg')} style={{flex:1}} >
    
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
       <Image source={require('../assets/images/appName.jpg')} style={{marginTop:180,height:120,width:250}}/>


<View style={{flex:1,alignItems:'center',justifyContent:'flex-end',marginBottom:90}}>
  <View style={{marginBottom:15}}>
<ButtonComp title="    LOGIN WITH GMAIL   " type="white" onPress={()=>signIn()} /></View>
<ButtonComp title="LOGIN WITH FACEBOOK" onPress={()=>loginWithFacebook()} />
      </View>  
      <View>
        </View>
        </View>
        {popup?<RenderHtml
      contentWidth={width}
      source={htmlsource}
    />:null}
        </ImageBackground>
    )
}

export default AccountOption
