
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  TextInput
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import firebase from 'react-native-firebase'
import AsyncStorage from '@react-native-community/async-storage';
import {Button,Text,ButtonGroup} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';




class Register extends React.Component{
 constructor(props){
   super(props);
   this.state={
    firebaseUID:'',
    name:'',
     email:'',
     password:'',
     profilePicUrl:'',
     cnic:'',
     phoneNo:'',
     createdDate:Date.now(),
     userType:false,
       avatarSource:'',
       selectedIndex:0,
       showImage:false
   }
   this.updateIndex = this.updateIndex.bind(this)
    
  }
  updateIndex (selectedIndex) {
    this.setState({
      selectedIndex:selectedIndex
    })
   if(selectedIndex===1){
     this.setState({
       userType:true
     })
    }
     else{
      this.setState({
        userType:false
      })
     }
   
    this.setState({userType:selectedIndex})
  }
userCreation=(data)=>{
  console.log(data)
    fetch("http://192.168.0.106:8000/userCreate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
          alert('User Created Now Login With Credentials')
        }).catch(err => {alert('You are not registered Check Internet Connection')})
}

onRegister=()=>{
  
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((data)=>{
   this.userCreation({
    firebaseUID:data.user._user.uid,
     email:this.state.email,
     password:this.state.password,
     profilePicUrl:this.state.profilePicUrl,
     cnic:this.state.cnic,
     createdDate:Date.now(),
     userType:this.state.userType,
     name:this.state.name
   })
   this.setState({
     name:'',
    email:'',
    password:'',
    cnic:'',
    profilePicUrl:'',
    avatarSource:'',
    showImage:false
  })
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
   alert(errorMessage)
    // ...
  });
}
getId=()=>{
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@uXeRId')
      if(value !== null) {
     console.log(value)
      }
    } catch(e) {
      // error reading value
    }
  }
}

ChooseImage = ()=>{
  const options = {
    quality: 1.0,
    maxWidth: 800,
    maxHeight: 500,
    storageOptions: {
      skipBackup: true,
    },
  };
  ImagePicker.showImagePicker(options,(response) => {
 
      var storageRef = firebase.storage().ref();

    // setTimeout(this.getItemLocally,5000)
    // Create a reference to 'images/mountains.jpg'


     
       
  
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
       this.setState({
         showImage:true,
         avatarSource:response.uri
       })
      var file=response.path.toString()
//       var reftosave = storageRef.child('Users Profile Images/'+this.state.email+'.jpg');
//       reftosave.putFile(file).then((snapshot)=> {
//          this.setState({
//            profilePicUrl:snapshot.downloadURL
//          })
//     alert('Your Info Is Going To Submit Keep Patience')
//               // localStorage.setItem('URL',url)
//          }).catch(function(error) {
// console.log(error)
//         });
  
  
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  
    }
  
}
  )}

  render(){
   
     var buttons=['Customer', 'Land Lord']
    return (
      <View style={styles.Container}>
        <Text h3 style={{color:'#F246AD',marginBottom:25}}>Stay N GO</Text>

        <Text h4 style={{color:'gray',alignSelf:'flex-start',marginBottom:15,marginLeft:"7%"}}>SignUp As</Text>
        <ButtonGroup
        selectedButtonStyle={{backgroundColor:'#F246AD'}}
      onPress={this.updateIndex}
      selectedIndex={this.state.selectedIndex}
      buttons={buttons}
      containerStyle={{height: 50}}
    />
    {(this.state.selectedIndex === 0)?
      <View style={{width:'90%',borderRadius:10}}>
          
          
          <TextInput placeholder="Name" style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.email} onChangeText={(value)=>this.setState({email:value})}/>

      <TextInput placeholder="Enter Email..." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.email} onChangeText={(value)=>this.setState({email:value})}/>
      <TextInput placeholder="Enter Password..." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.password} onChangeText={(value)=>this.setState({password:value})}/>
      <Text h6>TextInput CNIC (if Pakistani) else Passport No.</Text>
      <TextInput placeholder="CNIC/Passport No...." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.cnic}  onChangeText={(value)=>this.setState({cnic:value})} />

      <Button title="Choose Profile Picture" onPress={this.ChooseImage} buttonStyle={{backgroundColor:"#F246AD",width:'50%',alignSelf:'flex-start',marginTop:15}} />
      {this.state.showImage &&<Image source={{uri:this.state.avatarSource}} style={{width:60,height:60,marginTop:5,borderRadius:8}}/>
}
      <Text style={{marginLeft:"3%"}}>Have Account <Text style={{color:'blue'}} onPress={()=>this.props.navigation.navigate('SignIn')}>Sign In</Text></Text>
      <Button title="Sign Up" onPress={this.onRegister}  buttonStyle={{backgroundColor:"#F246AD",width:100,alignSelf:'flex-end',marginTop:15}} />

    </View>:
     <View style={{width:'90%',borderRadius:10}}>
          <TextInput placeholder="Name" style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.email} onChangeText={(value)=>this.setState({email:value})}/>

<TextInput placeholder="Enter Email..." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.email} onChangeText={(value)=>this.setState({email:value})}/>
      <TextInput placeholder="Enter Password..." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.password} onChangeText={(value)=>this.setState({password:value})}/>
      <Text h6>TextInput CNIC (if Pakistani) else Passport No.</Text>
      <TextInput placeholder="CNIC/Passport No...." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.cnic}  onChangeText={(value)=>this.setState({cnic:value})} />
      <Button title="Choose Profile Picture" onPress={this.ChooseImage} buttonStyle={{backgroundColor:"#F246AD",width:'50%',alignSelf:'flex-start',marginTop:15}} />
 {this.state.showImage &&<Image source={{uri:this.state.avatarSource}} style={{width:60,height:60,marginTop:5,borderRadius:8}}/>
}
      <Text style={{marginLeft:"3%"}}>Have Account <Text style={{color:'blue'}} onPress={()=>this.props.navigation.navigate('SignIn')}>Sign In</Text></Text>
      <Button title="Sign Up" onPress={this.onRegister}  buttonStyle={{backgroundColor:"#F246AD",width:100,alignSelf:'flex-end',marginTop:15}} />

</View> 
}
    
        
       
      </View>
    );
}
};

const styles = StyleSheet.create({
Container: {
flex:1,
justifyContent:'center',
alignItems:'center'
},
});

export default Register;
