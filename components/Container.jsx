import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Sizes from '../utils/sizes';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "stretch",
		backgroundColor: "white",
		paddingHorizontal:  Sizes.gutter,
	},
});

const Container = ({ children}) => {
	return (
		<SafeAreaView style={styles.container }>
      <StatusBar />
			{children}
		</SafeAreaView>
	);
};

export default Container;
