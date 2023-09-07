import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import Routing from "./src/routing/Routing";
export default function App() {
	return (
		<>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<SafeAreaProvider>
				<View style={styles.container}>
					<NavigationContainer>
						<Routing />
					</NavigationContainer>
				</View>
			</SafeAreaProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
