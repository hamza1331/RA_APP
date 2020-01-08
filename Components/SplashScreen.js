import React,{Component} from 'react';
import {Text} from 'react-native-elements';
import {
  StyleSheet,
  View,
} from 'react-native';

class SplashScreen extends Component{

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('SignIn')
        },3000)
    }

    render(){
        return (
            <View style={styles.Container}>
              <Text h1 style={{color:'white'}}>SHOPOHOLIC</Text>
            </View>
          );
    }
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0b7253'
  },
});

export default SplashScreen;
