import { View, Text, StyleSheet } from "react-native";

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Memory Game</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#EB60CC",
		height: 60,
		padding: 10,
	},
	title: {
		color: "#f4f4f4",
		textAlign: "center",
		fontSize: 24,
		fontWeight: "bold",
	},
});

export default Header;
