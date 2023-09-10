import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MyCarousel } from "./MyCarousel";

export default function Trending({ headingTitle }) {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>{headingTitle}</Text>
			<MyCarousel
				entries={[
					{
						youtubeId: "https://youtu.be/fHE7lOkw-gs?si=_5Z0aCy2_IHcsNQ1",
					},
				]}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#452c63",
		paddingHorizontal: 16,
		justifyContent: "center",
		paddingVertical: 10,
		marginTop: 20,
	},
	heading: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
});
