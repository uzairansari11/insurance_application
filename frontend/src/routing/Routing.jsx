import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LOGIN_URL, OTP_URL } from "../constants/constants";
import Login from "../screen/LoginScreen";
import OtpVerification from "../screen/OtpScreen";
import BottomTabRouting from "./BottomTabRouting";
const Stack = createStackNavigator();
export default function Routing({ isAuth = true }) {
	return (
		<>
			<Stack.Navigator>
				{!isAuth ? (
					<>
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
					</>
				) : (
					<>
						<Stack.Screen
							name="Main"
							component={BottomTabRouting}
							options={{ headerShown: false }}
						/>
					</>
				)}
			</Stack.Navigator>
		</>
	);
}
