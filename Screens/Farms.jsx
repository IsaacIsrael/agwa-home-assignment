import React, { useEffect, useState } from "react";
import axios from "axios";
import Colors from "../utils/styles";
import CustomButton from "../components/customButtons/CustomButton";
import CustomHeaderButton from "../components/customButtons/CustomHeaderButtons";
import { log_out } from "../Store/Actions/auth";
import { add_plants } from "../Store/Actions/plants";
import { useDispatch, useSelector } from "react-redux";
import { add_categories } from "../Store/Actions/categories";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import {
	REACT_APP_AGWA_CATEGORIES,
	REACT_APP_AGWA_PLANTS,
} from "../utils/database";

const Farms = (props) => {
	// TODO:  You should use destructuring
	const { navigation } = props;
	const [isLoading, setIsLoading] = useState(true);
	const categories = useSelector((state) => state.categories.allCategories);
	const dispatch = useDispatch();

	const goToFarmAHandler = () => {
		navigation.navigate("farm", {
			farm: "farmA",
		});
	};

	const goToFarmBHandler = () => {
		navigation.navigate("farm", {
			farm: "farmB",
		});
	};

	const logOutHandler = () => {
		dispatch(log_out());
	};

	{/* TODO: Try to move this logic to  Store Navigator with a component.(DRY)*/}
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title='Logout'
						iconName={Platform.OS === "android" ? "md-exit" : "ios-exit"}
						onPress={logOutHandler}
					/>
				</HeaderButtons>
			),
		});
	}, []);

	useEffect(() => {
		//TODO: I think the code is not so clear. Appear that we mix the 
		// responsibility here. Maybe is a good idea to desegregate the 
		// responsibility. I suggest creating a new object ( Class) 
		// responsible to make the API calls (as a service pattern )
		//Gets the categories from plant DB
		const getCategories = async () => {
			try {
				const res = await axios.get(`${REACT_APP_AGWA_CATEGORIES}`);

				dispatch(add_categories(res.data.categories));
			} catch (err) {
				console.error(err);
			}
		};
		getCategories();
	}, []);

	useEffect(() => {
		//Gets all the plant info of the categories
		const getPlantData = async () => {
			try {
			//TODO: I think the code is not so clear. Appear that we mix the 
			// responsibility here. Maybe is a good idea to desegregate the 
			// responsibility. I suggest creating a new object ( Class) 
			// responsible to make the API calls (as a service pattern )
				const allPlantData = await axios.get(`${REACT_APP_AGWA_PLANTS}`);
				let dataToStore = {};

				//TODO: We should revisit the API endpoint. This look to much and could be
				// avoid at the API side.  Three loop one inside is not a good practices . 
				for (let i = 0; i < categories.length; i++) {
					let plantsArray = categories[i].plants;
					for (let j = 0; j < plantsArray.length; j++) {
						const foundPlant = allPlantData.data.plants.find(
							(item) => item.id === plantsArray[j].id
						);
						if (foundPlant) {
							dataToStore[plantsArray[j].id] = foundPlant;
						}
					}
				}
				dispatch(add_plants(dataToStore));
				setIsLoading(false);
			} catch (err) {
				console.error(err);
			}
		};

		// TODO: Validate before

		if (categories) {
			getPlantData();
		}
	}, [categories]);

	return (
		<View style={styles.container}>
			{isLoading ? (
				<ActivityIndicator
					style={styles.loader}
					size='large'
					color={Colors.primary}
				/>
			) : (
				<>
					<View stlye={styles.textContainer}>
						<Text style={styles.text}>Select your farm:</Text>
					</View>
					<View style={styles.buttonsContainer}>
						{/* //TODO: Create one component for this part (DRY).  */}
						<View style={styles.buttonContainer}>
							<CustomButton
								title='Farm A'
								pressHandler={goToFarmAHandler}
								isImage={true}
							/>
						</View>
						{/* //TODO: Create one component for this part (DRY).  */}
						<View style={styles.buttonContainer}>
							<CustomButton
								title='Farm B'
								pressHandler={goToFarmBHandler}
								isImage={true}
							/>
						</View>
					</View>
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "white",
	},
	buttonContainer: {
		height: 68,
		marginVertical: 28,
	},
	text: {
		color: Colors.textColor,
		fontSize: 24,
		marginVertical: 20,
	},
	textContainer: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		height: "10%",
	},
	buttonsContainer: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		height: "90%",
	},
	loader: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Farms;
