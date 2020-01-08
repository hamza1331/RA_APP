import React,{Component} from 'react';
import {Button,Input,Text} from 'react-native-elements';
import {
  StyleSheet,
  View,
} from 'react-native';

class SignIn extends Component{
    render(){
        return (
            <View style={styles.Container}>
              <Text h2 style={{color:'#0b7253',marginBottom:25}}>SHOPOHOLIC</Text>

              <Text h3 style={{color:'gray',alignSelf:'flex-start',marginBottom:15,marginLeft:"7%"}}>SignIn</Text>
              <View style={{width:'90%'}}>
                <Input placeholder="Enter Email..." inputContainerStyle={{borderBottomWidth:1,marginBottom:15,height:50}} />
                <Input placeholder="Enter Password..." inputContainerStyle={{borderBottomWidth:1,marginBottom:15,height:50}} />
                
                <Text style={{marginLeft:"3%"}}>Create Account <Text style={{color:'blue'}} onPress={()=>this.props.navigation.navigate('SignUp')}>Sign Up</Text></Text>
                <Text style={{color:'blue',marginTop:10,marginLeft:"3%"}}>Forgot Password</Text>
                
                <Button title="Sign In" onPress={()=>this.props.navigation.navigate('Home')} buttonStyle={{backgroundColor:"#0b7253",width:100,alignSelf:'flex-end',marginTop:15}} />
                
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

export default SignIn;
