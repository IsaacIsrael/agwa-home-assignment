import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../utils/styles";


// TODO:  You should use destructuring
const CustomButton = (props) => {
	const onPressHandler = () => {
		props.pressHandler();
	};

	return (
		<View>
				{/* TODO: In the pass I had a problem with TouchableOpacity in Android.  
							We should double check that everything is working  
							*/}
			<TouchableOpacity
				style={[styles.container, props.customStyle]}
				onPress={onPressHandler}
				activeOpacity={0.3}
			>
				<View style={styles.contentContainer}>
					{/* TODO:  Just change a little bit for the code for  `isImage && (...) ` */}
					{/* TODO: Instead of using isImage I recommend to create a props Icon */}
					{props.isImage ? (
						<Ionicons name='leaf' size={35} style={styles.image} />
					) : null}
					<Text style={styles.text}>{props.title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		height: 48,
		width: 300,
		backgroundColor: Colors.primary,
		borderRadius: 10,
		elevation: 5,
	},
	text: {
		color: "white",
		fontSize: 24,
	},
	image: {
		color: "white",
	},
	contentContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});

export default CustomButton;
