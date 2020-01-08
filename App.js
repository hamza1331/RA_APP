
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  AsyncStorage,
  TextInput,FlatList
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Button,Text,Header,Icon,Input} from 'react-native-elements';
import {
 
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import firebase from 'react-native-firebase'
import StackNav from './navigation/Drawer'

class App extends React.Component{
 constructor(props){
   super(props);
   this.state={
    firebaseUID:'',
     email:'',
     password:'',
    }
 }
componentDidMount(){
  const fireRef=firebase.database().ref()
  //  fireRef.on('value',(snapshot)=>{
  //     console.log(snapshot.val())
  //  })
  console.log(fireRef)

}

 
  onApp=()=>{
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
    <StackNav />
    )
  }
}
const styles = StyleSheet.create({
  Container: {
    flex:1,
  },
});

export default App;