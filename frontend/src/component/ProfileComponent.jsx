import { StyleSheet, Text, View } from "react-native";
import ProgressBarComponent from "./ProgressBarComponent";
import TocButton from "./TocButton";
import { PERSONAL_INFO } from "../constants/constants";

export default function ProfileComponent({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.profileSetup}>
				<Text style={{ fontSize: 16, fontWeight: "700" }}>
					Set up your profile
				</Text>
				<TocButton
					title={"Setup"}
					backgroundColor={"black"}
					textSize={12}
					onPress={() => navigation.navigate(PERSONAL_INFO)}
				/>
			</View>
			<View>
				<ProgressBarComponent />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		flexDirection: "row",
		alignSelf: "center",
		marginTop: 20,
		height: 90,
		borderRadius: 20,
		padding: 10,
		backgroundColor: "#DBDFEA",
		justifyContent: "space-between",
		alignItems: "center",
	},
	profileSetup: {
		gap: 4,
		paddingHorizontal: 6,
	},
});
