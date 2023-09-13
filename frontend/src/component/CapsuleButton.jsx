/* This is a button component , use for capsule shape buttons */
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CapsuleButton({
	title,
	isActive,
	onPress,
	backgroundColor,
}) {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				isActive
					? ({ backgroundColor: backgroundColor } || styles.isActive)
					: styles.isInactive,
			]}
			onPress={onPress}
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
		alignSelf: "flex-start",
		margin: 4,
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
