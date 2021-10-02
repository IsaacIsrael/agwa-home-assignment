import React from "react";
import { StyleSheet,Text, View } from "react-native";
import Sizes from "../utils/sizes";
import Colors from '../utils/styles';


const styles = StyleSheet.create({
  container: {
    width: '100%',
		flexDirection: "row",
		alignItems: "center",
	},
  label: {
    flex: 1,
		fontWeight: "bold",
		fontSize: Sizes.regularFont,
	},
	value: {
    flex: 1,
    fontSize: Sizes.regularFont,
	},
});

const Information = ({  styleContainer, label , value}) => (
  <View style={[styles.container, styleContainer]}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}> {value}</Text>
  </View>
);


export default Information;
