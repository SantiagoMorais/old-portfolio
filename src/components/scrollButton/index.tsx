import { ThemeContext } from "@contexts/themeContext"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fonts } from "@styles/variables"
import { useContext } from "react"
import styled from "styled-components"

export const ScrollButton = () => {
    const { theme } = useContext(ThemeContext)

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',   
        });
    }

    return (
        <Button theme={theme} onClick={() => handleScroll()} data-testid="scrollButton">
            <FontAwesomeIcon icon={faArrowUp} className="icon" />
        </Button>
    )
}

const Button = styled.button`
    position: fixed;
    opacity: .6;
    bottom: 2rem;
    right: 2rem;
    font-size: ${fonts.fontSizeLarge};
    padding: 1rem;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.tertiaryColor};
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s;
    border: .3rem solid transparent;
    overflow: hidden;
    
    &:hover {
        opacity: 1;
        border-color: ${({ theme }) => theme.textColor};
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: ${({theme}) => theme.secondaryColor};
        opacity: 0;
        transform: scaleY(0);
        transform-origin: bottom;
        transition: transform .5s, opacity .5s;
        z-index: 0;
      }
      
    &:hover::before {
        transform: scaleX(1);
        opacity: .8;
    }
    
    &:not(:hover)::before {
        transform: scaleY(0);
        transform-origin: top;
    }

`