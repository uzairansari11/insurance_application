import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DetailsWithRightArrow from "../component/DetailsWithRightArrow";
import TocButton from "../component/TocButton";
import { PROFILE_SECTION } from "../constants/constants";
export default function ProfileScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.profileOptions}>
					{PROFILE_SECTION.map((ele) => {
						return <DetailsWithRightArrow key={ele.id} {...ele} />;
					})}
				</View>
				<View
					style={{
						paddingVertical: 30,
						flex: 1,
						alignItems: "center",
					}}
				>
					<TocButton title="Log out" backgroundColor="black" width="80%" />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	profileOptions: {
		flex: 1,
		rowGap: 8,
	},
});
