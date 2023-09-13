import React, { useState } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { RadioButton } from "react-native-paper";
import CapsuleButton from "../../component/CapsuleButton";
import TocButton from "../../component/TocButton";
import { ADD_ONS, PLAN_DATA, PLAN_TENURE } from "../../constants/constants";

export default function CarDetailsScreen({ route, navigation }) {
	const { license, model_name } = route.params.searchedResult;
	const carDetails = {
		vehicleName: "Honda Civic",
		policyExpiry: "2023-08-15",
		ncb: "20%",
	};
	const [selectedTenure, setSelectedTenure] = useState(1);

	const [checked, setChecked] = React.useState(1);
	const totalPrice = PLAN_DATA.find((ele) => ele.id === checked).price.find(
		(ele) => ele.id === selectedTenure
	).price;
	return (
		<>
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Select plan</Text>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>Vehicle Name: {model_name}</Text>
					<Text style={styles.cardText}>Vehicle Number: {license}</Text>
					<Text style={styles.cardText}>
						Policy Expiry: {carDetails.policyExpiry}
					</Text>
					<Text style={styles.cardText}>NCB: {carDetails.ncb}</Text>
				</View>
				<Text style={styles.title}>Select plan tenure</Text>
				<View>
					<View style={styles.plan_tenure}>
						{PLAN_TENURE.map((ele, index) => {
							return (
								<CapsuleButton
									key={ele.id}
									title={ele.title}
									isActive={ele.id === selectedTenure}
									onPress={() => setSelectedTenure(ele.id)}
									backgroundColor={"green"}
								/>
							);
						})}
					</View>
					<View style={styles.radioContainer}>
						<RadioButton.Group
							onValueChange={(newValue) => setChecked(newValue)}
							value={checked}
						>
							{PLAN_DATA.map((radioItem) => (
								<TouchableWithoutFeedback
									key={radioItem.id}
									onPress={() => setChecked(radioItem.id)}
								>
									<View
										style={[
											styles.radioCard,
											checked === radioItem.id
												? styles.isActive
												: styles.inActive,
										]}
									>
										<View style={styles.radioCardContent}>
											<View
												style={{
													flexDirection: "row",
													alignItems: "center",
												}}
											>
												<RadioButton value={radioItem.id} color={"green"} />
												<Text style={styles.radioCardLabel}>
													{radioItem.label}
												</Text>
											</View>

											<Text style={styles.radioCardDescription}>
												{radioItem.description.map((point, index) => (
													<Text key={index}>
														{"\u2022"} {point}
														{"\n"}
													</Text>
												))}
											</Text>
											<Text style={styles.radioCardPrice}>
												Price:
												{
													radioItem.price.find(
														(ele) => ele.id == selectedTenure
													).price
												}
											</Text>
										</View>
									</View>
								</TouchableWithoutFeedback>
							))}
						</RadioButton.Group>
					</View>
				</View>
			</ScrollView>
			<View style={styles.bottomSection}>
				<Text style={styles.totalAmount}>
					₹ {""}
					{totalPrice}
					{""} + GST
				</Text>
				<TocButton
					title={"Continue"}
					backgroundColor={"green"}
					width={"50%"}
					onPress={() =>
						navigation.navigate(ADD_ONS, { selectedTenure, totalPrice })
					}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingBottom: 40,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: 8,
		marginBottom: 16,
	},
	card: {
		backgroundColor: "white",
		borderRadius: 8,
		padding: 16,
		elevation: 3,
		marginBottom: 16,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
	},
	cardText: {
		fontSize: 14,
		marginBottom: 8,
	},
	plan_tenure: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	radioContainer: {
		marginTop: 16,
	},
	radioCard: {
		backgroundColor: "white",
		borderRadius: 8,
		padding: 16,
		elevation: 3,
		marginBottom: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	radioCardContent: {
		flex: 1,
	},
	isActive: {
		borderColor: "green",
		borderWidth: 1,
	},
	inActive: {
		borderColor: "grey",
	},
	radioCardLabel: {
		fontWeight: "bold",
		fontSize: 16,
	},
	radioCardDescription: {
		marginBottom: 8,
	},
	radioCardPrice: {
		fontWeight: "bold",
	},
	bottomSection: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: "white",
	},
	totalAmount: {
		fontSize: 16,
		fontWeight: "700",
	},
});
