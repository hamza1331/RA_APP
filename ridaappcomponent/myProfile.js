/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Text, View, TouchableHighlight,FlatList,Image,AsyncStorage} from 'react-native'
 
// Import { RTLView, RTLText } from react-native-rtl-layout
import {Header,Icon,Button,Avatar,Rating} from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import firebase from 'react-native-firebase';

 
class MyProfile extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      locale: 'ar',
      isRTL:false,
      name:'',
      instaprof:'',
      fbprof:'',
      whatsappno:'',
      profilepic:''
    }
  }
 
  toggleLocale = () => {
    this.setState({
      locale: (this.state.locale == 'ar' ? 'en' : 'ar')
    })
  }
  componentDidMount(){
    AsyncStorage.getItem('uid').then((value)=>{
      var dataref=firebase.database().ref().child(value)
      dataref.on('value',(snapshot)=>{
        var acd= snapshot.val()
        this.setState({
          name:acd.name,
          instaprof:acd.InstaProLink,
          fbprof:acd.fbProLink,
          whatsappno:acd.whatsappNo,
          profilepic:acd.profilePicUrl
        })
      })
    })
  }
 
  render() {
    return (
      <View style={{ flex: 1,backgroundColor:'white'}}>
         <Header  placement="left"
               
                  centerComponent={
                  <Text style={{fontSize:30,color:'white',alignSelf:'center',marginBottom:10}}>Contact Details</Text>
                
                  
                  }
                  containerStyle={{backgroundColor:'#65779F',
                  height: Platform.OS === 'ios' ? 70 :  70 - 10}}
                  />
                  <View style={{backgroundColor:'white',height:hp('3%'),width:wp('100%')}}>
                    
                  </View>
                  <View style={{alignItems:'center'}}>
                  <Avatar
                  size='xlarge'
  rounded
  source={{
    uri:this.state.profilepic
  }}
/>

<View style={{alignItems:'center',marginTop:15}}>
  <View style={{width:wp('90%'),alignItems:'center'}}>
<Text>Name:{this.state.name}</Text>
<Text>InstaLink:{this.state.instaprof}</Text>
<Text>FbLink:{this.state.fbprof}</Text>
<Text>WhatsAppNo.:{this.state.whatsappno}</Text>
  </View>
</View>
<Button title='Edit Profile' buttonStyle={{marginTop:20}} onPress={()=>this.props.navigation.navigate('EditProf')}/>




                  </View>
              

                
              

       </View>
    )
  }
}
 
export default MyProfile;
