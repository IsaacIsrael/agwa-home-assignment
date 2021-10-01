import React, { useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Container from '../../components/Container';
import FarmCard from "../../components/cards/FarmCard";
import Sizes from "../../utils/sizes";
import { useDispatch, useSelector } from "react-redux";
import { Creators as vegetableCreator } from '../../Store/duckers/vegetable'	



const Farms = () => {
	const farms = useSelector( (state)=> state.farms.devices)
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(vegetableCreator.setVegetables());
	})

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
