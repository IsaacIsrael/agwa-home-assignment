import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Platform, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Container from '../../components/Container';
import VegetableCard from '../../components/cards/VegetableCard';
import StoreCard from "../../components/cards/StoreCard";

import Colors from "../../utils/styles";
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
				ListFooterComponent={() =>(
					<>
						<View style={styles.divider}/>
						<StoreCard />
					</>
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
