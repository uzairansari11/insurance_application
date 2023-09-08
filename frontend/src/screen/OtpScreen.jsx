import React, { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import TocButton from "../component/TocButton";

export default function OtpScreen({ length = 4, navigation }) {
	const [otp, setOtp] = useState(Array(length).fill(""));
	const otpInputs = useRef([]);

	const handleOtpChange = (text, index) => {
		if (isNumeric(text) || text === "") {
			const newOtp = [...otp];
			newOtp[index] = text;
			setOtp(newOtp);
			handleFocus(index, text);
		}
	};

	const isNumeric = (text) => /^[0-9]+$/.test(text);

	const handleFocus = (index, text) => {
		if (text !== "") {
			focusNextInput(index);
		} else {
			focusPreviousInput(index);
		}
	};

	const focusNextInput = (index) => {
		if (index < length - 1) {
			otpInputs.current[index + 1].focus();
		}
	};

	const focusPreviousInput = (index) => {
		if (index > 0) {
			otpInputs.current[index - 1].focus();
		}
	};

	const isOtpComplete = () => {
		return otp.every((digit) => digit !== "");
	};

	const handleSubmitOtp = () => {
		if (isOtpComplete()) {
			const otpValue = otp.join("");
			navigation.navigate("Main");
		} else {
			alert("Please fill in all OTP fields.");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.optText}>Verify OTP</Text>
			<View style={styles.otpContainer}>
				{otp.map((_, index) => (
					<TextInput
						key={index}
						style={styles.inputStyle}
						maxLength={1}
						keyboardType="numeric"
						value={otp[index]}
						onChangeText={(text) => handleOtpChange(text, index)}
						ref={(input) => (otpInputs.current[index] = input)}
					/>
				))}
			</View>

			<TocButton
				title="Submit OTP"
				onPress={handleSubmitOtp}
				disabled={!isOtpComplete()}
				backgroundColor={"#6699cc"}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 8,
	},
	optText: {
		marginBottom: 30,
		fontSize: 20,
		textAlign: "center",
		fontWeight: "800",
	},
	otpContainer: {
		flexDirection: "row",
		height: 50,
		justifyContent: "center",
		width: "100%",
		gap: 30,
		marginBottom: 40,
	},
	inputStyle: {
		borderWidth: 1,
		width: 40,
		textAlign: "center",
		fontSize: 20,
		borderRadius: 10,
		borderColor: "grey",
	},
});
