import React from "react";
import { StyleSheet, View } from "react-native";
import AvatarComponent from "../component/AvatarComponent";
import ProfileComponent from "../component/ProfileComponent";
import Welcome from "../component/Welcome";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.welcomeMainContainer}>
				<View style={styles.welcomeSubContainer}>
					<Welcome name={"uzair ansari"} />
					<AvatarComponent
						label={"UZAIR ANSARI"}
						size={35}
						color={"white"}
						backgroundColor={"black"}
					/>
				</View>
			</View>
			<ProfileComponent />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	welcomeMainContainer: {
		// position: "absolute",
		// top: 0,
		// left: 0,
		width: "100%",
	},
	welcomeSubContainer: {
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		height: 50,
		alignItems: "center",
		paddingHorizontal: 20,
	},
});
