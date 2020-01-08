
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  TextInput,
  
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import firebase from 'react-native-firebase'
import {Button,Text,ButtonGroup} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';




class Register extends React.Component{
 constructor(props){
   super(props);
   this.state={
     name:'',
    firebaseUID:'',
    email:'',
    password:'',
    profilePicUrl:'',
    fbProLink:'',
    InstaProLink:'',
    whatsappNo:'',
    avatarSource:'',
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
userCreation=(data,id)=>{
   firebase.database().ref().child(id).set(data)
}

onRegister=()=>{
  
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((data)=>{
   this.userCreation({
     name:this.state.name,
     email:this.state.email,
     password:this.state.password,
     profilePicUrl:this.state.profilePicUrl,
    InstaProLink:this.state.InstaProLink,
    fbProLink:this.state.fbProLink,
    whatsappNo:this.state.whatsappNo
   },data.user._user.uid)
   this.props.navigation.navigate('Login')
   this.setState({
    email:'',
    password:'',
    InstaProLink:'',
    fbProLink:'',
    whatsappNo:'',
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
      var reftosave = storageRef.child('Ridaappuserprofile/'+this.state.email+'.jpg');
      reftosave.putFile(file).then((snapshot)=> {
         this.setState({
           profilePicUrl:snapshot.downloadURL
         })
    alert('Your Info Is Going To Submit Keep Patience')
              // localStorage.setItem('URL',url)
         }).catch(function(error) {
console.log(error)
        });
  
  
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  
    }
  
}
  )}

  render(){
    return (
      <View style={styles.Container}>
        <Text h2 style={{color:'#65779F',marginBottom:25}}>Quick Contact</Text>

        <Text h3 style={{color:'gray',alignSelf:'flex-start',marginBottom:15,marginLeft:"7%"}}>SignUp</Text>
      
      <View style={{width:'90%',borderRadius:10}}>
          
          
      <TextInput placeholder="Enter Name..." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.name} onChangeText={(value)=>this.setState({name:value})}/>
     <TextInput placeholder="Enter Email..." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.email} onChangeText={(value)=>this.setState({email:value})}/>
      <TextInput placeholder="Enter Password..." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.password} onChangeText={(value)=>this.setState({password:value})}/>
      <TextInput placeholder="Enter Insta Profile Link..." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.InstaProLink} onChangeText={(value)=>this.setState({InstaProLink:value})}/>
      <TextInput placeholder="Enter Fb Profile Link ..." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.fbProLink} onChangeText={(value)=>this.setState({fbProLink:value})}/>
      <TextInput placeholder="Whatsapp Registered No...." style={{borderBottomWidth:1,marginBottom:15,height:50}} value={this.state.whatsappNo} onChangeText={(value)=>this.setState({whatsappNo:value})}/>


      <Button title="Choose Profile Picture" onPress={this.ChooseImage} buttonStyle={{backgroundColor:"#65779F",width:'50%',alignSelf:'flex-start',marginTop:5}} />
 {this.state.showImage &&<Image source={{uri:this.state.avatarSource}} style={{width:80,height:50,marginTop:5,borderRadius:8}}/>
}
      <Text style={{marginLeft:"3%"}}>Have Account <Text style={{color:'blue'}} onPress={()=>this.props.navigation.navigate('Login')}>Sign In</Text></Text>
      <Button title="Sign Up" onPress={this.onRegister
        }  buttonStyle={{backgroundColor:"#65779F#65779F",width:100,alignSelf:'flex-end',marginTop:15}} />

    </View>
    
        
       
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