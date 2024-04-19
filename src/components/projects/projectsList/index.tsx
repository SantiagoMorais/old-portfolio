import { useContext, useMemo } from "react";
import styled from "styled-components"
import { StackIcons } from "github-automated-repos";
import { fonts } from "@styles/variables";
import { ThemeContext } from "@contexts/themeContext";
import imageNotFound from "@assets/image-not-found.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer, faPlus } from "@fortawesome/free-solid-svg-icons";

interface IProjectsListProps {
    data: {
        banner: string,
        description: string,
        homepage: string,
        html_url: string,
        id: number,
        name: string,
        topics: string[]
    }[];
}

export const ProjectsList: React.FC<IProjectsListProps> = ({data}) => {
    const { theme } = useContext(ThemeContext);

    const handleShowImage = (image) => {
        
    }

    const bannerUrls = useMemo(() => {
        if (data?.length > 0) {
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
                            icon !== "portfolio" && icon !== "contextapi" &&
                            <StackIcons key={index} itemTopics={icon} className={icon} />
                        )}
                    </div>
                    <div className="buttons">
                        <button className="button"><a href={project.homepage} target="_blank">Web Page</a></button>
                        <button className="button"><a href={project.html_url} target="_blank">Github repository</a></button>
                        <button className="seeImage"><FontAwesomeIcon icon={faPlus} className="icon" onClick={() => handleShowImage()}/></button>
                    </div>
                    <div className="message">
                        <p>
                            See more details
                            <FontAwesomeIcon icon={faHandPointer} className="icon" />
                        </p>
                    </div>
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
    gap: 2.5rem;

    .project {
        flex: 1;
        flex-basis: 0;
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.tertiaryColor};
        width: max-content;
        overflow: hidden;
        min-width: 35rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        padding-bottom: 1rem;
        border: .2rem solid transparent;
        position: relative;

        &:hover > .buttons {
            opacity: 1;
        }
        
        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: ${({theme}) => theme.secondaryColor};
            opacity: 0;
            transform: scaleY(0);
            transform-origin: bottom;
            transition: transform .5s, opacity .5s;
            z-index: 2;
        }
        
        &:hover::before {
            transform: scaleX(1);
            opacity: .6;
        }
        
        &:not(:hover)::before {
            transform: scaleY(0);
            transform-origin: top;
        }

        .banner {
            img {
                width: 100%;
                height: 40rem;
                object-fit: cover;
                object-position: top center;
            }
        }

        .name {
            text-transform: capitalize;
            text-align: center;
            font-size: ${fonts.fontSizeMedium};
        }

        .description {
            text-align: center;
            font-size: ${fonts.fontSizeSmall};
        }

        .icons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            padding: 0 1rem;

            img {
                width: 3rem;
            }
        }

        .buttons {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            padding: 0 1rem;
            height: 100%;
            width: 100%;
            position: absolute;
            z-index: 2;
            transition: .5s;
            opacity: 0;

            .button {
                width: 90%;
                border-radius: 0 2rem 0 2rem;
                background-color: ${({ theme }) => theme.textColor};
                height: fit-content;
                overflow: hidden;
                transition: .5s;
                border: .2rem solid transparent;
                
                &:hover {
                    box-shadow: 0 0 1rem ${({theme}) => theme.secondaryTextColor};
                    border-color: ${({theme}) => theme.textColor};
                    background-color: ${({theme}) => theme.tertiaryColor};
                }
                
                &:hover > a {
                    color: ${({theme}) => theme.textColor};
                }
                
                a {
                    color: ${({ theme }) => theme.secondaryTextColor};
                    padding: .2rem 1rem;
                    font-size: ${fonts.fontSizeLarge};
                    width: 100%;
                    display: inline-block;
                    cursor: pointer;
                    transition: .5s;
                }
            }

            .seeImage {
                font-size: ${fonts.fontSizeLarge};
                opacity: .6;
                padding: 1rem;
                width: 6rem;
                height: 6rem;
                border-radius: 1rem;
                transition: .5s;
                cursor: pointer;
                border: .2rem solid transparent;

                &:hover {
                    opacity: 1;
                    box-shadow: 0 0 1rem ${({theme}) => theme.secondaryTextColor};
                    border-color: ${({theme}) => theme.textColor};
                    background-color: ${({theme}) => theme.tertiaryColor};
                    color: ${({theme}) => theme.textColor};

                }
            }
        }

        .message {
            text-align: center;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 1rem;
            
            p {
                font-size: ${fonts.fontSizeMedium};
                background-color: ${({ theme }) => theme.secondaryTextColor};
                border: .2rem solid transparent;
                padding: .2rem 1rem;
                border-radius: .8rem;
                color: ${({ theme }) => theme.textColor};
                max-width: 30rem;
                width: 100%;
                display: flex;
                gap: 1rem;
                align-items: center;
                justify-content: center;
            }
        }
    }

    @media (max-width: 600px) {
        .project {
            min-width: 25rem;
        }
    }
`