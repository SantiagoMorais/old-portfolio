import { useContext, useMemo } from "react";
import styled from "styled-components"
import { StackIcons, useGitHubAutomatedRepos } from "github-automated-repos";
import { fonts } from "@styles/variables";
import { ThemeContext } from "@contexts/themeContext";
import imageNotFound from "@assets/image-not-found.jpg"

export const ProjectsList = () => {
    const { theme } = useContext(ThemeContext);
    const data = useGitHubAutomatedRepos("SantiagoMorais", "portfolio")

    const bannerUrls = useMemo(() => {
        if (data.length > 0) {
            return data.map(project => {
                const updatedBanner = project.banner.includes("DIGOARTHUR")
                    ? project.banner.replace("DIGOARTHUR", "SantiagoMorais")
                    : project.banner;
                return updatedBanner;
            });
        }
        return [];
    }, [data]);

    return (
        <Container theme={theme}>
            {data.length > 0 && data.map((project, index) =>
                <div className="project" key={project.id}>
                    <div className="banner">
                        <img src={bannerUrls[index] ? bannerUrls[index] : imageNotFound} alt={project.name} />
                    </div>
                    <h3 className="name">{project.name.replace(/-/g, " ")}</h3>
                    <p className="description">{project.description}</p>
                    <div className="icons">
                        {project.topics.map((icon, index) =>
                            <StackIcons key={index} itemTopics={icon} className="icon" />
                        )}
                    </div>
                    <div className="buttons">
                        <button className="homePage"><a href={project.homepage} target="_blank">Web Page</a></button>
                        <button className="githubRepo"><a href={project.html_url} target="_blank">Github repository</a></button>
                    </div>
                    <p className="message">Click here to more details</p>
                </div>
            )}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    .project {
        flex: 1;
        flex-basis: 0;
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.tertiaryColor};
        width: max-content;
        overflow: hidden;
        min-width: 30rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-bottom: 1rem;

        .banner {
            img {
                width: 100%;
                height: 30rem;
                object-fit: cover;
            }
        }

        .name {
            text-transform: capitalize;
            text-align: center;
            font-size: ${fonts.fontSizeMedium};
        }

        
    }
`