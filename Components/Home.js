import React,{Component} from 'react';
import {Button,Card,Divider,Text,Icon,Rating} from 'react-native-elements';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ScrollView
} from 'react-native';
const width = Dimensions.get('window').width;

import mobile1 from './images/mobile1.jpg';

class Home extends Component{

    state={
      cardData:[
        {name:'VIVO Mobile',image:mobile1,addToFav:false,Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
        {name:'VIVO Mobile',image:mobile1,addToFav:false,Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
        {name:'VIVO Mobile',image:mobile1,addToFav:false,Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}        
      ]
    }
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

              <ScrollView showsVerticalScrollIndicator={false}>

                    <FlatList 
                        data={this.state.cardData}

                        renderItem={({item})=>(
                      
                        <Card style={{width:'90%'}} containerStyle={{padding:0}}>
                          <Image source={mobile1} style={{height:190,width:width*0.91}} />
                          <View style={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:10}}>
                            <Text h4 style={{color:'gray'}}>{item.name}</Text>
                            <Rating imageSize={23} />   
                          </View>
                          <Divider />
                          <Text style={{margin:10,marginBottom:5}} numberOfLines={2}>{item.Description}</Text>
                          <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center',padding:5,marginRight:10,marginBottom:10}}>
                            <Text style={{fontSize:20,color:'gray'}}>34,000 PKR</Text>
                            <Icon 
                              type="materialicons" 
                              name="keyboard-arrow-right" 
                              iconStyle={{fontSize:40,color:'white'}} 
                              containerStyle={{alignSelf:'flex-end',backgroundColor:'#0b7253',borderRadius:50}}  
                              onPress={()=>{this.props.navigation.navigate('ItemDescription')}}
                            />
                          </View>
                          
                        </Card>
                      
                        )}
                    
                    />


              </ScrollView>
                
            </View>
          );
    }
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
  },
});

export default Home;
