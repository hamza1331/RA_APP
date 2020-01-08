import React,{Component} from 'react';
import {Button,Text,Input,Icon,Overlay} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'


class AddItem extends Component{

    state={
      isOpenModal:false,
      imagePath:[]
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

      ImagePicker.launchImageLibrary(options, (response) => {
        const source = { uri: response.uri };
        this.setState({
          imagePath:this.state.imagePath.concat(source)
        });
        
      });
      
    }

    handleModal=()=>{
      console.log("Hello");
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
              <KeyboardAwareScrollView>
                <View style={{width:'100%',marginTop:20,paddingLeft:'5%',paddingRight:'5%'}}>
                      
                      <Text h3 style={{color:'gray',alignSelf:'center'}}>Add Item</Text>

                      <Input inputStyle={{fontSize:18}} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} placeholder="Enter Item Name..." />

                      <Input inputStyle={{fontSize:18}} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} placeholder="Enter Item Price..." />

                      <Input inputStyle={{fontSize:18}} numberOfLines={6} multiline={true} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} />

                      <Button title="Choose Image" buttonStyle={{marginTop:10,marginLeft:'3%',width:150,height:30,backgroundColor:'skyblue'}} onPress={this.chooseImage} />

                      <FlatList 
                        
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={this.state.imagePath}
                        

                        renderItem={({item})=>(
                          <TouchableOpacity>
                            <Image source={item} style={{width:100,height:100,marginTop:20}} />
                          </TouchableOpacity>
                        )}
                    
                    />
                      <Button title="Add Item" buttonStyle={{marginTop:35,width:200,alignSelf:'center',backgroundColor:'#0b7253'}} />
                </View> 
              </KeyboardAwareScrollView>   
              <Overlay isVisible={this.state.isOpenModal}><Text>Hello</Text></Overlay>
            </View>
          );
    }
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
  },
});

export default AddItem;
