/* This component is for custom arrow back button */
import { View } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";
const ArrowBack = ({ navigation }) => {
	return (
		<View>
			<IconButton
				icon="chevron-left"
				iconColor={MD3Colors.primary0}
				size={35}
				onPress={() => navigation.goBack()}
			/>
		</View>
	);
};

export default ArrowBack;
