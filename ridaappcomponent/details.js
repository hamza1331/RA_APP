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

 
class Details extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      locale: 'ar',
      isRTL:false,
      instaprof:'',
      fbprof:'',
      whatsappno:''
    }
  }
 
  toggleLocale = () => {
    this.setState({
      locale: (this.state.locale == 'ar' ? 'en' : 'ar')
    })
  }
    componentDidMount(){
       var abcd=this.props.navigation.getParam('key')
       var dataref=firebase.database().ref().child(abcd)
       dataref.on('value',(snapshot)=>{
         var acd= snapshot.val()
         this.setState({
           instaprof:acd.InstaProLink,
           fbprof:acd.fbProLink,
           whatsappno:acd.whatsappNo
         })
       })
    }
  render() {
    return (
      <View style={{ flex: 1,backgroundColor:'white'}}>
         <Header  placement="left"
                 leftComponent={<Icon type="material" name="arrow-back" size={35} color="white" onPress={()=>this.props.navigation.navigate('List')} />}

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
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>

<View style={{alignItems:'center',marginTop:15}}>
  <View style={{width:wp('90%')}}>
  <Button title='See Insta Profile' buttonStyle={{marginTop:20,backgroundColor:'orange'}} onPress={()=>this.props.navigation.navigate(' WebViewComp'),{
    url:this.state.instaprof
  }}/>
  <Button title='See Facebook Profile' buttonStyle={{marginTop:20,backgroundColor:'blue'}} onPress={()=>this.props.navigation.navigate(' WebViewComp'),{
    url:this.state.instaprof
  }}/>
  <Button title='Open Whatsapp Chat' buttonStyle={{marginTop:20,backgroundColor:'green'}} />

  </View>
</View>




                  </View>
              

                
              

       </View>
    )
  }
}
 
export default Details;
