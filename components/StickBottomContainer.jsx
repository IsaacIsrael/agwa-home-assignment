import React from "react";
import { StyleSheet,Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Sizes from '../utils/sizes';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: Sizes.gutter,
    paddingRight: Sizes.gutter,
    justifyContent: 'flex-end',
	},
});

const StickBottomContainer = ({ children}) => {
	const { bottom } = useSafeAreaInsets();
	return (
		<View style={[
			styles.container,
			{ paddingBottom : Sizes.gutter + bottom  }
		]}>
			{children}
		</View>
	);
};

export default StickBottomContainer;
