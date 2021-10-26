import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Register from '../screens/Register'
import IntroSlider from '../screens/IntroSlider'
import Home from '../screens/Home'
import BottomTabNavigation from './BottomTabNavigation'
import Settings from '../screens/Settings'
import About from '../screens/About'
import SetAlarms from '../screens/SetAlarms'
import ChooseReminder from '../screens/ChooseReminder'
import GoodDay from '../screens/GoodDay'
import AccountOption from '../screens/AccountOption'
import LoaderScreen from '../screens/LoaderScreen'

const StackNavigation = () => {
    const navigation=createStackNavigator()
    return (
        <navigation.Navigator initialRouteName="LoaderScreen" screenOptions={{headerShown:false}}>
            <navigation.Screen name="LoaderScreen" component={LoaderScreen}/>
            <navigation.Screen name="Register" component={Register}    />
            <navigation.Screen name="IntroSlider" component={IntroSlider}    />
            <navigation.Screen name="Home" component={Home}    />
            <navigation.Screen name="BottomTabNavigation" component={BottomTabNavigation}    />
            <navigation.Screen name="Settings" component={Settings}    />
            <navigation.Screen name="SetAlarms" component={SetAlarms}    />
            <navigation.Screen name="ChooseReminder" component={ChooseReminder}    />
            <navigation.Screen name="GoodDay" component={GoodDay}    />
            <navigation.Screen name="AccountOption" component={AccountOption}    />
            <navigation.Screen name="About" component={About}    />
           
                
        </navigation.Navigator>
    )
}

export default StackNavigation
