import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";
import CardsField from "./components/CardsField";

const App = () => {
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
