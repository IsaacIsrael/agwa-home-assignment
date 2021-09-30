import React from "react";
import Farms from "../Screens/Farms";
import Farm from "../Screens/Farm";
import Store from "../Screens/Store";
import Cart from "../Screens/Cart";
import VeggieDesc from "../Screens/VeggieDesc";
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
				name='farms'
				component={Farms}
				options={{  headerShown: false }}
			/>
			<Screen
				name='farm'
				component={Farm}
				options={{ title: "Farm" }}
			/>
			<Screen
				name='store'
				component={Store}
				options={{ title: "Store" }}
			/>
			<Screen
				name='cart'
				component={Cart}
				options={{ title: "Cart" }}
			/>
			<Screen
				name='veggieDsec'
				component={VeggieDesc}
				options={{ title: "Plant" }}
			/>
		</Navigator>
	);
};

export default StoreNavigator;
