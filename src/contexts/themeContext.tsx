import { IColors, lightColors } from "@styles/variables";
import React, {  createContext, useEffect, useState } from "react";

interface IThemeContext {
    theme: IColors,
    setTheme: React.Dispatch<React.SetStateAction<IColors>>,
}

export const ThemeContext = createContext<IThemeContext>({theme: lightColors, setTheme: () => {}})

interface IThemeProviderProps {
    children: React.ReactNode,
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({children}) => {
    const localTheme = localStorage.getItem('portfolioTheme');
    const storageTheme = localTheme ? JSON.parse(localTheme) : lightColors;
    
    const [theme, setTheme] = useState<IColors>(storageTheme)

    useEffect(() => {
        window.localStorage.setItem('portfolioTheme', JSON.stringify(theme))
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}