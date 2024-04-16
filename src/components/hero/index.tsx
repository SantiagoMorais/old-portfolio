// import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
// import { faAt } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import heroImage from "@assets/felipe-image.png"
import { useContext } from "react"
import { ThemeContext } from "@contexts/themeContext"
import { componentsGap, fonts } from "@styles/variables"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"

export const Hero = () => {
    const { theme } = useContext(ThemeContext);

    const languagesList = [
        faHtml5,
        faCss3Alt,
        faJsSquare,
        faReact,
    ]

    return (
        <Container theme={theme}>
            <div className="content">
                <div className="info">
                    <div className="textHero">
                        <p>Hi there!</p>
                        <h1>I'm <span className="name">Felipe Santiago</span></h1>
                        <h2>Frontend Engineer</h2>
                        <p className="introduction">
                            Passionate about crafting user-friendly interfaces with React.js and TypeScript. 
                            See my <a href="#my-projects">projects</a> here and <a href="#contacts">contact</a> me on my social media!
                        </p>
                    </div>
                    <ul className="languages">
                        {languagesList.map((language, index) =>
                            <li className="language" key={index}>
                                <FontAwesomeIcon className="icon" icon={language} />
                            </li>
                        )}
                        <li className="language">
                            <div className="customIcon">TS</div>
                        </li>
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
    margin-bottom: ${componentsGap};
    
    .content {
        display: flex;
        align-items: center;
        width: 90dvw;
        justify-content: center;
        max-width: 144rem;
        box-shadow: 0 0 1rem;
        border-radius: .8rem;
        overflow: hidden;
        background-color: ${({ theme }) => theme.primaryColor};
        transition: .3s;

        .info {
            height: 100%;
            background-color: ${({ theme }) => theme.primaryColor};
            transition: background-color .3s;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            flex: 2;
            flex-basis: 0;
            padding: 2rem 0 2rem 2rem;
            
            .textHero {
                color: ${({ theme }) => theme.textColor};
                width: 80%;
                p, h2 {
                    font-size: ${fonts.fontSizeLarge};
                    font-weight: 400;
                    transition: .3s;
                }
                
                h1 {
                    font-size: ${fonts.fontSizeExtraLarge};
                    font-weight: 400;
                    transition: .3s;

                    .name {
                        font-weight: 600;
                    }                                       
                }

                h2 {
                    padding: .5rem 1rem;
                    margin: .5rem 0;
                    background: ${({ theme }) => theme.secondaryColor};
                    color: ${({ theme }) => theme.secondaryTextColor};
                    width: fit-content;
                    border-radius: .8rem;
                }

                .introduction {
                    margin-top: 1rem;
                    color: ${({ theme }) => theme.textColor};
                    font-weight: 400;
                    font-size: ${fonts.fontSizeSmall};
                    text-align: justify;
                    max-width: 50rem;
    
                    a {
                        cursor: pointer;
                        color: ${({ theme }) => theme.textColor};
                        transition: .3s;
                        text-decoration: underline;
                        font-weight: 500;

                        &:hover {
                            color: ${({ theme }) => theme.secondaryColor};
                        }
                    }
                }
            }


            .languages {
                display: flex;
                gap: 2rem;
                flex-wrap: wrap;
                justify-content: center;
                
                .language {
                    display: flex;
                    border-radius: .8rem;
                    transition: .3s;
                    position: relative;
                    color: ${({theme}) => theme.textColor};
            
                    &::after {
                        content: '';
                        position: absolute;
                        top: 110%;
                        left: 0;
                        width: 100%;
                        height: .2rem;
                        background: ${({ theme }) => theme.secondaryColor};
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

                    &:hover {
                        color: ${({theme}) => theme.secondaryColor};
                    }

                    .icon {
                        font-size: 4rem;
                    }

                    .customIcon {
                        background-color: ${({theme}) => theme.textColor};
                        color: ${({theme}) => theme.secondaryTextColor};
                        width: 4rem;
                        height: 4rem;
                        border-radius: .8rem;
                        border: .2rem solid ${({theme}) => theme.primaryColor};
                        display: flex;
                        justify-content: end;
                        align-items: end;
                        padding: 0 .2rem;
                        font-size: 2rem;
                        font-weight: 600;
                        cursor: default;
                        line-height: .95;
                        transition: .3s;

                        &:hover {
                            background-color: ${({theme}) => theme.secondaryColor};
                        }
                    }
                }
            }
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
            
            /* tests */
            width: 100%;
            border-radius: 50%;
            height: auto;
            border: 2rem solid ${({theme}) => theme.primaryColor};
            transition: border-color .3s;

            &::after {
                content: '';
                height: 100%;
                width: 100%;
                background-color: ${({ theme }) => theme.tertiaryColor};
                transition: background-color .3s;
                position: absolute;
                opacity: .6;
            }

            .image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: drop-shadow(0 0 .3rem ${({ theme }) => theme.textColor});
                transition: filter .3s;
            }
        }
    }

    @media (max-width: 1100px) {
        .content {
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

    @media (max-width: 600px) {
        .content {
            flex-direction: column;
    
            .info {
                padding: 3rem 2rem 0 2rem;
                flex: 1;
                flex-basis: content;
                width: 100%;
                
                .textHero {
                    width: 100%;
    
                    p, h2 {
                        font-size: ${fonts.fontSizeMedium};
                    }
                    
                    h1 {
                        font-size: ${fonts.fontSizeLarge};
                        font-weight: 400;                                    
                    }
    
                    h2 {
                        padding: .3rem .5rem;
                    }
                }

                .languages {        
                    gap: 1rem;
                    .language {
                        .icon {
                            font-size: 3rem;
                        }
    
                        .customIcon {
                            width: 3rem;
                            height: 3rem;
                            border-radius: .6rem;
                            padding: 0 .1rem;
                            font-size: 1.5rem;
                            font-weight: 500;
                        }
                    }
                }
            }
    
            .imgHero {
                flex: 1;
                flex-basis: content;
                width: 100%;
            }
        }
    }
`