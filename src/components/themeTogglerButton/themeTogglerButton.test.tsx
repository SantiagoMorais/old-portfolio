import { fireEvent, render, screen } from "@testing-library/react"
import { ThemeTogglerButton } from "."
import { ThemeProvider } from "@contexts/themeContext"
import { App } from "App"
import { darkColors, lightColors } from "@styles/variables"

describe('<ThemeTogglerButton /> functionalities', () => {
    it('should render the button correctly', () => {
        render(<ThemeTogglerButton />)
        const themeButton = screen.getByTestId("themeButton");
        expect(themeButton).toBeInTheDocument();
    })

    it('should change the theme correctly', () => {
        render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
        )

        const themeButton = screen.getByTestId("themeButton");
        const home = screen.getByRole("main")

        expect(home).toHaveStyle(`background-color: ${lightColors.primaryColor}`)

        fireEvent.click(themeButton)
        expect(home).toHaveStyle(`background-color: ${darkColors.primaryColor}`)

        fireEvent.click(themeButton)
        expect(home).toHaveStyle(`background-color: ${lightColors.primaryColor}`)
    })

    it('should add a new class to the fontAwsome icon when the button is clicked', () => {
        render(
            <ThemeProvider>
                <ThemeTogglerButton />
            </ThemeProvider>
        )

        const themeButton = screen.getByTestId("themeButton");
        const themeIcon = screen.getByTestId("themeIcon");

        expect(themeIcon).toBeInTheDocument();
        expect(themeIcon.classList.contains("darkTheme")).toBeTruthy();

        fireEvent.click(themeButton)
        expect(themeIcon.classList.contains("darkTheme")).toBeFalsy();

        fireEvent.click(themeButton)
        expect(themeIcon.classList.contains("darkTheme")).toBeTruthy();
    })
})