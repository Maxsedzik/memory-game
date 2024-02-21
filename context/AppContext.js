import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [cards, setCards] = useState([
		{ id: 1, value: "A" },
		{ id: 2, value: "A" },
		{ id: 3, value: "B" },
		{ id: 4, value: "B" },
		{ id: 5, value: "C" },
		{ id: 6, value: "C" },
		{ id: 7, value: "D" },
		{ id: 8, value: "D" },
		{ id: 9, value: "E" },
		{ id: 10, value: "E" },
		{ id: 11, value: "F" },
		{ id: 12, value: "F" },
	]);

	let cardsSelected = [];

	const mixCards = (x) => {
		let mixedCards = [...x];
		for (let i = mixedCards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[mixedCards[i], mixedCards[j]] = [mixedCards[j], mixedCards[i]];
		}
		return mixedCards;
	};

	let mixedCards = mixCards(numbers);

	function cardSelect(value, id) {
		cardsSelected.push({ value, id });
	}

	if (cardsSelected.length === 2) {
		if (cardsSelected[0].value === cardsSelected[1].value) {
			//Delete cards from the stack
		}
	}

	return (
		<AppContext.Provider value={{ mixCards, mixedCards, cardSelect }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
