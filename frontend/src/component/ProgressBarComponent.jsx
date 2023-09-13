import { View } from "react-native";
import * as Progress from "react-native-progress";

export default function ProgressBarComponent() {
	return (
		<View>
			<Progress.Circle
				size={60}
				indeterminate={false}
				showsText={true}
				progress={0.8}
				thickness={5}
				fill="yellow"
				strokeCap={"round"}
				textStyle={{
					color: "red",
					fontSize: 12,
					color: "white",
					fontWeight: "600",
					fontStyle: "italic",
				}}
			/>
		</View>
	);
}
