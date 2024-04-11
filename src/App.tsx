import {  ThemeProvider } from "@contexts/themeContext";
import { Home } from "@components/home";

export const App = () => {
  return (
    <ThemeProvider>
        <Home />
    </ThemeProvider>
  )
}