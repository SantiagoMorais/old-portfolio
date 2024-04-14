// import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
// import { faAt } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import heroImage from "@assets/felipe-image.png"
import { useContext } from "react"
import { ThemeContext } from "@contexts/themeContext"
import { fonts } from "@styles/variables"
import htmlIcon from "@assets/html-icon.png"
import cssIcon from "@assets/css-icon.webp"
import javascriptIcon from "@assets/javascript-icon.png"
import reactIcon from "@assets/react-icon.png"
import typescriptIcon from "@assets/typescript-icon.png"

export const Hero = () => {
    const { theme } = useContext(ThemeContext);

    const languagesList = [
        htmlIcon,
        cssIcon,
        javascriptIcon,
        reactIcon,
        typescriptIcon
    ]

    return (
        <Container theme={theme}>
            <div className="content">
                <div className="info">
                    <div className="textHero">
                        <p>Hi there!</p>
                        <h1>I'm <span className="name">Felipe Santiago</span></h1>
                        <h2>Frontend Developer</h2>
                    </div>

                    {/* <div className="social">
                        <a href="https://www.linkedin.com/in/felipe-santiago-morais/" target="_blank" className="link"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/SantiagoMorais" target="_blank" className="link"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="mailto:contatofelipesantiago@gmail.com" target="_blank" className="link"><FontAwesomeIcon icon={faAt} /></a>
                        <a href="https://wa.me/5531996951033?text=Hi,%20there!%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20your%20services.%20Let's%20talk." target="_blank" className="link"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    </div> */}

                    <p className="introduction">
                        Passionate about crafting user-friendly interfaces with React.js and TypeScript.
                        <br />
                        See my <a href="#my-projects">projects</a> here and <a href="#contacts">contact</a> me on my social media!
                    </p>

                    <ul className="languages">
                        {languagesList.map((language, index) =>
                            <li className="language" key={index}>
                                <img src={language} alt="programming language icon" />
                            </li>
                        )}
                    </ul>

                </div>

                <div className="imgHero">
                    <img src={heroImage} alt="Portfolio owner image" className="image" />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
    
    .content {
        display: flex;
        align-items: center;
        width: 90dvw;
        justify-content: center;
        max-width: 144rem;
        box-shadow: 0 0 1rem;
        border-radius: 1.6rem;
        overflow: hidden;

        .info {
            min-width: 30rem;
            height: 100%;
            background-color: ${({ theme }) => theme.primaryColor};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            flex: 2;
            flex-basis: 0;
            padding: 2rem;
            
            .textHero {
                color: ${({ theme }) => theme.textColor};
                display: flex;
                flex-direction: column;

                p {
                    font-size: ${fonts.fontSizeLarge};
                    font-weight: 400;
                }
                
                h1 {
                    font-size: ${fonts.fontSizeExtraLarge};
                    font-weight: 400;

                    .name {
                        font-weight: 600;
                        letter-spacing: .2rem;
                    }                                       
                }

                h2 {
                    font-size: ${fonts.fontSizeLarge};
                    font-weight: 400;
                    padding: .5rem 1rem;
                    margin: .5rem;
                    background: ${({ theme }) => theme.secondaryColor};
                    color: ${({ theme }) => theme.secondaryTextColor};
                    width: fit-content;
                    border-radius: .8rem;
                }
            }

            .introduction {
                color: ${({ theme }) => theme.textColor};
                font-weight: 500;
                text-align: center;

                a {
                    text-transform: uppercase;
                    cursor: pointer;
                    color: ${({ theme }) => theme.secondaryColor};
                }
            }

            .languages {
                display: flex;
                gap: 2rem;
                
                .language {
                    display: flex;
                    border-radius: .8rem;
                    cursor: pointer;
                    transition: .3s;
                    position: relative;
            
                    &::after {
                        content: '';
                        position: absolute;
                        top: 110%;
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

                    img {
                        width: 5rem;
                        height: auto;
                        border-radius: .8rem;
                    }
                }
            }

            /* .social {
                display: flex;
                gap: 2rem;

                .link {
                    font-size: ${fonts.fontSizeLarge};
                    color: ${({ theme }) => theme.textColor};
                    transition: .3s;

                    &:hover {
                        color: ${({ theme }) => theme.secondaryColor}
                    }
                }
            } */
        }

        .imgHero {
            flex: 1;
            flex-basis: 0;
            height: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            min-width: 20rem;

            &::after {
                content: '';
                height: 100%;
                width: 100%;
                background-color: ${({ theme }) => theme.tertiaryColor};
                position: absolute;
                opacity: .6;
            }

            .image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: drop-shadow(0 0 .3rem ${({ theme }) => theme.textColor});
            }
        }
    }

    @media (max-width: 1100px) {
        .content {
            width: 95dvw;
    
            .info {
                flex: 3;
                .textHero {
                    p {
                        font-size: ${fonts.fontSizeMedium};
                    }
                    
                    h1 {
                        font-size: ${fonts.fontSizeLarge};                                
                    }
    
                    h2 {
                        font-size: ${fonts.fontSizeMedium};
                    }
                }
    
                .languages {
                    .language {
                        img {
                            width: 4rem;
                        }
                    }
                }
            }

            .imgHero {
                flex: 2;
            }
        }
    }
`