import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Container from '../../components/Container';
import FarmCard from "../../components/cards/FarmCard";
import Sizes from "../../utils/sizes";


const farms = [
	{
		id: 'farmA',		
		name: 'Farm A'
	},
	{
		id: 'farmB',
		name: 'Farm B'
	},
]

const Farms = () => {

	// useEffect(() => {
	// 	//TODO: I think the code is not so clear. Appear that we mix the 
	// 	// responsibility here. Maybe is a good idea to desegregate the 
	// 	// responsibility. I suggest creating a new object ( Class) 
	// 	// responsible to make the API calls (as a service pattern )
	// 	//Gets the categories from plant DB
	// 	const getCategories = async () => {
	// 		try {
	// 			const res = await axios.get(`${REACT_APP_AGWA_CATEGORIES}`);

	// 			dispatch(add_categories(res.data.categories));
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	};
	// 	getCategories();
	// }, []);

	// useEffect(() => {
	// 	//Gets all the plant info of the categories
	// 	const getPlantData = async () => {
	// 		try {
	// 		//TODO: I think the code is not so clear. Appear that we mix the 
	// 		// responsibility here. Maybe is a good idea to desegregate the 
	// 		// responsibility. I suggest creating a new object ( Class) 
	// 		// responsible to make the API calls (as a service pattern )
	// 			const allPlantData = await axios.get(`${REACT_APP_AGWA_PLANTS}`);
	// 			let dataToStore = {};

	// 			//TODO: We should revisit the API endpoint. This look to much and could be
	// 			// avoid at the API side.  Three loop one inside is not a good practices . 
	// 			for (let i = 0; i < categories.length; i++) {
	// 				let plantsArray = categories[i].plants;
	// 				for (let j = 0; j < plantsArray.length; j++) {
	// 					const foundPlant = allPlantData.data.plants.find(
	// 						(item) => item.id === plantsArray[j].id
	// 					);
	// 					if (foundPlant) {
	// 						dataToStore[plantsArray[j].id] = foundPlant;
	// 					}
	// 				}
	// 			}
	// 			dispatch(add_plants(dataToStore));
	// 			setIsLoading(false);
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	};

	// 	// TODO: Validate before

	// 	if (categories) {
	// 		getPlantData();
	// 	}
	// }, [categories]);

	return (
		<Container title="My Farms">
			<FlatList 
			data={farms}
			keyExtractor={(farm) => `farm-${farm.id}`}
			ItemSeparatorComponent={()=> <View style={styles.divider}/>}
			renderItem={({item}) => ( <FarmCard  farm={item}/> )}
		/>
		</Container>
	);
};

const styles = StyleSheet.create({
	divider: {
		marginTop: Sizes.gutter
	},
});

export default Farms;
