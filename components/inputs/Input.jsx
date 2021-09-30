import React, { useState, useEffect } from "react";
import { StyleSheet,Text, TextInput, View } from "react-native";
import Sizes from "../../utils/sizes";
import Colors from '../../utils/styles';


const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "flex-start",
    width: '100%',
	},
  text: {
		marginBottom: Sizes.gutter * 0.5,
		color: Colors.textColor,
		fontSize: Sizes.regularFont,
	},
	input: {
    width: '100%',
		borderColor: Colors.secondary,
		borderWidth: 1,
		fontSize: Sizes.regularFont,
    padding: Sizes.gutter * 0.5,
	},
});

const Input = ({ label, value , onValueChange , containerStyle, style, ...props}) => {
  const onTextChange = (value) => {
		onValueChange(value);
	};
  
  return (
  <View style={[styles.container, containerStyle]}>
    {label && <Text style={styles.text}>{label}</Text>}
    <TextInput
      {...props}
      style={[styles.input,style]}
      onChangeText={onTextChange}
      defaultValue={value}
    ></TextInput>
  </View>
  )
}

export default Input;
