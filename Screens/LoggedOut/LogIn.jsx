import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import Input from '../../components/inputs/Input';
import authService from '../../services/auth.services';
import ErrorText from '../../components/texts/ErrorText';
import Button from "../../components/buttons/Button";

import Colors from "../../utils/styles";
import Sizes from '../../utils/sizes';

import { isValidEmail } from "../../utils/helper";
import { log_in } from "../../Store/Actions/auth";
import StickBottomContainer from "../../components/StickBottomContainer";
import Container from '../../components/Container';
import { StatusBar } from "expo-status-bar";
import withInternetVerification from "../../hoc/withInternetVerification";

const LogIn = ({ navigation }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [errorMessage, setErrorMessage] = useState("");

	const dispatch = useDispatch();


	const onLogInPress = async () => {
		Keyboard.dismiss();
		// TODO:  Move this logic for action
		if (!password || !email) {
			setErrorMessage("Please fill all fields");
			return;
		}  
		
		if (!isValidEmail(email)) {
			setErrorMessage("Please enter a valid email");
			return;
		}
			
		const data = await authService.login({ email, password});
		const { registered, email: userId , localId :  firebaseUserId} =  data ;
		
		if (!registered) {
			setErrorMessage("Please Sign Up");
			return;
		} 
		
		dispatch( log_in({ userId, firebaseUserId, }) );
	};

	const onSignInPress = () => {
		navigation.navigate("signUp");
	};

	return (
		<Container>
			<Ionicons name='leaf' size={70} style={styles.icon} />
			<Input 
				label= 'Email'
				value={email}
				onValueChange={setEmail}
				containerStyle={styles.inputContainer} 
			/>
			<Input 
				label= 'Password'
				value={password}
				onValueChange={setPassword}
				secureTextEntry={true} 
			/>
			{!!errorMessage && ( <ErrorText style={styles.errorText} >{errorMessage}</ErrorText> )}
			
			<StickBottomContainer>
				<Button
					title='Log In'
					onClick={onLogInPress}
					style={styles.button}
				/>
				<Button
					title='Sign In'
					onClick={onSignInPress}
					type="outline"
				/>
			</StickBottomContainer>
		</Container>
	);
};

const styles = StyleSheet.create({
	icon: {
		color: Colors.primary,
		alignSelf: 'center',
		marginBottom: Sizes.gutter * 2,
	},
	inputContainer:{
		marginBottom: Sizes.gutter,
	},
	errorText: {
		marginTop: Sizes.gutter * 0.25,
	},
	button:{
		marginBottom: Sizes.gutter,
	}
});

export default withInternetVerification(LogIn);
