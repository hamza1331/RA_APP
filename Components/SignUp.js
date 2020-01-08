import React,{Component} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

class SignUp extends Component{
    render(){
        return (
            <View style={styles.Container}>
              <Text h2 style={{color:'#0b7253',marginBottom:25}}>SHOPOHOLIC</Text>

              <Text h3 style={{color:'gray',alignSelf:'flex-start',marginBottom:15,marginLeft:"7%"}}>SignUp</Text>

              <View style={{width:'90%',borderRadius:10}}>
                <Input placeholder="Enter User Name..." inputContainerStyle={{borderBottomWidth:1,marginBottom:15,height:50}} />
                <Input placeholder="Enter Email..." inputContainerStyle={{borderBottomWidth:1,marginBottom:15,height:50}} />
                <Input placeholder="Enter Password..." inputContainerStyle={{borderBottomWidth:1,marginBottom:15,height:50}} />
                <Input placeholder="Re-Enter Password..." inputContainerStyle={{borderBottomWidth:1,marginBottom:15,height:50}} />

                <Text style={{marginLeft:"3%"}}>Have Account <Text style={{color:'blue'}} onPress={()=>this.props.navigation.navigate('SignIn')}>Sign In</Text></Text>
                <Button title="Sign Up" onPress={()=>this.props.navigation.navigate('Home')} buttonStyle={{backgroundColor:"#0b7253",width:100,alignSelf:'flex-end',marginTop:15}} />

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

export default SignUp;
