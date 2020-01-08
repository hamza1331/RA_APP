import React from "react";
import {createStackNavigator,createAppContainer,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import ItemDescription from './ItemDescription';
import {Dimensions} from "react-native";
import Profile from "./Profile";
import Wishes from "./WishList";
import AddItem from "./AddItem";
import MyItems from "./MyItems";
import SplashScreen from "./SplashScreen";
import EditProfile from "./EditProfile";
import DrawerContent from "./DrawerContent";


const StackNav = createStackNavigator({

    SplashScreen:{
        screen:SplashScreen
    },
    SignIn:{
        screen:SignIn
    },
    SignUp:{
        screen:SignUp
    },
    ItemDescription:{
        screen:ItemDescription
    },
    EditProfile:{
        screen:EditProfile
    }

},
{
    headerMode:'none'
}
)


const width = Dimensions.get('window').width;

const drawerConfig = {
    drawerWidth:width*0.80,
    contentComponent:({navigation})=>{
        return <DrawerContent navigation={navigation} />
        }
}


const DrawerNav = createDrawerNavigator({

    StackNav:{
        screen:StackNav
    },
    Home:{
        screen:Home
    },
    Profile:{
        screen:Profile
    },
    Wishes:{
        screen:Wishes
    },
    AddItem:{
        screen:AddItem
    },
    MyItems:{
        screen:MyItems
    }

},
drawerConfig
)


export default createAppContainer(DrawerNav);