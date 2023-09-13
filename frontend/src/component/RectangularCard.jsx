import { StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";

export default function RectangularCard({
	iconName,
	title,
	subtitle,
	iconColor,
	paddingVertical,
	iconSize,
}) {
	return (
		<Card.Title
			title={title}
			subtitle={subtitle}
			left={(props) => (
				<Avatar.Icon
					{...props}
					icon={iconName}
					style={styles.avatar}
					size={iconSize || 40}
					color={iconColor}
				/>
			)}
			style={[styles.card, { paddingVertical }]}
		/>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#ffffff",
		borderWidth: 1,
		width: "90%",
		alignSelf: "center",
		borderRadius: 15,
		borderColor: "#e0e0e0",
	},
	avatar: {
		borderWidth: 2,
		backgroundColor: "#E6E6FA",
		borderRadius: 8,
		borderWidth: 2,
		borderColor: "#ffffff",
	},
});
