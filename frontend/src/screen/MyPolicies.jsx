import { ScrollView, StyleSheet, Text, View } from "react-native";
import InsuranceTopSection from "../component/InsuranceTopSection";

export default function SettingsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Get insurance</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<InsuranceTopSection />
				<Text style={styles.headingText}>Recommended for you</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headingText: {
		paddingHorizontal: 20,
		fontSize: 18,
		fontWeight: "500",
		paddingVertical: 15,
	},
});
