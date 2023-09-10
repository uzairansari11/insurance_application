import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { INSURANCE_OPTIONS } from "../constants/constants";
import CapsuleButton from "./CapsuleButton";
import TocButton from "./TocButton";

export default function InsuranceTopSection() {
	const [isActive, setActive] = useState(1);
	const discount = 85;
	const handleActive = (activeTab) => {
		setActive(activeTab);
	};
	return (
		<View style={styles.container}>
			<View style={styles.insuranceOptions}>
				{INSURANCE_OPTIONS.map((ele) => {
					return (
						<CapsuleButton
							key={ele.id}
							title={ele.title}
							onPress={() => handleActive(ele.id)}
							isActive={ele.id === isActive}
						/>
					);
				})}
			</View>
			<Text style={styles.insuranceText}>
				{`Upto ${discount}% off on car insurance`}
			</Text>
			{isActive === 1 || isActive === 2 ? (
				<TextInput
					style={styles.inputStyle}
					placeholder={`Please Enter  ${isActive == 1 ? "Car" : "Bike"} Number`}
				/>
			) : null}
			<TocButton
				title="Check Prices"
				backgroundColor="black"
				marginTop={20}
				textSize={18}
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
	insuranceOptions: {
		flexDirection: "row",
		justifyContent: "space-between",
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
