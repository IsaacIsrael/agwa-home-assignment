import React, { useState } from "react";
import { StyleSheet, Keyboard, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import Container from "../../components/Container";
import Input from "../../components/inputs/Input";
import ErrorText from "../../components/texts/ErrorText";
import StickBottomContainer from "../../components/StickBottomContainer";
import Button from "../../components/buttons/Button";

import Colors from "../../utils/styles";
import Sizes from "../../utils/sizes";
import { Creators as userCreator } from '../../Store/duckers/user'	

import authService from "../../services/auth.services";
import { isValidEmail } from "../../utils/helper";

import withInternetVerification from "../../hoc/withInternetVerification";

const SignUp = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const dispatch = useDispatch();

	const isFetching = useSelector(({user}) => user.fetching);
	const errorMessage = useSelector(({user}) => user.error);

	const onBackPress = () =>{
		dispatch(userCreator.reset());
	}
		
	const signUpHandler = async () => {
		Keyboard.dismiss();
		
		dispatch(userCreator.signUp(email,password,confirmPassword));
	};


	return (
		<Container
		 backButton
		 onBack={onBackPress}
		>
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

			<ActivityIndicator
				color={Colors.primary} 
				size="large" 
				animating={isFetching}
				style={styles.loading}
				/>
			
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
	loading:{
		marginTop: 20,
	}
});

export default withInternetVerification(SignUp);
