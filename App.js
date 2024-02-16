import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";
import CardsField from "./components/CardsField";

const App = () => {
	let numbers = Array.from({ length: 12 }, (_, index) => index + 1);

	for (let i = numbers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
	}

	return (
		<View style={styles.container}>
			<Header />
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
