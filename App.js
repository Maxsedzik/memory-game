import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";

const App = () => {
	let numbers = Array.from({ length: 9 }, (_, index) => index + 1);

	for (let i = numbers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
	}

	return (
		<View style={styles.container}>
			<Header />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#d6b4fc",
	},
});
export default App;
