import { ThemeContext } from "@contexts/themeContext";
import { faFlask, faLaptopCode, faTools } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react";
import styled from "styled-components"

export const AboutMe = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            <div className="content">
                <h2 className="title">About me</h2>
                <h3 className="subtitle">I'm Felipe Santiago, Front-End Engineer</h3>

                <div className="aboutMe">
                    <p className="summarize">
                        Since starting my programming journey in July 2023, I've been deeply immersed in web development, focusing on HTML, CSS, JavaScript, and React JS.
                        Consistently prioritizing responsive design and dynamic functionalities, my projects aim to improve user experiences and interfaces.
                        Adopting TypeScript has been transformative, enhancing code quality, minimizing bugs, and boosting security.
                        I'm driven by the opportunity to use emerging technologies to solve problems and simplify daily tasks for people.
                    </p>

                    <div className="whatIDo">
                        <h3 className="title">What I Do?</h3>
                        <ul className="abilitiesList">
                            <li className="ability">
                            <FontAwesomeIcon icon={faLaptopCode} />
                                <div>
                                    <h4>Frontend Development</h4>
                                    <p>I create responsive desing and dynamic functionalities ot improve user experiences and interfaces</p>
                                </div>
                            </li>
                            <li className="ability">
                            <FontAwesomeIcon icon={faTools} />
                                <div>
                                    <h4>TypeScript</h4>
                                    <p>Adopting TypeScript on my projects has been transformative, enhancing code quality, minimizing bugs, and boosting security.</p>
                                </div>
                            </li>
                            <li className="ability">
                            <FontAwesomeIcon icon={faFlask} />
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
    padding: 1rem;
    
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90dvw;
        justify-content: center;
        max-width: 144rem;
        box-shadow: 0 0 1rem #000000;
        border-radius: .8rem;
        overflow: hidden;
        padding: 2rem;
        background-color: ${({theme}) => theme.primaryColor};
        color: ${({theme}) => theme.textColor};
        transition: .3s;

        .title {
            
        }
    }

`