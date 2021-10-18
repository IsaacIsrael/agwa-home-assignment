import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

import Container from "../../components/Container";
import Information from "../../components/Information";

import withInternetVerification from "../../hoc/withInternetVerification";
import { windowWidth } from "../../utils/system";
import Sizes from '../../utils/sizes';
import Colors from "../../utils/styles";
import StickBottomContainer from "../../components/StickBottomContainer";
import Button from "../../components/buttons/Button";


const  defaultImage = require ('../../assets/default-image.jpeg');
const imageUrl = "https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/";

const styles = StyleSheet.create({
	image: {
		width: windowWidth - (Sizes.gutter * 2),
		aspectRatio:  1,
	},
	title: {
		fontSize: Sizes.bigFont,
		textAlign: "center",
		marginVertical: Sizes.gutter,
	},
	description: {
		fontSize: Sizes.smallFont,
		color: Colors.textColor,
		marginBottom: Sizes.gutter,
	},
	information:{
		marginBottom: Sizes.gutter * 0.5,
	},
	table: {
		width: "100%",
		justifyContent: "center",
		alignItems: "stretch",
		marginTop: Sizes.gutter * 0.5,
	},
	tableTitleWrapper: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: Sizes.gutter * 0.5,
		backgroundColor: Colors.secondary,
	},
	tableTitle: {
		flex: 1, 
		textAlign: "center",
		color: Colors.white,
	},
	tableContentWrapper: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		paddingVertical: Sizes.gutter * 0.5,
		borderTopWidth: 2,
		borderColor: Colors.secondary,
	},
	tableContent: {
		flex: 1,
		textAlign: "center",
	},
	tableContentTitle: {
		fontWeight: "bold",
	},
	button:{
		marginTop: Sizes.gutter,
	},
});


const VeggieDesc = ({  
	route: { 
		params : { vegetable, showStoreButton } 
	} 
} ) => (
	<Container
		backButton
		title={vegetable.name}
	>
		<ScrollView showsVerticalScrollIndicator={false} >
			<Image
					style={styles.image}
					source={{ uri: `${imageUrl}${vegetable.imageId}@3x.jpg` }}
					defaultSource={defaultImage}
				/>
				<Text style={styles.title}>{vegetable.name}</Text>
				<Text style={styles.description}>{vegetable.description}</Text>
				<Information 
					label="Life Cycle"
					value={vegetable.lifeCycle}
					styleContainer={styles.information}
				/>
				<Information 
					label="Yield"
					value={vegetable.yield}
					styleContainer={styles.information}
				/>
				<Information 
					label="Seed to crop"
					value={vegetable.seedToCrop}
					styleContainer={styles.information}
				/>
				<Information 
					label="Nutritional Facts"
					value={vegetable.nutritionFacts.portionInfo}
					styleContainer={styles.information}
				/>
			<View style={styles.table}>
				<View style={styles.tableTitleWrapper}>
					<Text style={styles.tableTitle}>Nutrients</Text>
					<Text style={styles.tableTitle}>Amount</Text>
					<Text style={styles.tableTitle}>RDA (%)</Text>
				</View>
				{vegetable.nutritionFacts.items.map((item, index) => {
					return (
						<View key={index.toString()} style={styles.tableContentWrapper}>
							<Text style={[styles.tableContent,  styles.tableContentTitle]}>{item.key}</Text>
							<Text style={styles.tableContent}>{item.nutrientValue}</Text>
							<Text style={styles.tableContent}>{item.percentageOfRDA}</Text>
						</View>
					);
				})}
			</View>
		</ScrollView>
		{showStoreButton && (
			<StickBottomContainer styles={styles.button}>
				<Button
					title='Add to Cart'
					onClick={()=> undefined}
				/>
			</StickBottomContainer>
		)}
	</Container>
);



export default withInternetVerification(VeggieDesc);
