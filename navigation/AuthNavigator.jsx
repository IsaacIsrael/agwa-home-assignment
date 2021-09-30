import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../Screens/LoggedOut/LogIn";
import SignUp from "../Screens/LoggedOut/SignUp";
const AuthScreenStack = createNativeStackNavigator();

const AuthNavigator = () => {
	return (
		<AuthScreenStack.Navigator>
			<AuthScreenStack.Screen
				name='logIn'
				component={LogIn}
				options={{ title: "" }}
			/>
			<AuthScreenStack.Screen
				name='signUp'
				component={SignUp}
				options={{ title: "" }}
			/>
		</AuthScreenStack.Navigator>
	);
};

export default AuthNavigator;
