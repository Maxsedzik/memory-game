import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";
import CardsField from "./components/CardsField";
import { AppProvider } from "./context/AppContext";

const App = () => {
	return (
		<AppProvider>
			<View style={styles.container}>
				<Header />
				<CardsField />
			</View>
		</AppProvider>
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
