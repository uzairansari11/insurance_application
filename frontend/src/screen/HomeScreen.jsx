import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AvatarComponent from "../component/AvatarComponent";
import InsuranceOptionsSection from "../component/InsuranceOptionsSection";
import InsuranceTopSection from "../component/InsuranceTopSection";
import ProfileComponent from "../component/ProfileComponent";
import Welcome from "../component/Welcome";
import { MAINTAIN_OPTIONS, NEW_OPTIONS } from "../constants/constants";
import Trending from "../component/Trending";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.welcomeMainContainer}>
				<View style={styles.welcomeSubContainer}>
					<Welcome name={"uzair ansari"} />
					<AvatarComponent
						label={"UZAIR ANSARI"}
						size={35}
						color={"white"}
						backgroundColor={"black"}
					/>
				</View>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ProfileComponent />
				<InsuranceTopSection />
				<InsuranceOptionsSection
					data={NEW_OPTIONS}
					title={"Buying a new car?"}
				/>
				<InsuranceOptionsSection
					data={MAINTAIN_OPTIONS}
					title={"Maintain your car"}
				/>
				{/* <Trending headingTitle={"Trending now @Insurance "} /> */}

			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	welcomeMainContainer: {
		// position: "absolute",
		// top: 0,
		// left: 0,
		width: "100%",
	},
	welcomeSubContainer: {
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		height: 50,
		alignItems: "center",
		paddingHorizontal: 20,
	},
});
