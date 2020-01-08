import React,{Component} from 'react';
import {Button,Text,Icon,Overlay,CheckBox,Header} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,ProgressBarAndroid
} from 'react-native';
import {TextField} from 'react-native-material-textfield'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import firebase from 'react-native-firebase';
import ProgressCircle from 'react-native-progress-circle'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height


class AddItem extends Component{

    state={
      title:'',
      description:'',
      halls:'',
      isOpenModal:false,
      imagePath:[],
      imageIndex:'',
      isFullScreenModal:false,
      initialLongitude:0,
      initialLatitude:0,
      MapModal:false,
      laundry:false,
      coordinate:{
        longitude:0,
        latitude:0
      },
      firebaseUID:"teddy6789",
      imageLinks:[],
      wot:'',
      load:false,
      progressVal:0.0,
      chooseImg:true
    }
   componentDidMount(){
    Geolocation.getCurrentPosition(info => this.setState({
       initialLongitude:info.coords.longitude,
       initialLatitude:info.coords.latitude
    }));
}
    chooseImage=()=>{

      const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: [],
          path: 'images',
        },
      };
      var storageRef = firebase.storage().ref();

      ImagePicker.launchImageLibrary(options, (response) => {
        const source = {uri: response.uri,name:response.fileName };
         this.setState({
           load:true,
           chooseImg:false
         })
        var file=response.path.toString()

              var reftosave = storageRef.child(`${this.state.firebaseUID}/${response.fileName}`);
           
              let task = reftosave.putFile(file)

                  task.on('state_changed', (snapshot)=> {
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  
                   this.setState({
                     progressVal:progress
                   })
                      console.log('Upload is ' + progress.toFixed(2) + '% done');
                    switch (snapshot.state) {
                      case firebase.storage.TaskState.PAUSED: // or 'paused'
                          console.log('Upload is paused');
                        break;
                      
                      case firebase.storage.TaskState.RUNNING: // or 'running'
                          console.log(progress);
                        break;
                        default:
                        return
                    }
                  }, function (error) {
                    alert(error.message)
                  }, () => {
                     reftosave.getDownloadURL().then((downloadURL) => {
                       var arrc=this.state.imageLinks
                       var arrb =this.state.imagePath
                       arrc.push(downloadURL)
                       arrb.push(source)
                        this.setState({
                           load:false,
                           imageLinks:arrc,
                           imagePath:arrb,
                           progressVal:0.00
                        })
                    });
                  })
              
              
//       reftosave.putFile(file).then((snapshot)=> {
        
//         var arrb=this.state.imageLinks
//          arrb.push(snapshot.downloadURL)
//          console.log(snapshot.downloadURL)
//          this.setState({
//            imageLinks:arrb,
//            imagePath:this.state.imagePath.concat(source)
//           })
//               // localStorage.setItem('URL',url)
//          }).catch(function(error) {
// console.log(error)
//         });
      });
      
    }

    handleModal=(index,nm)=>{
      this.setState({isOpenModal:true,imageIndex:index,wot:nm})
    }

    deleteImage = () =>{
   
      var desertRef = firebase.storage().ref().child(`${this.state.firebaseUID}/${this.state.wot}`);

// Delete the file
desertRef.delete().then(() =>{
alert('DELETED')
const arra=this.state.imagePath
const arrc=this.state.imageLinks
arra.splice(this.state.imageIndex,1)
arrc.splice(this.state.imageIndex,1)
this.setState({ 
    isOpenModal:false,
    imagePath:arra,
    imageLinks:arrc
})
}).catch(function(error) {
alert('Error')
});
    }

  
    
    handlePress=(e)=>{
    this.setState({
      coordinate:e.nativeEvent.coordinate
    })
    }
    handleFullScreenImage = () =>{
      this.setState({isFullScreenModal:true})
    }
