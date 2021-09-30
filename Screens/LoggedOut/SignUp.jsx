import React, { useEffect, useState } from "react";
import Colors from "../../utils/styles";
import CustomButton from "../../components/customButtons/CustomButton";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { isValidEmail } from "../../utils/helper";
import { sign_up } from "../../Store/Actions/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, TextInput, Text, Keyboard } from "react-native";
import Container from "../../components/Container";
import { StatusBar } from "expo-status-bar";
import Input from "../../components/inputs/Input";
import Sizes from "../../utils/sizes";
import StickBottomContainer from "../../components/StickBottomContainer";
import ErrorText from "../../components/texts/ErrorText";
import Button from "../../components/buttons/Button";
import authService from "../../services/auth.services";
import withInternetVerification from "../../hoc/withInternetVerification";

const SignUp = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState();
	const dispatch = useDispatch();

	const signUpHandler = async () => {
		Keyboard.dismiss();
		
		// TODO:  Move this logic for action
		if (!password || !confirmPassword || !email) {
			setErrorMessage("Please fill all fields");
			return;
		}  
		if (password != confirmPassword) {
			setErrorMessage("Passwords do not match");
			return;
		} 
		if (password && password.length < 6) {
			setErrorMessage("Password must be at least 6 characters");
			return;
		} 
		if (!isValidEmail(email)) {
			setErrorMessage("Please enter a valid email");
			return;
		} 

		const data = await authService.signUp({ email, password});
		const { error , email: userId , localId :  userToken} =  data ;
		
		if (error && error.message === "EMAIL_EXISTS") {
			setErrorMessage("Email already exists");
			return;
		} 
		
		dispatch( sign_up({ userId, userToken }));
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
				containerStyle={styles.inputContainer} 
				secureTextEntry={true} 
			/>
			<Input 
				label= 'Confirm Password'
				value={confirmPassword}
				onValueChange={setConfirmPassword}
				secureTextEntry={true} 
			/>
			{!!errorMessage && ( <ErrorText style={styles.errorText} >{errorMessage}</ErrorText> )}
			
			<StickBottomContainer>
				<Button
					title='Sign In'
					onClick={signUpHandler}
					style={styles.button}
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
});

export default withInternetVerification(SignUp);
