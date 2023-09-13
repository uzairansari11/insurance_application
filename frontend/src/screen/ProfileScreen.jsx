import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import DetailsWithRightArrow from "../component/DetailsWithRightArrow";
import TocButton from "../component/TocButton";
import { PERSONAL_INFO, PROFILE_SECTION } from "../constants/constants";

export default function ProfileScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.profileOptions}>
					{PROFILE_SECTION.map((ele) => {
						return (
							<TouchableOpacity
								key={ele.id}
								onPress={() => navigation.navigate(ele.screen)}
							>
								<DetailsWithRightArrow key={ele.id} {...ele} />
							</TouchableOpacity>
						);
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
