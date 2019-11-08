import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {

  return (
    <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={onPress}
      >
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
  
}

const styles = {
  textStyle : {
    alignSelf: 'center',
    color : '#007aff',
    fontSize: 20,
    fontWeight : 'bold',
  },
  buttonStyle : {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
  }
}


export default Button;