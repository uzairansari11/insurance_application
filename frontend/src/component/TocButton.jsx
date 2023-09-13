/* This is a custom TouchableOpacity button  */

import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TocButton({
	title,
	onPress,
	disabled,
	backgroundColor,
	textSize,
	width,
	marginTop,
	paddingVertical,
	textColor,
}) {
	return (
		<TouchableOpacity
			style={[
				styles.buttonContainer,
				disabled
					? styles.disabledBackground
					: { backgroundColor } || styles.enabledBackground,
				{ width: width || "100%" },
				{ marginTop: marginTop },
				{ paddingVertical: paddingVertical || 10 },
			]}
			onPress={onPress}
			disabled={disabled}
		>
			<Text
				style={{
					textAlign: "center",
					color: textColor || "white",
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
