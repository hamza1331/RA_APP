import React from 'react'
import {StyleSheet,Platform,Dimensions,View,Text,TouchableOpacity,FlatList} from'react-native'

import {createAppContainer,createStackNavigator,createSwitchNavigator,createDrawerNavigator} from 'react-navigation'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

import MyProfile from '../ridaappcomponent/details'
import Login from '../ridaappcomponent/login'
import Register from '../ridaappcomponent/register'
import WebViewComp from '../ridaappcomponent/webview'
import splashScreen from '../ridaappcomponent/splashscreen'
import List from '../ridaappcomponent/list'
import MyPprofile from '../ridaappcomponent/myProfile'
import Edit from '../ridaappcomponent/editForm'

const homeStack =createStackNavigator({
  
     List:{
        screen:List
      },
      WebViewComp:{
        screen:WebViewComp
      },
      MyProfile:{
        screen:MyProfile
      },
      MyPprofile:{
        screen:MyPprofile
      },
      Edit:{
        screen:Edit
      }

},{initialRouteName:'List',headerMode:'none'})
const LoginStack=createStackNavigator({
  
  Login:{
     screen:Login
   },
   Splash:{
     screen:splashScreen
   },
   Register:{
     screen:Register
   },
 

},{initialRouteName:'Splash',headerMode:'none'})
const root=createSwitchNavigator({
  LoginStack,
  homeStack
})
export default createAppContainer(root)

// import React from 'react'
// import {createAppContainer,createStackNavigator,createSwitchNavigator,createDrawerNavigator} from 'react-navigation'
// import Appoint from '../components/Appointment'
// import Profile from '../components/Profile'
// import book1 from '../components/booking1'
// import book2 from '../components/book2'
// import book3 from '../components/book3'
// import busList1 from '../components/booking1'
// import busList2 from '../components/book2'
// import busList3 from '../components/buslist3'
// import Home from '../components/dashboard'
// import Listinglist from '../components/listing'
// import ListingDetails from '../components/listingDetails'
// import Registration from '../components/registration'
// import Login from '../components/Login'
// import EditProf from '../components/editprof'
// const Width = Dimensions.get('window').width
// const Height = Dimensions.get('window').height

// const profileStack = createStackNavigator({
//   Profile:Profile,
//   EditProfile:{
//     screen:EditProf,
//   }
// },{initialRouteName:'Profile',headerMode:'none'})
// const businessList =createStackNavigator({
//   BusinessList:busList1,
//   busList2:{
//     screen:busList2,
//   },
//   busList3:{
//     screen:busList3,
//   }
// },{initialRouteName:'BusinessList',headerMode:'none'})
// const booking =createStackNavigator({
//     book1:book1,
//     book2:{
//       screen:book2,
//     },
//     book3:{
//       screen:book3,
//     }
//   },{initialRouteName:'Boooking',headerMode:'none'})
// const homeStack =createStackNavigator({
//       Home:Home,
//       Book:{
//         screen:booking,
//       },
//       ListingDetails:{
//         screen:ListingDetails,
//       },
//       ListingList:{
//         screen:Listinglist,
//       }

  
// },{initialRouteName:'Home',headerMode:'none'})
// const drawerConfig={
//   drawerWidth:Width*0.73,
//   drawerHeight:'50%',
//   drawerPosition:'right',
//   contentComponent:({navigation})=>{
//       return <MenuDrawer navigation={navigation} /> 
//   }
// }

// const drawerNavigator = createDrawerNavigator({
//   Home:homeStack,
//  MyProfile:profileStack,
//  BuasinessList:businessList
// },drawerConfig)
// const LoginStack=createStackNavigator({
//   Login:Login,
//   SignUP:{
//     screen:Registration,
//   },



// },{initialRouteName:'Login',headerMode:'none'
// })
// const rootSwitch = createSwitchNavigator({
//   Login:LoginStack,
//   DrawerNavigator:drawerNavigator,
  
// })
// export default createAppContainer(rootSwitch)
