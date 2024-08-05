import { createContext, useContext } from "react";

//default value can be stored
export const ThemeContext = createContext({
  themeMode: "light", //variable
  darkTheme: () => {}, //methods
  lightTheme: () => {},
});

//export Provider directly
export const ThemeProvider = ThemeContext.Provider;

//set the context here only and import useTheme whereever required eg.useTheme.darkTheme
export default function useTheme() {
  return useContext(ThemeContext);
}
