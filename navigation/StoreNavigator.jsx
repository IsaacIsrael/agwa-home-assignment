import React from "react";
import Farm from "../Screens/LoggedIn/Farm";
import Store from "../Screens/LoggedIn/Store";
import Cart from "../Screens/Cart";
import VeggieDesc from "../Screens/LoggedIn/Vegetable";
import BottomTabs  from './BottomTabs'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Navigator, Screen} = createNativeStackNavigator();

const StoreNavigator = () => {
	return (
		<Navigator>
			<Screen
				name='root'
				component={BottomTabs}
				options={{  headerShown: false }}
			/>
			<Screen
				name='farm'
				component={Farm}
				options={{  headerShown: false }}
			/>
			<Screen
				name='store'
				component={Store}
				options={{ headerShown: false }}
			/>
			<Screen
				name='cart'
				component={Cart}
				options={{ title: "Cart" }}
			/>
			<Screen
				name='vegetable'
				component={VeggieDesc}
				options={{  headerShown: false }}
			/>
		</Navigator>
	);
};

export default StoreNavigator;
