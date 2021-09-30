import React, { useState } from "react";
import { StyleSheet, Keyboard, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import Container from '../../components/Container';
import Input from '../../components/inputs/Input';
import ErrorText from '../../components/texts/ErrorText';
import StickBottomContainer from "../../components/StickBottomContainer";
import Button from "../../components/buttons/Button";

import Colors from "../../utils/styles";
import Sizes from '../../utils/sizes';
import { Creators as userCreator } from '../../Store/duckers/user'	

import withInternetVerification from "../../hoc/withInternetVerification";

const LogIn = ({ navigation }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const isFetching = useSelector(({user}) => user.fetching);
	const errorMessage = useSelector(({user}) => user.error);

	const dispatch = useDispatch();


	const onLogInPress = async () => {
		Keyboard.dismiss();
			
		dispatch( userCreator.logIn(email, password ));
	};

	const onSignInPress = () => {
		dispatch( userCreator.reset());
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
			
			<ActivityIndicator 
				color={Colors.primary} 
				size="large" 
				animating={isFetching}
				style={styles.loading}
				/>

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
	container:{
		paddingTop: Sizes.gutter * 4,
	},
	icon: {
		color: Colors.primary,
		alignSelf: 'center',
		marginBottom: Sizes.gutter * 4,
	},
	inputContainer:{
		marginBottom: Sizes.gutter,
	},
	errorText: {
		marginTop: Sizes.gutter * 0.25,
	},
	button:{
		marginBottom: Sizes.gutter,
	},
	loading:{
		marginTop: 20,
	}
});

export default withInternetVerification(LogIn);
