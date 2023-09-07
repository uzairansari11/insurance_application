import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Routing from "./src/routing/Routing";
import CapsuleButton from "./src/component/CapsuleButton";
import Card from "./src/component/Card";

export default function App() {
	return (
		<>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<SafeAreaProvider>
				<View style={styles.container}>
					{/* <NavigationContainer> */}
					{/* <Routing /> */}
					{/* <CapsuleButton title={'Car'} /> */}
					{/* <Card
						IconName={"bike"}
						size={24}
						color={"black"}
						text={"This is My Bike"}
					/> 
					*/}

					{/* </NavigationContainer> */}
				</View>
			</SafeAreaProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
