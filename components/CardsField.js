import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";

const CardsField = () => {
	let numbers = Array.from({ length: 12 }, (_, index) => index + 1);

	for (let i = numbers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
	}
	return (
		<View style={styles.cardsfield}>
			{numbers.map((number) => {
				return <Card key={number} number={number} />;
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	cardsfield: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		paddingTop: 40,
	},
});

export default CardsField;
