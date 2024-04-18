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

    const links = [
        {text: "About Me", id: "#aboutMe"},
        {text: "Skills", id: "#skills"},
        {text: "My Projects", id: "#myProjects"},
        {text: "Contacts", id: "#contacts"},
    ]

    return (
        <Container theme={theme}>
            <div className="content">
                <a href="#">
                    <h1 className="logo">FS<span>.</span></h1>
                </a>
                <div className="headerButtons">
                    <div className="buttons">
                        <ThemeTogglerButton />
                        <button className={`accordion ${active ? "active" : ""}`} data-testid="accordionButton" onClick={() => handleClick()}>
                            <FontAwesomeIcon className="hamburgerIcon" icon={active ? faTimes : faBars} />
                        </button>
                    </div>
                    <nav className="navigation">
                        <ul className={`list ${active ? "active" : ""}`}>
                            {links && links.map((item, index) =>
                                <li className="item" key={index}>
                                    <a href={item.id}>{item.text}</a>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 5dvw;
    
    .content {
        display: flex;
        max-width: 144rem;
        width: 100%;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        a {
            text-align: center;
            transition: .3s;
            position: relative;
    
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: .2rem;
                background: ${({theme}) => theme.secondaryColor};
                transform: scaleX(0);
                transform-origin: left;
                transition: transform .5s;
            }
        
            &:hover::after {
                transform: scaleX(1);
            }
        
            &:not(:hover)::after {
                transform: scaleX(0);
                transform-origin: right;
            }

            .logo {
                color: ${({ theme }) => theme.textColor};
                font-size: ${fonts.fontSizeLarge};
                font-family: ${fonts.fontFamily};
                transition: .3s;

                &:hover {
                    color: ${({theme}) => theme.secondaryColor};
                }

                &:hover > span {
                    color: ${({theme}) => theme.textColor};
                }

                &::first-letter {
                    font-size: 150%;
                    position: absolute;
                    top: 1.5rem
                }

                span {
                    font-size: 150%;
                    color: ${({theme}) => theme.secondaryColor};
                    transition: .3s;
                }
            }
        }

        .headerButtons {
            display: flex;
            align-items: center;
            gap: 2rem;
            
            .buttons {
                display: flex;
                justify-content: center;
                align-items: center;

                .accordion {
                    width: 5rem;
                    height: 5rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: .3s;
                    display: none;
            
                    &:hover > .hamburgerIcon{
                        color: ${({ theme }) => theme.secondaryColor};
                    }
            
                    &.active > .hamburgerIcon {
                        transform: rotate(90deg);
                    }
                    
                    .hamburgerIcon {
                        font-size: ${fonts.fontSizeLarge};
                        transition: .3s;
                        color: ${({ theme }) => theme.textColor};
                    }
                }
            }

            .navigation {
                .list {
                    display: flex;
                    gap: 2rem;
    
                    .item {
                        font-weight: 500;
                        transition: .3s;
                        width: fit-content;
                        color: ${({ theme }) => theme.textColor};
                        margin: 0.5rem 1rem;
                        
                        a {
                            color: ${({ theme }) => theme.textColor};
                            width: 100%;
                            padding-bottom: .5rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        padding: 2rem 0;

        .content {
            flex-direction: column;

            a {
                width: 6rem;
                height: 6rem;

                .logo {
                    font-size: ${fonts.fontSizeLarge};
                }
            }

            .headerButtons {
                display: block;

                .buttons {
                    .accordion {
                        display: block;
                    }
                }

                .navigation {
                    position: relative;
                    width: 14rem;
    
                    .list {
                        flex-direction: column;
                        border-radius: 1.6rem;
                        align-items: center;
                        gap: 1rem;
                        padding: 0 1rem;
                        height: 0;
                        overflow: hidden;
                        transition: .3s;
                        border: .2rem solid transparent;
            
                        &.active {
                            height: 17rem;
                            padding-top: 1rem;
                            border-color: ${({theme}) => theme.secondaryColor};
                        }
            
                        &:last-child {
                            margin-top: 1rem;
                        }
    
                        .item {
                            width: 100%;
                            text-align: center;
                        }
                    }
                }
            }

        }
    }
`;
