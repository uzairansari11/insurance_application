import { ScrollView, StyleSheet, Text, View } from "react-native";
import InsuranceOptionsSection from "../component/InsuranceOptionsSection";
import { VEHICLES_RELATED } from "../constants/constants";

export default function Discover() {
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Do more with insurance</Text>

			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={[styles.headingText, { fontSize: 16 }]}>
					Your vehicles
				</Text>
				<InsuranceOptionsSection data={VEHICLES_RELATED} />
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