MapModalOpen=()=>{
  this.setState({
    MapModal:!this.state.MapModal
  })
}
laundryavailable=()=>{
  this.setState({
    laundry:!this.state.laundry
  })
}
AddHotel=()=>{
  console.log(this.state.imageLinks)
  const data={
   imageLinks:this.state.imageLinks,
      firebaseUID:this.state.firebaseUID,
      name:this.state.title,
      rooms:[],
      laundry:this.state.laundry,
      geometry: {
          type: "Point",
          "coordinates": [
             this.state.coordinate.latitude,
             this.state.coordinate.longitude
          ]
      },
      description: this.state.description,
      Rating: 0,
      totalEarning: 0,
      totalBookingNumber: 0
  }
  
  fetch("http://192.168.0.106:8000/addHotel",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
        }).then(res => res.json()).then(datam => {
          alert('hotel Added')
        }).catch(err => {alert('You are not registered Check Internet Connection')})

    // localStorage.setItem('URL',url)

  }

    render(){
      const arrLength = this.state.imagePath.length;
        return (
            <View style={styles.Container}>
             <Header 
  leftContainerStyle={{marginBottom:15,marginRight:10}}
  leftComponent={<Icon type="material" name="menu" size={35} color="white"  />}
  centerComponent={<Text h4 style={{color:'white',marginBottom:20}}>Add Guest House</Text>}
  containerStyle={{backgroundColor:'#F246AD',
  height: Platform.OS === 'ios' ? 70 :  70 - 10}}
  >

  </Header>
              <KeyboardAwareScrollView>
                <View style={{width:'100%',marginTop:20,paddingLeft:'5%',paddingRight:'5%'}}>
                      

                      <KeyboardAvoidingView>
  <TextField
        label='Hotel Name'
        value={this.state.title}
        onChangeText={ (title) => this.setState({ title }) }
        tintColor="#F246AD"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView>
        <TextField
        label='Description (Optional)'
        value={this.state.description}
        onChangeText={ (description) => this.setState({ description }) }
        tintColor="#F246AD"
        containerStyle={{marginLeft:15,marginRight:15}}
   characterRestriction={600}
      />
      </KeyboardAvoidingView>
   
      <KeyboardAvoidingView>
  <TextField
        label='Halls (in number form)'
        value={this.state.halls}
        onChangeText={ (halls) => this.setState({ halls }) }
        tintColor="#F246AD"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      </KeyboardAvoidingView>
<Text>Check if You provide laundry</Text>
      <CheckBox
  title='Laundry'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={this.state.laundry}
  onPress={this.laundryavailable}
  checkedColor='#F246AD'
  containerStyle={{marginLeft:25,backgroundColor:'white',borderWidth:0}}
/>
  <Button title="Open Google Map to Add Location" onPress={this.MapModalOpen} />
   
 
                        {
                          
                            (this.state.chooseImg)? <Button title="Choose Image" buttonStyle={{marginTop:10,marginLeft:'3%',width:150,height:30,backgroundColor:'skyblue'}} onPress={this.chooseImage} />  : null
                          
                        } 
                    {(this.state.load)? <View style={{alignSelf:'center',marginTop:10}}><ProgressCircle
                      
                            percent={this.state.progressVal.toFixed(2)}
                            radius={50}
                            borderWidth={8}
                            color="#F246AD"
                            shadowColor="#fff"
                            bgColor="#fff"
                          
                        >
                            <Text style={{ fontSize: 18 }}>{this.state.progressVal.toFixed(2)}</Text>
                        </ProgressCircle>
                        </View>
                        :null}
                         { (this.state.imagePath.length >0 && this.state.load === false) ? <FlatList 
                            
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={this.state.imagePath}
                            

                            renderItem={({item,index})=>
                              (
                              <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:20}}>
                                <TouchableOpacity onPress={()=>this.handleModal(index,item.name)} style={{marginRight:5}}>
                                  <Image source={{uri:item.uri}} style={{width:100,height:100}} />
                                </TouchableOpacity>
                                  {(this.state.imagePath.length-1===index)&&<TouchableOpacity style={{display:'flex',justifyContent:'center',alignItems:'center',height:100,width:100,borderWidth:2,borderColor:'#F246AD'}} onPress={this.chooseImage}>
                                      <Icon type="material" name="add" size={30}  />
                                      <Text style={{color:'#F246AD'}}>Add More</Text>
                                  </TouchableOpacity>
                                    }
                              </View>
                                
                            ) 
                            }
                        
                            /> :
                           null
                          }



                               
                {(this.state.load===false)&&  <Button title="Add" buttonStyle={{marginTop:35,width:200,alignSelf:'center',backgroundColor:'#F246AD'}} onPress={this.AddHotel}/>}    
                </View> 
              </KeyboardAwareScrollView> 
              <Overlay 
                  containerStyle={{backgroundColor:'black',opacity:0.8}} 
                  overlayStyle={{display:'flex',justifyContent:"center",alignItems:'center'}} 
                  height={200} isVisible={this.state.isOpenModal}
                  onBackdropPress={()=>{this.setState({isOpenModal:false})}}
              >
                  <Button title="View Image" buttonStyle={{backgroundColor:'skyblue',color:'white',width:200,marginBottom:10}} onPress={this.handleFullScreenImage} />
                  <Button title="Delete" buttonStyle={{backgroundColor:'red',color:'white',width:200}} onPress={this.deleteImage} />
              </Overlay> 

              <Overlay isVisible={this.state.isFullScreenModal} fullScreen overlayStyle={{padding:0}}>
            
                      <TouchableOpacity style={{backgroundColor:'#0b7253',height:50}}>
                          <Icon type="antdesign" name="arrowleft" size={35} iconStyle={{alignSelf:'flex-start'}} color="white"  onPress={()=>this.setState({isFullScreenModal:false})} />
                          <Image source={this.state.imagePath[this.state.imageIndex]} style={{width:width*1,height:height*1}} />
                      </TouchableOpacity>
              </Overlay> 
              
              <Overlay isVisible={this.state.MapModal} fullScreen overlayStyle={{padding:0}}>
              <Header 
  rightComponent={<Text h3 style={{color:'black',marginBottom:20,marginLeft:40,fontWeight:'bold'}} onPress={this.MapModalOpen}>X</Text>}
  containerStyle={{backgroundColor:'white',
  height: Platform.OS === 'ios' ? 70 :  70 - 10}}
  >

  </Header>
   
                   <MapView 
        style={{width:wp('100%'),height:hp('100%')}}
        initialRegion={{
            latitude:this.state.initialLatitude,
            longitude:this.state.initialLongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          onPress={this.handlePress}
      >
      
        <Marker coordinate={this.state.coordinate}>
          </Marker>
   
      </MapView>
              </Overlay> 
            </View>
          );
    }
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    backgroundColor:'white'
  },
});

export default AddItem;