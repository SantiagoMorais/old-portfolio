import { Header } from "@components/header"
import { Hero } from "@components/hero";
import { ThemeContext } from "@contexts/themeContext";
import { useContext } from "react";
import styled from "styled-components"
import backgroundImage from "@assets/background-image.jpg"
import { AboutMe } from "@components/about";
import { Skills } from "@components/skills";
import { Projects } from "@components/projects";
import { ScrollButton } from "@components/scrollButton";
import { Contacts } from "@components/contacts";

export const Home = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            <div className="backgroundImage"></div>
            <Header />
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Contacts />
            <ScrollButton />
        </Container>
    )
}

const Container = styled.main`
  background-color: ${({ theme }) => theme.primaryColor};
  min-height: 100dvh;
  transition: background-color .3s;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  .backgroundImage {
    width: 100vw;
    height: 100dvh;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
    position: absolute;
    opacity: .4;
    z-index: 0;
  }
`