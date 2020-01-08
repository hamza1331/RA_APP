import React,{Component} from 'react';
import user from './images/user.png';
import {Button,Divider,Text,Icon,Avatar} from 'react-native-elements';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

class MyProfile extends Component{
    render(){
        return (
            <View style={styles.Container}>
              <View style={{backgroundColor:'#0b7253',padding:3,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} onPress={this.props.navigation.openDrawer}>
                      <Icon type="material" name="menu" size={43} color="white"  />
                  </TouchableOpacity>
                  <Text h3 style={{color:'white'}}>Shopoholic</Text>
                  <Icon type="material" name="tune" size={40} color="white"  />
              </View>
              <View style={{width:'100%',marginTop:20,paddingLeft:'5%',paddingRight:'5%'}}>
                  <View style={{backgroundColor:'lightgray',width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                      <Avatar rounded size={140} source={user} />
                  </View>
                  <Text style={{fontSize:18,marginTop:10}}><Text style={{fontWeight:'bold'}}>Name:</Text> Syed Mutahir</Text>
                  <Divider style={{marginTop:10,marginBottom:10}} />

                  <Text style={{fontSize:18}}><Text style={{fontWeight:'bold'}}>Email:</Text> mutahir.sherazi@gmail.com</Text>
                  <Divider style={{marginTop:10,marginBottom:10}} />

                  <Text style={{fontSize:18}}><Text style={{fontWeight:'bold'}}>Contact:</Text> 033333333</Text>
                  <Divider style={{marginTop:10,marginBottom:10}} />

                  <Text style={{fontSize:18}}><Text style={{fontWeight:'bold'}}>Address:</Text> Steel Town Bin Qasim Karachi</Text>
                  <Divider style={{marginTop:10,marginBottom:10}} />

                  <Button title="Edit Profile" buttonStyle={{marginTop:50,width:200,alignSelf:'center',backgroundColor:'#0b7253'}} onPress={()=>this.props.navigation.navigate('EditProfile')} />
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

export default MyProfile;
