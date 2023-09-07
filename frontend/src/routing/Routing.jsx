import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../component/Login";
import OtpVerification from "../component/OtpVerification";
import { LOGIN_URL, OTP_URL } from "../constants/constants";
const Stack = createStackNavigator();
export default function Routing() {
	return (
		<>
			<Stack.Navigator>
				<Stack.Screen
					name={LOGIN_URL}
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name={OTP_URL}
					component={OtpVerification}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</>
	);
}
