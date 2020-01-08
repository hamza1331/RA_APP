import React,{Component} from 'react';
import {Button,Text,Icon,Overlay,CheckBox,Header} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import {TextField} from 'react-native-material-textfield'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { WebView } from 'react-native-webview';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height


class SplashScreen extends Component{

    state={
      isOpenModal:false,
      imagePath:[],
      imageIndex:'',
      isFullScreenModal:false
    }
componentDidMount(){
    setTimeout(()=>{
        this.props.navigation.navigate('Register')
    },8000)
}
    chooseImage=()=>{

      const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: [],
          path: 'images',
        },
      };

      ImagePicker.launchImageLibrary(options, (response) => {
        const source = {path:response.path.toString(),uri: response.uri };
        this.setState({
          imagePath:this.state.imagePath.concat(source)
        });
        
      });
      
    }

    handleModal=(index)=>{
      this.setState({isOpenModal:true,imageIndex:index})
    }

    deleteImage = () =>{
      this.state.imagePath.splice(this.state.imageIndex,1);
      this.setState({ 
          isOpenModal:false
      })
    }

    handleAddMore=()=>{

      const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: [],
          path: 'images',
        },
      };

      ImagePicker.launchImageLibrary(options, (response) => {
        const source = { uri: response.uri };
        this.setState({
          imagePath:this.state.imagePath.concat(source)
        });
        
      });

    }

    handleFullScreenImage = () =>{
      this.setState({isFullScreenModal:true})
    }

    render(){
      const arrLength = this.state.imagePath.length;
        return (
          <View style={{flex:1,backgroundColor:'#65779F',justifyContent:'center',alignItems:'center'}}>
     <Image source={{uri:'https://www.fmeextensions.com/media/catalog/product/cache/1/image/500x416/9df78eab33525d08d6e5fb8d27136e95/q/u/xquick-contact_1.jpg.pagespeed.ic.Xlc7lKoydV.webp'}} style={{height:300,width:300}}/>

          </View>
          );
    }
};



export default SplashScreen;