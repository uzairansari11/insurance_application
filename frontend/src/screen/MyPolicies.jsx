import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import InsuranceTopSection from "../component/InsuranceTopSection";
import InsuranceOptionsSection from "../component/InsuranceOptionsSection";
import { MAINTAIN_OPTIONS, NEW_OPTIONS } from "../constants/constants";

export default function SettingsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Get insurance</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<InsuranceTopSection />

				<Text style={styles.headingText}>Recommended for you</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headingText: {
		paddingHorizontal: 20,
		fontSize: 18,
		fontWeight: "500",
		paddingVertical: 15,
	},
});
