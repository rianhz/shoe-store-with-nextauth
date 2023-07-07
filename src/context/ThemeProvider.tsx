"use client";
import React, { createContext, useState } from "react";

interface IThemeContext {
	theme: "dark" | "light";
	setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

export const themeContext = createContext<IThemeContext>({
	theme: "light",
	setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<"dark" | "light">("light");
	return (
		<themeContext.Provider value={{ theme, setTheme }}>
			{children}
		</themeContext.Provider>
	);
};
