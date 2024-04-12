import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import heroImage from "@assets/felipe-image.png"
import { useContext } from "react"
import { ThemeContext } from "@contexts/themeContext"

export const Hero = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            <div className="content">
                <div className="info">
                    <div className="textHero">
                        <p>Hello! 👋🏽,</p>
                        <h1>I'm the Felipe Santiago Morais</h1>
                        <h2>Frontend Developer</h2>
                    </div>

                    <div className="social">
                        <a href="#" className="link"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#" className="link"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="link"><FontAwesomeIcon icon={faAt} /></a>
                        <a href="#" className="link"><FontAwesomeIcon icon={faWhatsapp} /></a>
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
    padding: 5rem 0;
    width: 100%;
    
    .content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;


        .info {
            .textHero {
                background-color: red;
            }

            .social {
                display: flex;

                .link {
                }
            }
        }
        
    
        .textHero, .imgHero {
            flex: 0 0 50%;
            max-width: 50dvh;
            padding: 0 1.5rem;
        }


        .imgHero {
            border-radius: 50%;
            width: 50dvh;
            height: 50dvh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1rem solid transparent;
            transition: .3s;

            .image {
                width: 120%;
                height: auto;
                transform: translateY(1rem);
            }
        }
    }


    .content .row .textHero {
        background-color: red;
    }
    `