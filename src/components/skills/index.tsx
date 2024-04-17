import { ThemeContext } from "@contexts/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import styled from "styled-components";
import skillsData from "@json/index.json";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBook, faCode, faKey, faLaptopCode, faTools } from "@fortawesome/free-solid-svg-icons";
import { componentsGap, fonts } from "@styles/variables";

const iconMapping: Record<string, IconDefinition> = {
    code: faCode,
    tools: faTools,
    book: faBook,
    key: faKey,
};

const defaultIcon = faLaptopCode;

export const Skills = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme} id="skills">
            <div className="content">
                <h2 className="title">Skills</h2>
                <div className="skillLists">
                    {skillsData &&
                        skillsData.skills.map((skill, index) => (
                            <div className="skill" key={index}>
                                <div className="subtitle">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={iconMapping[skill.icon] || defaultIcon}
                                    />
                                    <h3 className="skillTitle">{skill.category}</h3>
                                </div>
                                <ul className="list">
                                    {skill.list.map((item, idx) => (
                                        <li className="item" key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
        </Container>
    );
};

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

        .skillLists {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            width: 100%;

            .skill {
                max-width: 40rem;
                flex: 1;
                padding: 1rem;
                border-radius: .8rem;
                border: .1rem solid;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-width: 24rem;
                
                .subtitle {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    position: relative;

                    .icon {
                        color: ${({ theme }) => theme.secondaryColor};
                        border: .2rem solid;
                        margin-bottom: 1rem;
                        padding: 1rem;
                        width: 3rem;
                        height: 3rem;
                        border-radius: 50%;
                    }
                    
                    .skillTitle {
                        text-align: center;
                        color: ${({ theme }) => theme.textColor};
                        font-size: calc(${fonts.fontSizeSmall} + .5rem);
                    }
                }
                
                .list {
                    gap: .5rem;
                    display: flex;
                    flex-direction: column;
                    font-size: ${fonts.fontSizeSmall};
                    text-align: center;

                    .item {
                        padding-bottom: .5rem;
                        border-bottom: .1rem solid ${({theme}) => theme.secondaryColor};
                        width: 20rem;

                        &:last-child {
                            border-bottom: none;
                        }
                    }
                }
            }
        }
    }
`