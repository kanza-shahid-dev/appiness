import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../assets/constants/colors';
import AccountOption from '../screens/AccountOption';
import AWARDS from '../screens/AWARDS';
import Home from '../screens/Home';
import MyProgress from '../screens/MyProgress';
import OnMyMind from '../screens/OnMyMind';



const BottomTabNavigation = (props) => {
  //const user=props.route.params.user

  const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator initalRouteName="Home" screenOptions={{headerShown:false,tabBarStyle:{height:65,borderTopWidth:2,paddingTop:2,paddingBottom:5},tabBarLabelStyle:{fontSize:14},tabBarColor:'white',tabBarActiveTintColor:colors.primary,borderTopWidth:20}}  >
        <Tab.Screen name="Home"  component={Home} options={{tabBarIcon:({color})=><Icon name="edit" size={22} color={color}/>}}/>
        <Tab.Screen name="OnMyMind" component={OnMyMind} options={{tabBarIcon:({color})=><Icon name="lightbulb" size={22} color={color}/>}}/>
       
        <Tab.Screen name="MyProgress" component={MyProgress} options={{tabBarIcon:({color})=><Icon name="chart-line" size={22} color={color}/>}}/>
        
        <Tab.Screen name="AWARDS" component={AWARDS} options={{tabBarIcon:({color})=><Icon name="trophy" size={22} color={color}/>}}/>
      </Tab.Navigator>
    )
}

export default BottomTabNavigation
