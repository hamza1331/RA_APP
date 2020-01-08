import React,{Component} from 'react';
import {Card,Text,Icon,Rating,Button,Header} from 'react-native-elements';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Dimensions,AsyncStorage
} from 'react-native';
const width = Dimensions.get('window').width;



class Portfolio extends Component{
  constructor(props){
    super(props);
   this.state={
    val:'s4e54we5cew54ed',
    guestHouse:[]
  }
  }
  
  getFirebaseUID=()=>{
    AsyncStorage.getItem('uid').then(value=>this.setState({val:value}))
  }
  fetchHotelonFbUID=()=>{
    fetch("http://192.168.0.101:8000/hotelListBySpecificID"+this.state.val,
    {
      method: "GET"
        }).then(res => res.json()).then(data=> {
          this.setState({
            guestHouse:data
          })
          console.log(data)
        }
        
        ).catch(err => console.log(err))
  }
  
   componentDidMount(){
     this.getFirebaseUID()
    this.fetchHotelonFbUID()

   }
    render(){
        return (
            <View style={styles.Container}>
  <Header 
  leftContainerStyle={{marginBottom:15,marginRight:10}}
  leftComponent={<Icon type="material" name="menu" size={35} color="white"  />}
  centerComponent={<Text h3 style={{color:'white',marginBottom:20}}>Portfolio</Text>}
  containerStyle={{backgroundColor:'#F246AD',
  height: Platform.OS === 'ios' ? 70 :  70 - 10}}
  >

  </Header>
           
              <ScrollView showsVerticalScrollIndicator={false}>

                    <FlatList 
                        numColumns={2}
                        data={['eref','ddf']}

                        renderItem={({item})=>(
                      
                        <Card containerStyle={{padding:0,width:width*0.46,marginRight:2,marginLeft:9,borderRadius:10}} image={{uri:'https://q-xx.bstatic.com/images/hotel/max500/130/130684189.jpg'}}>
            
                            <Text h4 style={{color:'gray',alignSelf:'center',marginTop:10}}>Hotel Name</Text>
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
                                <Rating imageSize={20} /> 
                                <Text>2.5</Text>
                            </View>
                            <Button 
                                title="View" 
                                buttonStyle={{backgroundColor:"#F246AD",width:100,alignSelf:'center',marginBottom:5,marginTop:5,height:40}} 
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

export default Portfolio;
