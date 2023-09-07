import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CapsuleButton({ title, isActive }) {
	return (
		<TouchableOpacity
			style={[styles.container, isActive ? styles.isActive : styles.isInactive]}
		>
			<Text
				style={[
					styles.text,
					isActive ? { color: "white" } : { color: "black" },
				]}
			>
				{title || "Default Text"}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		elevation: 5,
		shadowColor: "black",
	},
	isActive: {
		backgroundColor: "black",
	},
	isInactive: {
		backgroundColor: "white",
	},

	text: {
		textAlign: "center",
		fontSize: 16,
	},
});
