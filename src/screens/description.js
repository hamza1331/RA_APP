import React,{Component} from 'react';
import {Button,Text,Icon,Divider,Rating, Card,Header} from 'react-native-elements';
import {SliderBox} from 'react-native-image-slider-box';
;
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { FlatList } from 'react-native';

class Description extends Component{
  state={
    addToFav:false,
    images:[
      'https://q-xx.bstatic.com/images/hotel/max500/130/130684189.jpg',
       'https://q-xx.bstatic.com/images/hotel/max500/130/130684189.jpg',
        'https://q-xx.bstatic.com/images/hotel/max500/130/130684189.jpg'
      ]
  }

  handleColor = () =>{
    this.setState({addToFav:!this.state.addToFav})
  }
    render(){
        return (
          <View style={styles.Container}>
                     <Header 
  leftContainerStyle={{marginBottom:15,marginRight:10}}
  leftComponent={<Icon type="material" name="arrow-back" size={35} color="white"  />}
  containerStyle={{backgroundColor:'#F246AD',
  height: Platform.OS === 'ios' ? 70 :  70 - 10}}
  >

  </Header>
              <SliderBox 
                height={170}
                autoplay
                circleLoop
                dotColor="yellow"
                images={this.state.images}
              />
              <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:10}}>
                      <Text h4 style={{color:'gray'}}>Hotel Name</Text>
                        
                  </View> 

                  <Divider />

                  <View style={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:10}}>
                      <Text style={{color:'gray',fontSize:20}}>10000 PKR for 24 hrs</Text>
                      <Rating imageSize={20} />
                  </View>

                  <Divider />

                  <FlatList 
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={[{
                     image:'https://q-xx.bstatic.com/images/hotel/max500/130/130684189.jpg'
                    },
                    {
                      image:'https://q-xx.bstatic.com/images/hotel/max500/130/130684189.jpg'
                    },
                    {
                      image:'https://q-xx.bstatic.com/images/hotel/max500/130/130684189.jpg'
                    }
                     
                    ]}

                    renderItem={({item})=>(
                        <Card containerStyle={{padding:0,margin:10,marginBottom:10}}>
                              <Image style={{width:100,height:100}} source={{uri:item.image}} />
                        </Card>


                    )}

                  />

                  <Divider />

                  <Text style={{margin:10}}>
                   Address: Flat No.2 Nazimabad Fire Station Karachi
                  </Text>

                  <Divider />

                  <View style={{margin:10}}>
                    <Text h4 style={{color:'gray'}}>Rooms</Text>
                    <Text>No rooms added yet</Text>
                  </View>

                  <Button title="Book Now" buttonStyle={{width:200,backgroundColor:'#F246AD',alignSelf:'center',marginTop:50}} /> 
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

export default Description;
