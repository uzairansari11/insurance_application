import { createStackNavigator } from "@react-navigation/stack";
import ArrowBack from "../component/ArrowBack";
import {
	ADD_ONS,
	CAR_INFO,
	INSURANCE_USER_DETAILS,
	LOGIN_URL,
	MAIN_BOTTOM,
	OTP_URL,
	PERSONAL_INFO,
	PROFILE,
} from "../constants/constants";
import Login from "../screen/LoginScreen";
import OtpVerification from "../screen/OtpScreen";
import PersonalInfoScreen from "../screen/PersonalInfoScreen";
import ProfileScreen from "../screen/ProfileScreen";
import AddOns from "../screen/carInsuranceScreens/AddOns";
import CarDetailsScreen from "../screen/carInsuranceScreens/CarDetailsScreen";
import BottomTabRouting from "./BottomTabRouting";
import DetailsScreen from "../screen/carInsuranceScreens/DetailsScreen";
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
							name={MAIN_BOTTOM}
							component={BottomTabRouting}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name={PROFILE}
							component={ProfileScreen}
							options={({ navigation }) => ({
								headerLeft: () => <ArrowBack navigation={navigation} />,
								headerTitle: "",
							})}
						/>
						<Stack.Screen
							name={PERSONAL_INFO}
							component={PersonalInfoScreen}
							options={({ navigation }) => ({
								headerLeft: () => <ArrowBack navigation={navigation} />,
								headerTitle: "",
							})}
						/>
						<Stack.Screen
							name={CAR_INFO}
							component={CarDetailsScreen}
							options={({ navigation }) => ({
								headerLeft: () => <ArrowBack navigation={navigation} />,
								headerTitle: "",
							})}
						/>
						<Stack.Screen
							name={ADD_ONS}
							component={AddOns}
							options={({ navigation }) => ({
								headerLeft: () => <ArrowBack navigation={navigation} />,
								headerTitle: "",
							})}
						/>
						<Stack.Screen
							name={INSURANCE_USER_DETAILS}
							component={DetailsScreen}
							options={({ navigation }) => ({
								headerLeft: () => <ArrowBack navigation={navigation} />,
								headerTitle: "",
							})}
						/>
					</>
				)}
			</Stack.Navigator>
		</>
	);
}
