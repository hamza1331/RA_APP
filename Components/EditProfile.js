import React,{Component} from 'react';
import user from './images/user.png';
import {Button,Divider,Text,Avatar,Input} from 'react-native-elements';
import {
  StyleSheet,
  View,
} from 'react-native';

class EditProfile extends Component{
    render(){
        return (
            <View style={styles.Container}>
              <View style={{width:'100%',marginTop:20,paddingLeft:'5%',paddingRight:'5%'}}>
                  <View style={{backgroundColor:'lightgray',width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                      <Avatar rounded size={150} source={user} showEditButton />
                  </View>

                  <Input value="Syed Mutahir" inputStyle={{fontSize:18}} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} />

                  <Input value="mutahir.sherazi@gmail.com" inputStyle={{fontSize:18}} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} />

                  <Input value="033333333" inputStyle={{fontSize:18}} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} />

                  <Input value="Steel Town Bin Qasim Karachi" inputStyle={{fontSize:18}} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} />

                  <Button title="Update Profile" buttonStyle={{marginTop:35,width:200,alignSelf:'center',backgroundColor:'#0b7253'}} />
                  <Text style={{marginTop:10,width:200,justifyContent:'center',color:'blue'}} onPress={()=>this.props.navigation.navigate('Profile')}> Go Back</Text>
              </View>            
            </View>
          );
    }
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
  },
});

export default EditProfile;
