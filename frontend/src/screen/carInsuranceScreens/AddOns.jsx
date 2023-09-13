import { Divider } from "@rneui/themed";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DetailsWithRightArrow from "../../component/DetailsWithRightArrow";
import TocButton from "../../component/TocButton";
import { INSURANCE_USER_DETAILS, PERSONAL_ACCIDENT } from "../../constants/constants";
export default function AddOns({ route, navigation }) {
	const [personalAccidentCover, setPersonalAccidentCover] = useState(false);
	return (
		<>
			<ScrollView style={styles.container}>
				<Text style={styles.addOnsText}>Select add-ons</Text>
				<Text style={styles.addOnsValid}>
					Add-ons are valid for {route?.params?.selectedTenure} year
				</Text>
				<View
					style={[
						styles.cardContainer,
						{ borderColor: personalAccidentCover ? "green" : "grey" },
					]}
				>
					<View>
						<DetailsWithRightArrow
							title={"Personal Accident cover"}
							leftIcon="handball"
						/>
					</View>
					<View>
						<Text>
							This add-on covers accidental injury or death of the owner (sum
							insured up to ₹15 lakh)
						</Text>
					</View>
					<Divider color="grey" width={1} style={styles.divider} />
					<View style={styles.addOn}>
						<Text> ₹ {PERSONAL_ACCIDENT * route?.params?.selectedTenure}</Text>
						<TocButton
							title={personalAccidentCover ? "Added" : "Add"}
							backgroundColor={"black"}
							width={"30%"}
							onPress={() => setPersonalAccidentCover(!personalAccidentCover)}
							paddingVertical={6}
							textSize={15}
						/>
					</View>
				</View>
			</ScrollView>
			<View style={styles.bottomSection}>
				<Text style={styles.totalAmount}>
					₹{" "}
					{personalAccidentCover
						? route?.params?.totalPrice +
						  PERSONAL_ACCIDENT * route?.params?.selectedTenure
						: route?.params?.totalPrice}
				</Text>
				<TocButton
					title={"Continue"}
					backgroundColor={"green"}
					width={"50%"}
					onPress={() => navigation.navigate(INSURANCE_USER_DETAILS)}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
	},
	addOnsText: {
		fontSize: 20,
		marginBottom: 10,
		marginTop: 20,
	},
	addOnsValid: {
		fontSize: 14,
		fontWeight: "800",
	},
	cardContainer: {
		borderWidth: 1,
		borderColor: "grey",
		paddingHorizontal: 8,
		borderRadius: 8,
		paddingVertical: 10,
		marginTop: 10,
	},
	divider: {
		marginTop: 20,
	},
	addOn: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 20,
	},
	bottomSection: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: "white",
	},
	totalAmount: {
		fontSize: 16,
		fontWeight: "700",
	},
});
