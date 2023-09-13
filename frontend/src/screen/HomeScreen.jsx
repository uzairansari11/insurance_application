import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import AvatarComponent from "../component/AvatarComponent";
import InsuranceOptionsSection from "../component/InsuranceOptionsSection";
import InsuranceTopSection from "../component/InsuranceTopSection";
import ProfileComponent from "../component/ProfileComponent";
import Welcome from "../component/Welcome";
import {
	INSURANCE_OPTIONS,
	MAINTAIN_OPTIONS,
	NEW_OPTIONS,
	PROFILE,
} from "../constants/constants";

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.welcomeMainContainer}>
				<View style={styles.welcomeSubContainer}>
					<Welcome name={"uzair ansari"} />
					<TouchableOpacity onPress={() => navigation.navigate(PROFILE)}>
						<AvatarComponent
							label={"UZAIR ANSARI"}
							size={35}
							color={"white"}
							backgroundColor={"black"}
						/>
					</TouchableOpacity>
				</View>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				<ProfileComponent navigation={navigation} />

				<InsuranceTopSection data={INSURANCE_OPTIONS} navigation={navigation} />
				<InsuranceOptionsSection
					data={NEW_OPTIONS}
					title={"Buying a new car?"}
				/>
				<InsuranceOptionsSection
					data={MAINTAIN_OPTIONS}
					title={"Maintain your car"}
				/>
				{/* <Trending headingTitle={"Trending now @Insurance "} /> */}
				<Text style={styles.textHeading}>Trending now @Insurance</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	welcomeMainContainer: {
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
	textHeading: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		fontSize: 16,
		fontWeight: "700",
	},
});
