import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import heroImage from "@assets/felipe-image.png"
import { useContext } from "react"
import { ThemeContext } from "@contexts/themeContext"
import { fonts } from "@styles/variables"

export const Hero = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            <div className="content">
                <div className="info">
                    <div className="textHero">
                        <p>Hi there!</p>
                        <h1>I'm <span className="name">Felipe Santiago</span></h1>
                        <h2>Frontend Developer</h2>
                    </div>

                    <div className="social">
                        <a href="https://www.linkedin.com/in/felipe-santiago-morais/" target="_blank" className="link"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/SantiagoMorais" target="_blank" className="link"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="mailto:contatofelipesantiago@gmail.com" target="_blank" className="link"><FontAwesomeIcon icon={faAt} /></a>
                        <a href="https://wa.me/5531996951033?text=Hi,%20there!%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20your%20services.%20Let's%20talk." target="_blank" className="link"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    </div>
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
            background-color: ${({theme}) => theme.primaryColor};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            flex: 2;
            flex-basis: 0;
            
            .textHero {
                color: ${({theme}) => theme.textColor};
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
                    background: ${({theme}) => theme.secondaryColor};
                    width: fit-content;
                    border-radius: .8rem;
                }
            }

            .social {
                display: flex;
                gap: 2rem;

                .link {
                    font-size: ${fonts.fontSizeLarge};
                    color: ${({theme}) => theme.textColor};
                    transition: .3s;

                    &:hover {
                        color: ${({theme}) => theme.secondaryColor}
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
            min-width: 20rem;

            &::after {
                content: '';
                height: 100%;
                width: 100%;
                background-color: ${({theme}) => theme.tertiaryColor};
                position: absolute;
                opacity: .6;
            }

            .image {
                width: 100%;
                height: auto;
                object-fit: cover;
                filter: drop-shadow(0 0 .3rem ${({theme}) => theme.textColor});
            }
        }
    }
`