import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";
import AppContext from "../context/AppContext";

const CardsField = () => {
	const { mixedCards, cardSelect } = useContext(AppContext);
	return (
		<View style={styles.cardsfield}>
			{mixedCards.map((card) => {
				return (
					<Card
						key={card.id}
						value={card.value}
						onPress={() => cardSelect(card.value, card.id)}
					/>
				);
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
