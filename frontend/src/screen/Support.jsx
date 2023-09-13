import { ScrollView, StyleSheet, Text, View } from "react-native";
import RectangularCard from "../component/RectangularCard";
import { EXPLORE_MORE, HELP_SUPPORT } from "../constants/constants";

export default function Support() {
	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<View style={styles.helpSupport}>
				<Text style={styles.headingText}>Help & Support</Text>
				{HELP_SUPPORT.map((ele) => {
					return <RectangularCard key={ele.id} id={ele.id} {...ele} />;
				})}
			</View>
			<View style={styles.helpSupport}>
				<Text style={styles.headingText}>Explore more</Text>
				{EXPLORE_MORE.map((ele) => {
					return (
						<RectangularCard
							key={ele.id}
							id={ele.id}
							{...ele}
							paddingVertical={20}
						/>
					);
				})}
			</View>
		</ScrollView>
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
	helpSupport: {
		flex: 1,
		rowGap: 15,
		paddingVertical: 10,
	},
});
