import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";
import CardsField from "./components/CardsField";
import AppContext, { AppProvider } from "./context/AppContext";

const App = () => {
	return (
		<AppProvider>
			<AppContent />
		</AppProvider>
	);
};

const AppContent = () => {
	const {
		cardsSelected,
		mixedCards,
		cards,
		isMatched,
		pairedCards,
		isGameWon,
		setIsGameWon,
	} = useContext(AppContext);

	if (pairedCards.length === 6) {
		setIsGameWon(true);
	}

	return (
		<View style={styles.container}>
			<Header />
			{/* <Text>{cardsSelected.length}</Text>
			<Text>{isMatched.toString()}</Text>
			<Text>{pairedCards}</Text> */}
			{isGameWon && <Text>You Won!</Text>}
			{!isGameWon && <CardsField />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#d6b4fc",
		paddingTop: 60,
	},
});

export default App;
