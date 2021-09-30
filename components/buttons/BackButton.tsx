import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../utils/styles";
import Touchable from './Touchable';
import Sizes from '../../utils/sizes';
import { useNavigation } from "@react-navigation/core";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
  },
  text: {
    fontSize: Sizes.buttonFont,
  },
  contentContainer: {
    flexDirection: "row",
  },
});

const BackButton = ({ style, onBack }) => {
  const navigation = useNavigation();

  const onButtonPress = () => {

    if (navigation.canGoBack()) {
      onBack && onBack();
      navigation.goBack();
    }
  }

  return (
    <Touchable
      style={styles.button}
      onPress={onButtonPress}
      activeOpacity={0.8}
    >
      <View style={styles.contentContainer}>
        <Ionicons name='chevron-back-outline' size={20} />
        <Text style={styles.text}> Back </Text>
      </View>
    </Touchable>
  );
};

export default BackButton;
