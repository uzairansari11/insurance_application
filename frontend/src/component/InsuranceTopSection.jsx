import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import CapsuleButton from "./CapsuleButton";
import TocButton from "./TocButton";
import { CAR_DATA, CAR_INFO } from "../constants/constants";
export default function InsuranceTopSection({ data, navigation }) {
	const discount = 85;
	const [isActive, setActive] = useState(1);
	const [searchText, setSearchText] = useState("");
	const [searchedData, setSearchData] = useState([]);

	const handleActive = (activeTab) => {
		setActive(activeTab);
	};

	const handleSearch = () => {
		const searchedResult = CAR_DATA.find(
			(ele) => ele.license.toUpperCase() === searchText.toUpperCase()
		);
		setSearchData(searchedData);
		searchedResult
			? navigation.navigate(CAR_INFO, { searchedResult })
			: alert(`Not Found`);
	};
	return (
		<View style={styles.container}>
			<FlatList
				horizontal
				data={data}
				renderItem={({ item }) => (
					<CapsuleButton
						title={item.title}
						onPress={() => handleActive(item.id)}
						isActive={item.id === isActive}
						backgroundColor="black"
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
			<Text style={styles.insuranceText}>
				{`Upto ${discount}% off on car insurance`}
			</Text>
			{isActive === 1 || isActive === 2 ? (
				<TextInput
					style={styles.inputStyle}
					placeholder={`Please Enter  ${isActive == 1 ? "Car" : "Bike"} Number`}
					value={searchText}
					onChangeText={(text) => {
						setSearchText(text.toUpperCase());
					}}
					maxLength={10}
				/>
			) : null}
			<TocButton
				title="Check Prices"
				backgroundColor="black"
				marginTop={20}
				textSize={18}
				onPress={handleSearch}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 20,
	},

	insuranceText: {
		textAlign: "center",
		marginTop: 20,
		fontWeight: "500",
		fontSize: 18,
	},
	inputStyle: {
		borderRadius: 3,
		paddingVertical: 10,
		paddingHorizontal: 10,
		textAlign: "left",
		marginTop: 20,
		fontSize: 16,
		backgroundColor: "white",
	},
});
