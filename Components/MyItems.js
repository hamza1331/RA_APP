import React,{Component} from 'react';
import mobile1 from './images/mobile1.jpg';
import {Card,Text,Icon,Rating,Button} from 'react-native-elements';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
const width = Dimensions.get('window').width;

class MyItems extends Component{
  state={
    cardData:[
      {name:'VIVO Mobile',image:mobile1,addToFav:false,Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
      {name:'VIVO Mobile',image:mobile1,addToFav:false,Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
      {name:'VIVO Mobile',image:mobile1,addToFav:false,Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},        
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
                        numColumns={2}
                        data={this.state.cardData}

                        renderItem={({item})=>(
                      
                        <Card containerStyle={{padding:0,width:width*0.46,marginRight:2,marginLeft:9,borderRadius:10}}>
                            <Image source={mobile1} style={{height:100,width:width*0.46,margin:0,borderTopLeftRadius:10,borderTopRightRadius:10}} />
                            
                            <Text h4 style={{color:'gray',alignSelf:'center',marginTop:10}}>{item.name}</Text>
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
                                <Rating imageSize={20} /> 
                                <Text>2.5</Text>
                            </View>
                            <Button 
                                title="View" 
                                buttonStyle={{backgroundColor:'#0b7253',width:100,alignSelf:'center',marginBottom:5,marginTop:5,height:40}} 
                                onPress={()=>{this.props.navigation.navigate('ItemDescription')}}
                            />
                                
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

export default MyItems;
