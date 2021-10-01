import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";

import Touchable from '../buttons/Touchable';
import Sizes from '../../utils/sizes';

import Colors from "../../utils/styles";

const  defaultImage = require ('../../assets/default-image.jpeg');
const imageUrl = "https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    paddingVertical: Sizes.gutter,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: Sizes.gutter,
  },
  title: {
    fontSize: Sizes.regularFont,
  },
  subtitle: {
    marginTop: Sizes.gutter *0.5,
    fontSize: Sizes.smallFont,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
		height: 80,
    aspectRatio: 1,
	},
  textWrapper:{
    marginLeft: Sizes.gutter,
  }
});


const VegetableCard = ({ vegetable }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const onCardPress = () =>{
    navigation.navigate("vegetable", { vegetable });
  }

  return (
    <Touchable
      style={ styles.button }
      onPress={onCardPress}
      activeOpacity={0.8}
    >
      <View style={styles.contentContainer}>
        <Image
					style={styles.image}
					source={{ uri:  `${imageUrl}${vegetable.imageId}@2x.jpg` }}
          defaultSource={defaultImage}
				/>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{vegetable.name} </Text>
          <Text style={styles.subtitle}>{`Amount: ${vegetable.amount}`} </Text>
        </View>
      </View>
    </Touchable>
  );
};

export default VegetableCard;
