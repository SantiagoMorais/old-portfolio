import { Header } from "@components/header"
import { Hero } from "@components/hero";
import { ThemeContext } from "@contexts/themeContext";
import { useContext } from "react";
import styled from "styled-components"

export const Home = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            <Header />
            <Hero />
        </Container>
    )
}

const Container = styled.main`
  background-color: ${({ theme }) => theme.primaryColor};
  min-height: 100dvh;
  transition: background-color .3s;
`