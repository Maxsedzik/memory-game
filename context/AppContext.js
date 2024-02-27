import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [cards, setCards] = useState([
		{ id: 1, value: "A", selected: false },
		{ id: 2, value: "A", selected: false },
		{ id: 3, value: "B", selected: false },
		{ id: 4, value: "B", selected: false },
		{ id: 5, value: "C", selected: false },
		{ id: 6, value: "C", selected: false },
		{ id: 7, value: "D", selected: false },
		{ id: 8, value: "D", selected: false },
		{ id: 9, value: "E", selected: false },
		{ id: 10, value: "E", selected: false },
		{ id: 11, value: "F", selected: false },
		{ id: 12, value: "F", selected: false },
	]);

	const [cardsSelected, setCardsSelected] = useState([]);
	const [pairedCards, setPairedCards] = useState([]);
	const mixCards = (x) => {
		let mixedCards = [...x];
		for (let i = mixedCards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[mixedCards[i], mixedCards[j]] = [mixedCards[j], mixedCards[i]];
		}
		return mixedCards;
	};

	const [mixedCards, setMixedCards] = useState([]);
	const [isClickable, setIsClickable] = useState(true);
	const [isMatched, setIsMatched] = useState(false);
	const [isGameWon, setIsGameWon] = useState(false);
	useEffect(() => {
		setMixedCards(mixCards(cards));
	}, []);

	function cardSelect(value, id) {
		setCardsSelected([...cardsSelected, { value, id }]);
		setCards((prevCards) => {
			return prevCards.map((card) => {
				if (card.id === id) {
					return { ...card, selected: true };
				}
				return card;
			});
		});
	}

	useEffect(() => {
		if (cardsSelected.length === 2) {
			setIsClickable(false);
			if (cardsSelected[0].value === cardsSelected[1].value) {
				setIsMatched(true);
				setPairedCards([...pairedCards, cardsSelected[0].value]);
				setCardsSelected([]);
				setTimeout(() => setIsClickable(true), 1000);
			} else {
				setCardsSelected([]);
				setTimeout(() => setIsClickable(true), 1000);
			}
		}
	}, [cardsSelected]);

	return (
		<AppContext.Provider
			value={{
				mixCards,
				mixedCards,
				cardSelect,
				cardsSelected,
				cards,
				isClickable,
				isMatched,
				pairedCards,
				isGameWon,
				setIsGameWon,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
