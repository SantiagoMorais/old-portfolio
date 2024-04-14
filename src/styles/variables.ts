export interface IColors {
    primaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    textColor: string,
    secondaryTextColor: string
}

interface IFonts {
    fontFamily: string,
    fontSizeSmall: string,
    fontSizeMedium: string,
    fontSizeLarge: string,
    fontSizeExtraLarge: string
}

export const lightColors: IColors = {
    primaryColor: "#F6F5F5",
    secondaryColor: "#FBA834",
    tertiaryColor: "#B6BBC4",
    textColor: "#000000",
    secondaryTextColor: "#ffffff",
}

export const darkColors: IColors = {
    primaryColor: "#07031A",
    secondaryColor: "#F4CE14",
    tertiaryColor: "#31304D",
    textColor: "#ffffff",
    secondaryTextColor: "#000000",
}

export const fonts: IFonts = {
    fontFamily: "'Roboto', sans-serif",
    fontSizeSmall: "1.6rem",
    fontSizeMedium: "2.4rem",
    fontSizeLarge: "3rem",
    fontSizeExtraLarge: "4.5rem"
}

