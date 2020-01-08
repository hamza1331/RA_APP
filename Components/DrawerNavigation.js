import { createDrawerNavigator,createAppContainer } from "react-navigation";
import {Dimensions} from "react-native";
import Profile from "./Profile";
import Wishes from "./WishList";
import AddItem from "./AddItem";
import MyItems from "./MyItems";
import Home from "./Home";
import DrawerContent from "./DrawerContent";

const width = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth:width*0.80,
    contentComponent:({DrawerNavigation})=>{
        return <DrawerContent DrawerNavigation={DrawerNavigation} />
        }
}


const DrawerNav = createDrawerNavigator({

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
DrawerConfig
)

const rootNav = createSw

export default createAppContainer(DrawerNav);