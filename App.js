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
	const { cardsSelected, mixedCards, cards } = useContext(AppContext);
	return (
		<View style={styles.container}>
			<Header />
			<Text>{cardsSelected.length}</Text>
			<CardsField />
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
