import React from "react";
import { StyleSheet,Text } from "react-native";
import Sizes from "../../utils/sizes";
import Colors from '../../utils/styles';


const styles = StyleSheet.create({
	text: {
    color: Colors.red,
    fontSize: Sizes.smallFont,
    fontWeight: 'bold',
  },
});

const ErrorText = ({  style,...props}) => (
  <Text 
    {...props}
    style={[styles.text, style]} 
  />
);


export default ErrorText;
