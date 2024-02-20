import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	let numbers = Array.from({ length: 12 }, (_, index) => index + 1);

	const mixCards = () => {
		let mixedNumbers = [...numbers];
		for (let i = mixedNumbers.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[mixedNumbers[i], mixedNumbers[j]] = [mixedNumbers[j], mixedNumbers[i]];
		}
		return mixedNumbers;
	};

	let mixedNumbers = mixCards(numbers);

	return (
		<AppContext.Provider value={{ mixCards, mixedNumbers }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
