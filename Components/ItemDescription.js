import React,{Component} from 'react';
import {Button,Text,Icon,Divider,Rating, Card} from 'react-native-elements';
import {SliderBox} from 'react-native-image-slider-box';
;
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Home extends Component{
  state={
    addToFav:false,
    images:[
    ]
  }

  handleColor = () =>{
    this.setState({addToFav:!this.state.addToFav})
  }
    render(){
        return (
          <View style={styles.Container}>
              <SliderBox 
                height={170}
                autoplay
                circleLoop
                dotColor="yellow"
                images={this.state.images}
              />
              <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:10}}>
                      <Text h4 style={{color:'gray'}}>VIVO Mobile</Text>
                          <TouchableOpacity style={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} onPress={this.handleColor}>
                              <Text style={{color:'gray',marginRight:5}}>Add To Fav</Text>
                              <Icon type="material" name="favorite"  iconStyle={{color:this.state.addToFav===false ? 'lightgray' : 'red'}} />
                          </TouchableOpacity>
                  </View> 

                  <Divider />

                  <View style={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:10}}>
                      <Text style={{color:'gray',fontSize:20}}>34,000 PKR</Text>
                      <Rating imageSize={20} />
                  </View>

                  <Divider />

                  <FlatList 
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={}

                    renderItem={({item})=>(
                        <Card containerStyle={{padding:0,margin:10,marginBottom:10}}>
                              <Image style={{width:100,height:100}} source={item.image} />
                        </Card>


                    )}

                  />

                  <Divider />

                  <Text style={{margin:10}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>

                  <Divider />

                  <View style={{margin:10}}>
                    <Text h4 style={{color:'gray'}}>Seller</Text>
                    <Text>Name: Syed Mutahir</Text>
                    <Text>Location: Stee Town Bin-Qasim Karachi</Text>
                  </View>

                  <Button title="Order Now" buttonStyle={{width:200,backgroundColor:'#0b7253',alignSelf:'center',marginTop:50}} /> 
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
