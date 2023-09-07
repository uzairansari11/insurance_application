import { FontAwesome } from "@expo/vector-icons";
import { Input } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { OTP_URL } from "../constants/constants";
import TocButton from "../component/TocButton";
import { NUMBER_PATTERN } from "../validation/validation";

export default function Login({ navigation }) {
	const [number, setNumber] = useState("");

	const handleNumber = (data) => {
		if (NUMBER_PATTERN.test(data) || data.length === 0) {
			const userNumber = data;
			setNumber(userNumber);
		}
		if (data.length === 10) {
			if (!NUMBER_PATTERN.test(data)) {
				alert("Pattern Enter Number Only!");
			}
		}
	};
	const handleSubmit = () => {
		navigation.navigate(OTP_URL);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Welcome to Insurance App</Text>
			<Text style={styles.loginText}>Log in with your phone number</Text>
			<Input
				placeholder="Enter your phone number"
				keyboardType="numeric"
				maxLength={10}
				leftIcon={<FontAwesome name="mobile" size={40} style={styles.icon} />}
				containerStyle={styles.inputContainer}
				value={number}
				onChangeText={(text) => handleNumber(text)}
			/>
			{number.length === 10 ? (
				<TocButton
					title="Get OTP"
					onPress={handleSubmit}
					backgroundColor={"tomato"}
				/>
			) : null}
		</View>
	);
}

/* styling */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		fontStyle: "italic",
		marginBottom: 20,
	},
	loginText: {
		fontStyle: "italic",
		fontSize: 18,
		marginBottom: 30,
	},
	inputContainer: {
		fontStyle: "italic",
		width: "100%",
		marginBottom: 20,
	},
	icon: {
		marginRight: 10,
	},
});
