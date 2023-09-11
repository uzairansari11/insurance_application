import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";

export default function InsuranceOptionsSection({ title, data }) {
	return (
		<View>
			{title ? <Text style={styles.textHeading}>{title}</Text> : null}
			<View style={styles.newSection}>
				{data.length &&
					data.map((ele) => {
						return (
							<Card
								key={ele.id}
								id={ele.id}
								title={ele.title}
								IconName={ele.icon}
							/>
						);
					})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	newSection: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		columnGap: 7,
		rowGap: 10,
		paddingHorizontal: 8,
	},
	textHeading: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		fontSize: 16,
		fontWeight: "700",
	},
});
