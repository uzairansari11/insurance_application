import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function Card({ IconName, size, color, text }) {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons
				name={IconName || "block-helper"}
				size={size || 24}
				color={color || "black"}
			/>
			{text ? <Text style={styles.text}>{text}</Text> : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		width: 110,
		height: 85,
		borderRadius: 10,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		elevation: 5,
		shadowColor: "black",
		paddingHorizontal: 5,
		paddingVertical: 5,
	},
	text: {
		textAlign: "center",
		paddingHorizontal: 4,
		fontWeight: "700",
	},
});
