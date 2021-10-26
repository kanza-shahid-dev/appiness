import React, { useState,useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustomCalendar = () => {
    const [date,setDate]=useState()
    const [month,setMonth]=useState()
    const [year,setYear]=useState()

    const [entry,setentry]=useState(null)



    useEffect(() => {
       
        var d = new Date();
var month=d.getMonth()+1

setDate(d.getDate())
if(month==1)
setMonth("January")
else if(month==2)
setMonth("February")
else if(month==3)
setMonth("March")
else if(month==4)
setMonth("April")
else if(month==5)
setMonth("May")
else if(month==6)
setMonth("June")
else if(month==7)
setMonth("July")
else if(month==8)
setMonth("August")
else if(month==9)
setMonth("September")
else if(month==10)
setMonth("October")
else if(month==11)
setMonth("November")
else if(month==12)
setMonth("December")




setYear(d.getFullYear())

setentry("HI")

    }, [])

    function Increment()
    {
        if(date==7 &&month=="October" && year==2021)
        {
            console.log("seting")
            setentry("HI")
        }
        setentry(null)
        if(date<30)
        {
        console.log(date)

            setDate(date+1)
        }
        else if(date==28)
        {



        }
        else if(date==30)
        {
            console.log("what")
            if(month=="January")
            setDate(date+1)

            else if (month=="February")
            {
                setDate(1)
                setMonth("March")
            }
            else if(month=="March")
            setDate(date+1)

            else if(month=="April")
            {
                setDate(1)
                setMonth("May")
            }
            else if(month=="May")
            setDate(date+1)

            else if(month=="June")
            {setDate(1)
                setMonth("July")

   }          else if(month=="July")
            setDate(date+1)

            else if(month=="August")
            setDate(date+1)

            else if(month=="September")
            {setDate(1)
                setMonth("October")
 }
            else if(month=="October")
            setDate(date+1)

            else if(month=="November")
            {setDate(1)
                setMonth("December") }

            else if(month=="December")
            {
                setMonth("January")
                setDate(1)
                setYear(year+1)
             }

        }
        else if(date==31)
        {
            console.log("what 2")
            setDate(1)
            if(month=="January")
            setMonth("February")

            else if (month=="February")
            setMonth("March")

            else if(month=="March")
            setMonth("April")

            else if(month=="April")
            setMonth("May")

            else if(month=="May")
            setMonth("June")

            else if(month=="June")
            setMonth("July")

            else if(month=="July")
            setMonth("August")

            else if(month=="August")
            setMonth("September")

            else if(month=="September")
            setMonth("October")

            else if(month=="October")
            setMonth("November")

            else if(month=="November")
            setMonth("December")

            else if(month=="December")
            {
                setMonth("January")
                setDate(1)
                setYear(year+1)
             }
        }

        console.log(date+1);
        
       


    }
    function Decrement()
    {
        setentry(null)
        if(date>1 )
        {
        console.log("dec",date)

            setDate(date-1)
        }
        else if(date==1)
        {
            if(month=="January")
            {
              setMonth("December")
              setDate(31)
            }

            else if (month=="February")
           {
            setMonth("January")
            setDate(31)
           }
            else if(month=="March")
             {
                setMonth("February")
                setDate(28)
            }

            else if(month=="April")
            {
                setMonth("March")
                setDate(31)
            }
            else if(month=="May")
             {
                setMonth("April")
                setDate(30)
             }

            else if(month=="June")
            {
                setMonth("May")
                setDate(31)
            }

             else if(month=="July")
             {
                setMonth("June")
                setDate(30)
             }

            else if(month=="August")
            {
                setMonth("July")
                setDate(31)
            }

            else if(month=="September")
            {
                setMonth("August")
                setDate(31)
            }
            else if(month=="October")
            {
                setMonth("September")
                setDate(30)
            }
            else if(month=="November")
            {setDate(1)
                setMonth("December") }

            else if(month=="December")
            {
                setMonth("January")
                setDate(1)
                setYear(year+1)
             }

        }
       

    }

    return (
        <View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                
                <TouchableOpacity onPress={()=>Decrement()}>
                <Icon name="arrow-back-ios" size={50} color="white"/>
                </TouchableOpacity>

                <Text style={{color:'white',fontSize:20}}>{date +" " +month+" " + year}</Text>
                
                <TouchableOpacity onPress={()=>Increment()}>
                <Icon name="arrow-forward-ios" size={50} color="white"/>
                </TouchableOpacity>

            </View>
            <View style={{marginTop:50}}>
            {entry?
            <View style={{backgroundColor:'white',height:50,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:16}}>{entry}</Text>
            </View>
            :<Text style={{fontSize:20,color:'white'}}>No Entries For This Day</Text>}
            </View>
        </View>
    )
}

export default CustomCalendar
