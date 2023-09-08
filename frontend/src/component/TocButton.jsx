import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TocButton({
	title,
	onPress,
	disabled,
	backgroundColor,
	textSize,
}) {
	return (
		<TouchableOpacity
			style={[
				styles.buttonContainer,
				disabled
					? styles.disabledBackground
					: { backgroundColor } || styles.enabledBackground,
			]}
			onPress={onPress}
			disabled={disabled}
		>
			<Text
				style={{
					textAlign: "center",
					color: "white",
					fontSize: textSize || 20,
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: "80%",
		paddingVertical: 10,
		borderRadius: 6,
		alignSelf: "center",
	},
	enabledBackground: {
		backgroundColor: "#2089dc",
	},
	disabledBackground: {
		backgroundColor: "#e5e5e5",
	},

});
