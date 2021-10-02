import React, { useEffect, useRef, useState } from "react";
import Colors from "../../utils/styles";
import VeggieCard from "../../components/VeggieCard";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomHeaderButton from "../../components/customButtons/CustomHeaderButtons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { loadExternalStorageData } from "../../utils/helper";
import { resotre_past_order } from "../../Store/Actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, View, Text, Platform, FlatList } from "react-native";
import { flatListItemParser, saveLocalStorageData } from "../../utils/helper";
import Container from '../../components/Container';
import VegetableCard from '../../components/cards/VegetableCard';
import Sizes from "../../utils/sizes";

const Farm = ( { route, navigation }) => {
	const { name,  orders} = useSelector((state)=> state.farms.selectedFarm);
	const isFetching = useSelector((state)=> state.farms.fetching);
	
	return (
		<Container
			backButton
			title={name}
		>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={orders}
				refreshing={isFetching}
				onRefresh={ () => undefined}
				ListHeaderComponent={() =>(
					<View style={styles.textContainer}>
					</View>
				)}
				ItemSeparatorComponent={()=> <View style={styles.divider}/>}
				keyExtractor={(vegetable) => `vegetable-${vegetable.name}`}
				renderItem={({ item }) => ( <VegetableCard  vegetable={item} />)}
			/>
		</Container>
	);
};

const styles = StyleSheet.create({
	divider: {
		marginTop: Sizes.gutter
	},
});

export default Farm;
