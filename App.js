import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";

const App = () => {
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
