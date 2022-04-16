import React, { useState, useContext, createContext } from "react";

const AppContext = createContext(null);

export const AppProvider = (props) => {
	const [value, setValue] = useState("");

	return (
		<AppContext.Provider
			value={{ contextTitle: value, changeContextTitle: setValue }}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
