import { useEffect } from "react";
import "./App.css";
import useTheme, { ThemeProvider } from "./contexts/theme";
import { ThemeButton } from "./components/ThemeButton";
import { Card } from "./components/Card";

function App() {
  //define variables and method with same name to access the data fom useTheme function
  const [themeMode, setThemeMode] = useTheme("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    //wrap up the div into ThemeProvider and take access of required variables,methods from theme.js
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
