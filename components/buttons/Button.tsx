import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/styles";
import Touchable from './Touchable';
import Sizes from '../../utils/sizes';

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    paddingVertical: Sizes.gutter,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
  },
  buttonOutline: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  text: {
    fontSize: Sizes.buttonFont,
  },
  textPrimary: {
    color: Colors.white,
  },
  textOutline: {
    color: Colors.primary,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const TYPE = Object.freeze({
  PRIMARY: 'primary',
  OUTLINE: 'outline',
});

const buttonStyle = new Map([
  [TYPE.PRIMARY, styles.buttonPrimary],
  [TYPE.OUTLINE, styles.buttonOutline],
]);

const textStyle = new Map([
  [TYPE.PRIMARY, styles.textPrimary],
  [TYPE.OUTLINE, styles.textOutline],
]);


const Button = ({ style, Icon, onClick, title, type }) => {
  return (
    <Touchable
      style={[
        styles.button,
        (buttonStyle.get(type) || styles.buttonPrimary)
        , style
      ]}
      onPress={onClick}
      activeOpacity={0.8}
    >
      <View style={styles.contentContainer}>
        {Icon && (< Icon style={styles.icon} />)}
        <Text style={[
          styles.text,
          (textStyle.get(type) || styles.textPrimary)
        ]}>
          {title}
        </Text>
      </View>
    </Touchable>
  );
};

export default Button;
