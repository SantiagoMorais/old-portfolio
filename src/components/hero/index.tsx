import styled from "styled-components";
import heroImage from "@assets/imgs/felipe-image.png";
import { useContext } from "react";
import { ThemeContext } from "@contexts/themeContext";
import { componentsGap, fonts, linkHoverEffect } from "@utils/variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  const { theme } = useContext(ThemeContext);

  const languagesList = [faHtml5, faCss3Alt, faJsSquare, faReact];

  return (
    <Container theme={theme}>
      <div className="content">
        <div className="info">
          <div className="textHero">
            <p>Hi there! I'm </p>
            <h1>
              <span className="name">Felipe Santiago</span>
            </h1>
            <h2>Frontend Engineer</h2>
            <p className="introduction">
              Passionate about crafting user-friendly interfaces with React.js
              and TypeScript. See my <a href="#myProjects">projects</a> here and{" "}
              <a href="#contacts">contact</a> me on my social media!
            </p>
          </div>
          <ul className="languages">
            {languagesList.map((language, index) => (
              <li className="language" key={index}>
                <FontAwesomeIcon className="icon" icon={language} />
              </li>
            ))}
            <li className="language">
              <div className="customIcon">TS</div>
            </li>
          </ul>
        </div>

        <div className="imgHero">
          <img src={heroImage} alt="Portfolio owner image" className="image" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 5dvw;
  margin-bottom: ${componentsGap};

  .content {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    max-width: 144rem;
    box-shadow: 0 0 1rem;
    border-radius: 0.8rem;
    overflow: hidden;
    background-color: ${({ theme }) => theme.primaryColor};
    transition: 0.3s;

    .info {
      height: 100%;
      background-color: ${({ theme }) => theme.primaryColor};
      transition: background-color 0.3s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      width: 50%;

      .textHero {
        color: ${({ theme }) => theme.textColor};
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p,
        h2 {
          font-size: ${fonts.fontSizeLarge};
          font-weight: 400;
          transition: 0.3s;
        }

        h1 {
          font-size: ${fonts.fontSizeExtraLarge};
          font-weight: 400;
          transition: 0.3s;

          .name {
            font-weight: 600;
          }
        }

        h2 {
          padding: 0.5rem 1rem;
          margin-top: 0.5rem;
          background: ${({ theme }) => theme.secondaryColor};
          color: ${({ theme }) => theme.secondaryTextColor};
          width: fit-content;
          border-radius: 0.8rem;
        }

        .introduction {
          margin-top: 1rem;
          color: ${({ theme }) => theme.textColor};
          font-weight: 400;
          font-size: ${fonts.fontSizeMedium};
          text-align: justify;
          max-width: 50rem;

          a {
            cursor: pointer;
            color: ${({ theme }) => theme.textColor};
            transition: 0.3s;
            text-decoration: underline;
            font-weight: 500;

            &:hover {
              color: ${({ theme }) => theme.secondaryColor};
            }
          }
        }
      }

      .languages {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;

        .language {
          display: flex;
          border-radius: 0.8rem;
          color: ${({ theme }) => theme.textColor};
          padding-bottom: 0.5rem;
          ${({ theme }) => linkHoverEffect(theme, "left", "right")};

          &:hover {
            color: ${({ theme }) => theme.secondaryColor};
          }

          .icon {
            font-size: 5rem;
          }

          .customIcon {
            user-select: none;
            background-color: ${({ theme }) => theme.textColor};
            color: ${({ theme }) => theme.secondaryTextColor};
            width: 5rem;
            height: 5rem;
            border-radius: 0.8rem;
            border: 0.2rem solid ${({ theme }) => theme.primaryColor};
            display: flex;
            justify-content: end;
            align-items: end;
            padding: 0 0.3rem;
            font-size: 2.6rem;
            font-weight: 600;
            cursor: default;
            line-height: 0.95;
            transition: 0.3s;

            &:hover {
              background-color: ${({ theme }) => theme.secondaryColor};
            }
          }
        }
      }
    }

    .imgHero {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 50%;
      max-width: 50rem;
      border-radius: 50%;
      max-height: 50rem;
      margin: 2rem;
      box-shadow:
        1rem 1rem 2rem ${({ theme }) => theme.tertiaryColor},
        0 0 0 1rem ${({ theme }) => theme.tertiaryColor} inset;
      transition: 0.3s;

      &::after {
        content: "";
        height: 100%;
        width: 100%;
        background-color: ${({ theme }) => theme.tertiaryColor};
        transition: background-color 0.3s;
        position: absolute;
        opacity: 0.6;
      }

      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: drop-shadow(0 0 0.3rem ${({ theme }) => theme.textColor});
        transition: filter 0.3s;
      }
    }
  }

  @media (max-width: 1100px) {
    .content {
      padding: 2rem 0;

      .info {
        .textHero {
          p,
          h2 {
            font-size: ${fonts.fontSizeMedium};
          }

          h1 {
            font-size: ${fonts.fontSizeLarge};
          }

          .introduction {
            font-size: ${fonts.fontSizeSmall};
          }
        }

        .languages {
          gap: 1.5rem;

          .language {
            .icon {
              font-size: 4rem;
            }

            .customIcon {
              width: 4rem;
              height: 4rem;
              padding: 0 0.2rem;
              font-size: 2.1rem;
              font-weight: 500;
              cursor: default;
            }
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .content {
      flex-direction: column;
      padding: 0;

      .info {
        padding: 3rem 2rem 0 2rem;
        flex-basis: content;
        width: 100%;

        .textHero {
          width: 100%;

          p,
          h2 {
            font-size: ${fonts.fontSizeMedium};
          }

          h1 {
            font-size: ${fonts.fontSizeLarge};
            font-weight: 400;
          }

          h2 {
            padding: 0.3rem 0.5rem;
          }
        }

        .languages {
          gap: 1rem;
          .language {
            .icon {
              font-size: 3rem;
            }

            .customIcon {
              width: 3rem;
              height: 3rem;
              border-radius: 0.6rem;
              padding: 0 0.1rem;
              font-size: 1.5rem;
              font-weight: 500;
            }
          }
        }
      }

      .imgHero {
        width: 90%;
      }
    }
  }
`;
