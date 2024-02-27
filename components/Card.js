import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppContext from "../context/AppContext";

const Card = ({ value, onPress }) => {
	const { isClickable, pairedCards } = useContext(AppContext);
	const isCardClickable = isClickable && !pairedCards.includes(value);
	return (
		<TouchableOpacity
			style={styles.card}
			onPress={onPress}
			disabled={!isCardClickable}>
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
