import { ThemeContext } from "@contexts/themeContext";
import { faFlask, faLaptopCode, faTools } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { componentsGap, fonts } from "@styles/variables";
import { useContext } from "react";
import styled from "styled-components"

export const AboutMe = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            <div className="content">
                <h2 className="title">About me <span></span></h2>
                <h3 className="subtitle">Felipe Santiago, Front-End Engineer</h3>

                <div className="aboutMe">
                    <p className="summarize">
                        Since starting my programming journey in July 2023, I've been deeply immersed in web development, focusing on HTML, CSS, JavaScript, and React JS. After a while, I adopt TypeScript and that was transformative, to enhance the code quality.
                        I'm driven by the opportunity to use emerging technologies to solve problems and simplify daily tasks for people.
                    </p>

                    <div className="whatIDo">
                        <h3 className="whatIDoTitle">What I Do:</h3>
                        <ul className="abilitiesList">
                            <li className="ability">
                                <FontAwesomeIcon icon={faLaptopCode} className="icon"/>
                                <div>
                                    <h4>Frontend Development</h4>
                                    <p>I create responsive web desing and dynamic functionalities, focused on React, to improve user experiences and interfaces.</p>
                                </div>
                            </li>
                            <li className="ability">
                                <FontAwesomeIcon icon={faTools} className="icon"/>
                                <div>
                                    <h4>TypeScript</h4>
                                    <p>Adopting TypeScript on my projects has been transformative, enhancing code quality, minimizing bugs, and boosting security.</p>
                                </div>
                            </li>
                            <li className="ability">
                                <FontAwesomeIcon icon={faFlask} className="icon"/>
                                <div>
                                    <h4>Integrative Tests</h4>
                                    <p>
                                        Utilizing Vitest, React Testing Library, and Jest, I can refine my code, ensuring seamless functionality and minimizing errors on my front-end projects.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: ${componentsGap};
    padding: 0 5dvw;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 144rem;
        box-shadow: 0 0 1rem #000000;
        border-radius: .8rem;
        overflow: hidden;
        padding: 2rem;
        background-color: ${({ theme }) => theme.primaryColor};
        color: ${({ theme }) => theme.textColor};
        transition: .3s;
        gap: 2rem;

        .title {
            padding: 2rem;
            border: .1rem solid ${({ theme }) => theme.textColor};
            width: 100%;
            text-align: center;
            font-size: ${fonts.fontSizeExtraLarge};
            text-transform: uppercase;
            letter-spacing: .8rem;
            font-weight: 500;
            background-color: ${({theme}) => theme.tertiaryColor};
            border-radius: 0.8rem;
            transition: background-color .3s;
        }

        .subtitle {
            text-align: center;
            font-size: ${fonts.fontSizeLarge};
            font-weight: 400;
        }

        .aboutMe {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .summarize {
                text-align: justify;
                font-size: ${fonts.fontSizeSmall};
                font-weight: 400;
            }

            .whatIDo {
                display: flex;
                flex-direction: column;
                align-items: center;

                .whatIDoTitle {
                    margin-bottom: 1rem;
                    font-size: ${fonts.fontSizeMedium};
                    text-transform: uppercase;
                    font-weight: 500;
                    border-bottom: .2rem solid ${({ theme }) => theme.secondaryColor};
                    width: fit-content;
                    padding: 0 2rem;

                }

                .abilitiesList {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2rem;
                    justify-content: space-around;

                    .ability {
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: start;
                        gap: 1rem;
                        min-width: 20rem;
                        max-width: 40rem;
                        font-size: ${fonts.fontSizeSmall};
                        
                        .icon {
                            font-size: 5rem;
                            color: ${({theme}) => theme.secondaryColor};
                            width: 5rem;
                        }

                        div {
                            display: flex;
                            flex-direction: column;
                            gap: .5rem;
                            height: 100%;

                            h4 {
                                font-weight: 800;
                            }

                            p {
                                font-weight: 400;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        .content {  
            .title {
                padding: 1rem;
                font-size: ${fonts.fontSizeLarge};
                letter-spacing: .6rem;
            }
    
            .subtitle {
                font-size: ${fonts.fontSizeMedium};
            }

            .aboutMe {
                .whatIDo {
                    .abilitiesList {
                        .ability {
                        }
                    }
                }
            }
        }
    }

`