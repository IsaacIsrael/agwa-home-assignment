import React, { useEffect, useState } from "react";
import _map from 'lodash/map'
import _compact from 'lodash/compact'

import { SectionList, StyleSheet, Text, View } from "react-native";
import Container from '../../components/Container';
import categoriesService from "../../services/categories.services";
import { useSelector } from "react-redux";
import VegetableCard from "../../components/cards/VegetableCard";
import Sizes from "../../utils/sizes";
import Colors from "../../utils/styles";

const Store = ({ route, navigation }) => {
	const [categories, setCategories] = useState([]);
	const [isFetching, setIsFetching] = useState(true);
	const plants = useSelector((state)=>state.vegetables.plants);

	const fetchCategories  = async ()=>{
		try{
			setIsFetching(true);
			const response = await categoriesService.fetchAll();

			const categories = _map(response.categories, (category)=>{
				const result  = _map(category.plants, (plant) => plants?.find( (item)=> item.id === plant.id) );
				const data = _compact(result);
				return {
					title: category.name,
					data : data,
				}
			})
			setCategories(categories);
		}
		catch(error){
			console.log('Error: ',  error);
		} finally{
			setIsFetching(false);
		}
	};

	useEffect(()=>{
		fetchCategories();
	},[])

	const showVeggieDesc = (elementId) => {
		navigation.navigate("veggieDsec", {
			id: elementId,
			cart: route.params.cart,
		});
	};

	return (
		<Container
			backButton
			title="Store"
		>
			<SectionList
				showsVerticalScrollIndicator={false}
				sections={categories}
				refreshing={isFetching}
				onRefresh={ () => undefined}
				keyExtractor={(item, index) => item + index}
				ItemSeparatorComponent={()=> <View style={styles.divider}/>}
				keyExtractor={(vegetable) => `vegetable-${vegetable.name}`}
				renderItem={({ item }) => ( <VegetableCard  vegetable={item} showStoreButton={true} />)}
				renderSectionHeader={({ section: { title } }) => ( <Text style={styles.header}>{title}</Text>)}
    />
		</Container>
	);
};

const styles = StyleSheet.create({
	header:{
		fontSize: Sizes.bigFont,
		backgroundColor:  Colors.white,
		paddingVertical:  Sizes.gutter,
	},
	divider: {
		marginTop: Sizes.gutter
	},
});

export default Store;
