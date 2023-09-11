import { StyleSheet, Text } from "react-native";

export default function Welcome({ name }) {
	return (
		<Text style={styles.welcomeText}>
			Welcome,<Text style={styles.userName}> {name}</Text>
		</Text>
	);
}

const styles = StyleSheet.create({
	welcomeText: {
		fontSize: 14,
	},
	userName: {
		fontSize: 16,
		fontWeight: "700",
		textTransform: "capitalize",
	},
});
