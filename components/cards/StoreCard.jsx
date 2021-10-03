import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

import Touchable from '../buttons/Touchable';
import Sizes from '../../utils/sizes';

import Colors from "../../utils/styles";


const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    paddingVertical: Sizes.gutter,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: Sizes.gutter,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    marginTop: Sizes.gutter,
    fontSize: Sizes.smallFont,
  },
});


const StoreCard = ({ vegetable }) => {
  const navigation = useNavigation();
  
  const onCardPress = () =>{
    navigation.navigate("store");
  }

  return (
    <Touchable
      style={ styles.button }
      onPress={onCardPress}
      activeOpacity={0.8}
    >
      <View style={styles.contentContainer}>
        <FontAwesome5 name={'plus-circle'} size={Sizes.bigFont} color={Colors.primary} />
        <Text style={styles.title}>Add more vegetables </Text>
      </View>
    </Touchable>
  );
};

export default StoreCard;
