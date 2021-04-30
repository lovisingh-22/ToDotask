import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,    
    
 } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.container} key={props.keyVal}>
      <Text style={styles.noteText}>{props.val.date}</Text>
      <Text style={styles.noteText}>{props.val.noteText}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor:'#ededed'
    
  },
  noteText:{
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:'#E91E63'
  }
  

});
