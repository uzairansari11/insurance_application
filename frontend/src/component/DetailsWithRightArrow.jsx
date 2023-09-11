import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function DetailsWithRightArrow({ leftIcon, title, rightIcon }) {
	return (
		<View style={styles.container}>
			<View style={styles.textIcon}>
				<MaterialCommunityIcons name={leftIcon} size={30} />
				<Text style={styles.text}>{title}</Text>
			</View>
			<View>
				<MaterialCommunityIcons name={rightIcon} size={26} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 10,
		alignItems: "center",
		
	},
	textIcon: {
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
	},
	text: {
		fontSize: 16,
	},
});
