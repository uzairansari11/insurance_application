import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TocButton from "./TocButton";
import ProgressBarComponent from "./ProgressBarComponent";

export default function ProfileComponent() {
	return (
		<View style={styles.container}>
			<View style={styles.profileSetup}>
				<Text style={{ fontSize: 16, fontWeight: "700" }}>
					Set up your profile
				</Text>
				<TocButton title={"Setup"} backgroundColor={"black"} textSize={12} />
			</View>
			<View>
				<ProgressBarComponent />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		flexDirection: "row",
		alignSelf: "center",
		marginTop: 20,
		height: 90,
		borderRadius: 20,
		padding: 10,
		backgroundColor: "#96B6C5",
		justifyContent: "space-between",
		alignItems: "center",
	},
	profileSetup: {
		gap: 10,
		paddingHorizontal: 4,
	},
});
