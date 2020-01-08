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


class WebViewComp extends Component{

    state={
      isOpenModal:false,
      imagePath:[],
      imageIndex:'',
      isFullScreenModal:false,
      url:''
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
  componentDidMount(){
    this.setState({
      url:this.props.navigation.getParam('url')

    })
  }
    render(){
      const arrLength = this.state.imagePath.length;
        return (
          <View style={{flex:1}}>
  

          <WebView source={{ uri: this.state.url }} style={{width:wp('100%'),height:hp('50%')}} />
          </View>
          );
    }
};



export default WebViewComp;