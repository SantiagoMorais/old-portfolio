import { DefaultTheme } from "styled-components";

//constacts data
export const phoneNumber: number = 5531996951033;
export const whatsappMessage: string =
  "Hi, Felipe! I got your contact from your portfolio.".split(" ").join("%20");
export const email: string = "contatofelipesantiago@gmail.com";
export const githubUsername: string = "SantiagoMorais";
export const linkedinUsername: string = "felipe santiago morais"
  .split(" ")
  .join("-");
export const githubRepositoriesLink: string =
  "https://github.com/SantiagoMorais?tab=repositories";

export interface IColors {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  textColor: string;
  secondaryTextColor: string;
}

interface IFonts {
  fontFamily: string;
  fontSizeSmall: string;
  fontSizeMedium: string;
  fontSizeLarge: string;
  fontSizeExtraLarge: string;
}

export const lightColors: IColors = {
  primaryColor: "#F6F5F5",
  secondaryColor: "#FBA834",
  tertiaryColor: "#B6BBC4",
  textColor: "#000000",
  secondaryTextColor: "#ffffff",
};

export const darkColors: IColors = {
  primaryColor: "#000000",
  secondaryColor: "#F4CE14",
  tertiaryColor: "#191919",
  textColor: "#ffffff",
  secondaryTextColor: "#000000",
};

export const fonts: IFonts = {
  fontFamily: "'Roboto', sans-serif",
  fontSizeSmall: "1.6rem",
  fontSizeMedium: "2.4rem",
  fontSizeLarge: "3rem",
  fontSizeExtraLarge: "4.5rem",
};

export const componentsGap = "3rem";

export const linkHoverEffect = (
  theme: DefaultTheme,
  transformOrigin: string,
  transformDestiny: string
) => `
    transition: .3s;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .2rem;
        background: ${theme.secondaryColor};
        transform: scaleX(0);
        transform-origin: ${transformOrigin};
        transition: transform .5s;
    }

    &:hover::after {
        transform: scaleX(1);
    }

    &:not(:hover)::after {
        transform: scaleX(0);
        transform-origin: ${transformDestiny};
    }
`;

export const secondLinkHoverEffect = (
  backgroundColor: string,
  opacity: string
) => `
    transition: .5s;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: ${backgroundColor};
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform .5s, opacity .5s;
        z-index: 0;
    }
    
    &:hover::before {
        transform: scaleX(1);
        opacity: ${opacity};
    }

    &:not(:hover)::before {
        transform: scaleX(0);
        transform-origin: right;
    }
`;
