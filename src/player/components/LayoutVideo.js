import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const LayoutVideo = (props) =>{
  return(
    <View style={styles.container}>
      <View style={styles.video}>
      
      
      {props.children}

      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    height:100,
    flex:1,
    paddingTop:'56.25%'
  },
  video :{
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    top:0,
    backgroundColor:'black'
  }
})
export default LayoutVideo
