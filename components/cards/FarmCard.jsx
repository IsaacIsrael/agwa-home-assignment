import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";
import { FontAwesome5 } from '@expo/vector-icons';

import Touchable from '../buttons/Touchable';
import Sizes from '../../utils/sizes';

import Colors from "../../utils/styles";
import { Creators as farmCreator } from '../../Store/duckers/farm'	

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    paddingVertical: Sizes.gutter,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: Sizes.gutter,
  },
  text: {
    marginLeft: Sizes.gutter,
    fontSize: Sizes.bigFont,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
   
  },
});


const FarmCard = ({ farm }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const onCardPress = () =>{
    dispatch(farmCreator.setSelectedFarm(farm));
    navigation.navigate("farm", { farm: farm.id });
  }
  return (
    <Touchable
      style={ styles.button }
      onPress={onCardPress}
      activeOpacity={0.8}
    >
      <View style={styles.contentContainer}>
        <FontAwesome5 name={'seedling'} size={Sizes.bigFont} color={Colors.primary} />
        <Text style={styles.text}>{farm.name} </Text>
      </View>
    </Touchable>
  );
};

export default FarmCard;
