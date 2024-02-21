import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ value }) => {
	return (
		<TouchableOpacity style={styles.card}>
			<View>
				<Text style={styles.text}>{value}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#220030",
		aspectRatio: 0.45,
		borderRadius: 15,
		width: "30%",
		margin: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#f4f4f4",
	},
});

export default Card;
