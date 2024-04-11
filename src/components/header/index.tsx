import { ThemeTogglerButton } from "@components/themeTogglerButton";
import { ThemeContext } from "@contexts/themeContext";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fonts } from "@styles/variables";
import { useContext, useState } from "react";
import styled from "styled-components";


export const Header = () => {
    const { theme } = useContext(ThemeContext)
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <Container theme={theme}>
            <div className="content">
                <a href="#">
                    <h1 className="logo">FS</h1>
                </a>
                <div className="buttons">
                    <ThemeTogglerButton />
                    <button className={`accordion ${active ? "active" : ""}`} data-testid="accordionButton" onClick={() => handleClick()}>
                        <FontAwesomeIcon className="hamburgerIcon" icon={active ? faTimes : faBars} />
                    </button>
                </div>
                <nav className="navigation">
                    <ul className={`list ${active ? "active" : ""}`}>
                        <li className="item">About me</li>
                        <li className="item">Skills</li>
                        <li className="item">My projects</li>
                    </ul>
                </nav>
            </div>
        </Container>
    );
};

const Container = styled.section`
    background-color: ${({ theme }) => theme.secondaryColor};
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        display: flex;
        max-width: 144rem;
        width: 100%;
        gap: 2rem;
        padding: 1rem 3rem;
        align-items: center;
        flex-wrap: wrap;
    }

    .content a {
        width: 8rem;
        height: 8rem;
        text-align: center;
        transition: .3s;

        &:hover {
            opacity: .6;
        }
    }

    .content a .logo {
        color: ${({ theme }) => theme.textColor};
        border: .2rem solid;
        padding: 1rem;
        border-radius: 50%;
        font-size: ${fonts.fontSizeExtraLarge};
        font-family: ${fonts.secondaryFontFamily};
        transition: .3s;
    }

    .content .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content .buttons .accordion {
        width: 5rem;
        height: 5rem;
        background: none;
        border: none;
        cursor: pointer;
        transition: .3s;
        display: none;

        &:hover {
            opacity: .6;
        }

        &.active > .hamburgerIcon {
            transform: rotate(90deg);
        }
    }

    .buttons .accordion .hamburgerIcon {
        font-size: ${fonts.fontSizeLarge};
        transition: .3s;
        color: ${({ theme }) => theme.textColor};
    }

    .content .navigation .list {
        display: flex;
        gap: 2rem;
        color: ${({ theme }) => theme.textColor};
    }

    .navigation .list .item {
        font-weight: 500;
        padding: 1rem;
        border-radius: 1.6rem;
        transition: .3s;
        width: fit-content;
        cursor: pointer;

        &:hover {
            background-color: ${({ theme }) => theme.tertiraryColor};
        }
    }

    @media (max-width: 600px) {
        .content {
            gap: 0rem;
            padding: 1rem;
            flex-direction: column;
        }
    
        .content a {
            width: 6rem;
            height: 6rem;
        }
    
        .content a .logo {
            font-size: ${fonts.fontSizeLarge};
        }
    
        .content .accordion {
            display: block;
        }

        .content .navigation {
            position: relative;
            width: 14rem;
        }
    
        .content .navigation .list {
            flex-direction: column;
            background-color: ${({ theme }) => theme.secondaryColor};
            position: absolute;
            right: 0;
            left: 0;
            top: -.1rem;
            border-radius: 0 0 1.6rem 1.6rem;
            align-items: center;
            gap: 1rem;
            padding: 0 1rem;
            height: 0;
            overflow: hidden;
            transition: .3s;
            z-index: 1;

            &.active {
                height: 13.5rem;
            }

            &:last-child {
                margin-top: 1rem;
            }
        }
    
        .navigation .list .item {
            width: 100%;
            text-align: center;
            padding: .5rem;
        }
    }
`;
