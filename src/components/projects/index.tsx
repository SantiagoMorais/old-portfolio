import { componentsGap, fonts, githubRepositoriesLink, secondLinkHoverEffect } from "@utils/variables"
import styled from "styled-components"
import { useContext, useState } from "react"
import { ThemeContext } from "@contexts/themeContext"
import { ProjectsList } from "./projectsList"
import { useGitHubAutomatedRepos } from "github-automated-repos"

type TCategory = "portfolio" | "typescript" | "react" | "tests" | "context-api" | "javascript" | "react-testing-library" | "html5" | "css3" | "redux" | "tailwindcss";

export const Projects = () => {
    const { theme } = useContext(ThemeContext);
    const [category, setCategory] = useState<TCategory>("portfolio")
    const data = useGitHubAutomatedRepos("SantiagoMorais", category)
    const personalPortfolio = useGitHubAutomatedRepos("SantiagoMorais", "personal-portfolio")
    console.log(personalPortfolio);

    const handleCategory = (category: TCategory) => {
        setCategory(category);
    }

    const categoryList: { name: string, topic: TCategory }[] = [
        { name: "See All", topic: "portfolio" },
        { name: "React", topic: "react" },
        { name: "TypeScript", topic: "typescript" },
        { name: "JavaScript", topic: "javascript" },
        { name: "Integrative Tests", topic: "tests" },
        { name: "Context API", topic: "context-api" },
        { name: "Redux", topic: "redux" },
        { name: "Tailwind CSS", topic: "tailwindcss" },
    ]

    return (
        <Container id="myProjects" theme={theme}>
            <div className="content">
                <h2 className="title">My Projects</h2>
                <p className="portfolioDescription">
                    This portfolio was developed using React and TypeScript, powered by the Vite application. Integrative tests are currently being implemented using Vitest and React Testing Library. Finally, the project's styling is being crafted with the Style-Components library.
                    <br />
                    See my the github repository of my personal portfolio<a className="personalPortfolioLink" href={personalPortfolio[0]?.html_url} target="_blank"> here</a>.
                    <br />
                    See more projects below:
                </p>
                <ul className="categoryList">
                    {categoryList.map((categoryItem, index) =>
                        <li className="category" key={index}>
                            <button
                                className={`button ${category === categoryItem.topic && "selected"}`}
                                data-testid={categoryItem.topic}
                                onClick={() => handleCategory(categoryItem.topic)}>
                                <p className="buttonLabel">{categoryItem.name}</p>
                            </button>
                        </li>
                    )}
                </ul>
                <ProjectsList data={data} />
                <a
                    href={githubRepositoriesLink}
                    className="repositoriesLink"
                    target="_blank"
                >
                    <p className="buttonLabel">See more projects on my GitHub Repository</p>
                </a>
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
        width: 100%;
        align-items: center;
        justify-content: space-around;
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
            background-color: ${({ theme }) => theme.tertiaryColor};
            border-radius: 0.8rem;
            transition: background-color .3s;
        }

        .portfolioDescription {
            font-size: ${fonts.fontSizeSmall};
            text-align: center;
            max-width: 100rem;

            .personalPortfolioLink {
                color: ${({ theme }) => theme.secondaryColor};
            }
        }

        .categoryList {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
            
            .category {
                flex: 1;
                flex-basis: 0;
                margin-bottom: 1rem;

                .button {
                    width: 100%;
                    min-width: 15rem;
                    background: ${({ theme }) => theme.tertiaryColor};
                    border: .1rem solid transparent;
                    border-radius: .8rem;
                    padding: .9rem;
                    overflow: hidden;
                    cursor: pointer;
                    transition: .3s;

                    &.selected {
                        background: ${({ theme }) => theme.secondaryColor};
                        color: ${({ theme }) => theme.secondaryTextColor};

                        .buttonLabel {
                            color: ${({ theme }) => theme.secondaryTextColor};
                        }
                    }
                    
                    &:hover {
                        border-color: ${({ theme }) => theme.textColor};
                    }
        
                    ${({ theme }) => secondLinkHoverEffect(theme.secondaryColor, ".6")}

                    .buttonLabel {
                        position: relative;
                        font-weight: 500;
                        color: ${({ theme }) => theme.textColor};
                        font-size: ${fonts.fontSizeSmall};
                        transition: .3s;
                    }
                }
            }
        }

        .repositoriesLink {
            width: fit-content;
            min-width: 15rem;
            background: ${({ theme }) => theme.tertiaryColor};
            border: .1rem solid transparent;
            border-radius: .8rem;
            padding: .9rem;
            overflow: hidden;
            cursor: pointer;
            transition: .3s;
            color: ${({ theme }) => theme.textColor};

            &:hover {
                border-color: ${({ theme }) => theme.textColor};
            }

            ${({ theme }) => secondLinkHoverEffect(theme.secondaryColor, ".6")}

            .buttonLabel {
                position: relative;
                font-weight: 500;
                color: ${({ theme }) => theme.textColor};
                font-size: ${fonts.fontSizeSmall};
                transition: .3s;
            }
        }
    }

    @media (max-width: 600px) {
        .content {
            .title {
                font-size: ${fonts.fontSizeLarge};
                padding: 1rem;
                letter-spacing: .6rem;
            }
        }
    }
`