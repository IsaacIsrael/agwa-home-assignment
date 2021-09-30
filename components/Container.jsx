import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Sizes from '../utils/sizes';
import Touchable from "./buttons/Touchable";
import { View } from "react-native";
import BackButton from "./buttons/BackButton";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "stretch",
		backgroundColor: "white",
	},
	header:{
		paddingHorizontal:  Sizes.gutter * 0.5,
		paddingBottom:  Sizes.gutter * 0.5,
		height: Sizes.gutter * 2,
	},
	content:{
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "stretch",
		paddingHorizontal:  Sizes.gutter,
	}
});

const Container = ({ style , children, backButton= false, onBack}) => {
	return (
		<SafeAreaView style={styles.container}>
      <StatusBar />
			<View style={styles.header}>
				{backButton && <BackButton onBack={onBack}/>}
			</View>
			<View style={[styles.content,style]}>
				{children}
			</View>
		</SafeAreaView>
	);
};

export default Container;
