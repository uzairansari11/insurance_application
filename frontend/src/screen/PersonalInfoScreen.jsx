import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import TocButton from "../component/TocButton";

export default function PersonalInfoScreen() {
	const [personalInfo, setPersonalInfo] = useState({
		fullName: "Uzair Ansari",
		mobileNumber: "7271880500",
		email: "uzairans532@gmail.com",
	});
	const [editDetails, setEditDetails] = useState(false);
	const handleInfoChange = (name, value) => {
		setPersonalInfo({
			...personalInfo,
			[name]: value,
		});
	};

	const handleDataModification = () => {
		setEditDetails(!editDetails);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Personal info</Text>
			<TextInput
				id="fullName"
				name="fullName"
				placeholder="User Full Name"
				value={personalInfo.fullName}
				onChangeText={(text) => handleInfoChange("fullName", text)}
				style={styles.inputTag}
				editable={editDetails}
			/>
			<TextInput
				id="mobileNumber"
				name="mobileNumber"
				placeholder="User Mobile Number"
				keyboardType="numeric"
				maxLength={10}
				value={personalInfo.mobileNumber}
				onChangeText={(text) => handleInfoChange("mobileNumber", text)}
				style={styles.inputTag}
				editable={false}
			/>
			<TextInput
				id="emailAddress"
				name="emailAddress"
				placeholder="User Email Address"
				keyboardType="email-address"
				value={personalInfo.email}
				onChangeText={(text) => handleInfoChange("email", text)}
				style={styles.inputTag}
				editable={editDetails}
			/>

			{editDetails ? (
				<TocButton
					title={"Update Details"}
					backgroundColor={"#7EAA92"}
					width={"60%"}
					onPress={handleDataModification}
				/>
			) : (
				<TocButton
					title={"Edit Details"}
					backgroundColor={"#ED2B2A"}
					width={"60%"}
					onPress={handleDataModification}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
	},
	headingText: {
		fontSize: 18,
		fontWeight: "500",
		paddingVertical: 15,
	},
	inputTag: {
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 10,
		marginBottom: 10,
		borderRadius: 8,
	},
});
