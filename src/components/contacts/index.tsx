import { ThemeContext } from "@contexts/themeContext"
import { faLinkedin, faSquareGithub, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fonts } from "@styles/variables"
import { useContext } from "react"
import styled from "styled-components"

export const Contacts = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container id="contacts" theme={theme}>
            <div className="content">
                <h2 className="title">Contact me on my social media</h2>
                <ul className="social">
                    <li className="link">
                        <a target="_blank" href="https://www.linkedin.com/in/felipe-santiago-morais/">
                            <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                    </li>
                    <li className="link">
                        <a target="_blank" href="https://www.linkedin.com/in/felipe-santiago-morais/">
                        <FontAwesomeIcon icon={faSquareGithub} />
                        </a>
                    </li>
                    <li className="link">
                        <a target="_blank" href="mailto:contatofelipesantiago@gmail.com">
                        <FontAwesomeIcon icon={faAt} />
                        </a>
                    </li>
                    <li className="link">
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5531996951033&text=Hi%2C%20Felipe%21%20I%20got%20your%20contact%20from%20your%20portfolio.">
                        <FontAwesomeIcon icon={faSquareWhatsapp} />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: ${({theme}) => theme.secondaryTextColor};
        opacity: .6;
    }

    .content {
        width: 100%;
        max-width: 144rem;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 1rem;

        .title {
            color: ${({theme}) => theme.textColor};
            font-size: ${fonts.fontSizeMedium};
        }
    }
`