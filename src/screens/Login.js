
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  AsyncStorage,
  TextInput
} from 'react-native';
import {Button,Text} from 'react-native-elements';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import firebase from 'react-native-firebase'


class Login extends React.Component{
 constructor(props){
   super(props);
   this.state={
    firebaseUID:'',
     email:'',
     password:'',
    }
 }


  getData =  () => {
  AsyncStorage.getItem('uid').then((val)=>console.log(val))
  }
  onLogin=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((data)=>{
        AsyncStorage.setItem('uid',data.user.uid)
   
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage)
  // ...
});
}

  render(){
    return(
      <View style={styles.Container}>
              <Text h2 style={{color:'#F246AD',marginBottom:25}}>Stay 'N' Go</Text>

              <Text h3 style={{color:'gray',alignSelf:'flex-start',marginBottom:15,marginLeft:"7%"}}>SignIn</Text>
              <View style={{width:'90%'}}>
                <TextInput placeholder="Enter Email..." style={{borderBottomWidth:1,marginBottom:15,height:50}} onChangeText={(val)=>this.setState({email:val})} />
                <TextInput placeholder="Enter Password..."  secureTextEntry={true} style={{borderBottomWidth:1,marginBottom:15,height:50}} onChangeText={(val)=>this.setState({password:val})}  />
                
                <Text style={{marginLeft:"3%"}}>Create Account <Text style={{color:'blue'}} >Sign Up</Text></Text>
                
                <Button title="Sign In" onPress={this.onLogin}  buttonStyle={{backgroundColor:"#F246AD",width:100,alignSelf:'flex-end',marginTop:15}} />
                
              </View>
            </View>
    )
  }
}
const styles = StyleSheet.create({
  Container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default Login;

