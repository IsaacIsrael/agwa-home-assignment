import React from "react";
import { StyleSheet,Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from '../utils/styles';



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "90%",
	},
  icon: {
		color: Colors.primary,
	},
  textWrapper: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 24,
	},
	text: {
		color: Colors.textColor,
		fontSize: 20,
		textAlign: "center",
	},
});

const NotFoundInternet = () => (
  <View style={styles.container}>
    <Ionicons
      name='leaf'
      size={80}
      style={styles.icon}
      color={Colors.primary}
    />
    <View style={styles.textWrapper}>
      <Text style={styles.text}>Internet connection was not found.</Text>
      <Text style={styles.text}>Please turn it on :)</Text>
    </View>
  </View>
)

export default NotFoundInternet;
