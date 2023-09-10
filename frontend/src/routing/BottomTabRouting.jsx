import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Discover from "../screen/Discover";
import HomeScreen from "../screen/HomeScreen";
import SettingsScreen from "../screen/MyPolicies";
import Support from "../screen/Support";
const Tab = createMaterialBottomTabNavigator();

export default function BottomTabRouting() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="black"
			inactiveColor="grey"
			barStyle={{
				backgroundColor: "white",
				height: 70,
			}}
			shifting={true}
			sceneAnimationType="shifting"
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="home"
							color={color || "black"}
							size={26}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="MyPolicies"
				component={SettingsScreen}
				options={{
					tabBarLabel: "My Policies",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="shield"
							color={color || "black"}
							size={26}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Discover"
				component={Discover}
				options={{
					tabBarLabel: "Discover",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="compass"
							color={color || "black"}
							size={26}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Support"
				component={Support}
				options={{
					tabBarLabel: "Support",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="contacts-outline"
							color={color || "black"}
							size={26}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
