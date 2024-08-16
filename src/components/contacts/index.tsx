import { ThemeContext } from "@contexts/themeContext"
import { faLinkedin, faSquareGithub, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { email, fonts, githubUsername, linkHoverEffect, linkedinUsername, phoneNumber, whatsappMessage } from "@utils/variables"
import { useContext } from "react"
import styled from "styled-components"

export const Contacts = () => {
    const { theme } = useContext(ThemeContext);

    const contacts = [
        { href: `https://www.linkedin.com/in/${linkedinUsername}/`, icon: faLinkedin },
        { href: `https://github.com/${githubUsername}`, icon: faSquareGithub },
        { href: `mailto:${email}`, icon: faAt },
        { href: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`, icon: faSquareWhatsapp }
    ]

    return (
        <Container id="contacts" theme={theme} data-testid="contacts">
            <div className="content">
                <h2 className="title">Contact me on my social media</h2>
                <ul className="social">
                    {contacts.map((link, index) =>
                        <li className="link" key={index}>
                            <a href={link.href} target="_blank">
                                <FontAwesomeIcon icon={link.icon} className="icon" />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 0;
    position: relative;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: ${({ theme }) => theme.secondaryTextColor};
        opacity: .6;
        transition: .3s;
    }

    .content {
        width: 100%;
        max-width: 144rem;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        gap: 2rem;
        transition: .3s;

        .title {
            color: ${({ theme }) => theme.textColor};
            font-size: ${fonts.fontSizeMedium};
            text-align: center;
            transition: .3s;
        }

        .social {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;

            .link {
                a {
                    color: ${({ theme }) => theme.textColor};
                    ${({ theme }) => linkHoverEffect(theme, 'right', 'left')};
                    padding-bottom: .5rem;

                    &:hover {
                        color: ${({ theme }) => theme.secondaryColor}
                    }
                    
                    .icon {
                        width: 5rem;
                        height: 5rem;
                    }
                }
            }
        }
    }

    @media(max-width: 600px) {
        .content {
            .social {
                .link {
                    a {
                        .icon {
                            width: 4rem;
                            height: 4rem;
                        }
                    }
                }
            }
        }
    }
`
