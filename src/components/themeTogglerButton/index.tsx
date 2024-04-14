import { ThemeContext } from "@contexts/themeContext"
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { darkColors, fonts, lightColors } from "@styles/variables";
import { useContext } from "react"
import styled from "styled-components"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const themeIsLight = theme.primaryColor === lightColors.primaryColor;
    
    const handleTheme = () => {
        themeIsLight ? setTheme(darkColors) : setTheme(lightColors)
    }
    
    return (
        <Container data-testid="themeButton" theme={theme} onClick={() => handleTheme()}>
            <FontAwesomeIcon data-testid="themeIcon" className={`themeIcon ${themeIsLight ? "darkTheme" : ""}`} icon={faAdjust} />
        </Container>
    )
}

const Container = styled.button`
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    background: none;
    border: none;
    transition: .3s;

    &:hover > .themeIcon {
        color: ${({theme}) => theme.secondaryColor};
    }

    .themeIcon {
        color: ${({theme}) => theme.textColor};
        font-size: ${fonts.fontSizeMedium};
        transition: all .3s;

        &.darkTheme {
            transform: rotate(180deg);
        }
    }
`