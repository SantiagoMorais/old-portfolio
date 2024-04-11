export interface IColors {
    primaryColor: string,
    secondaryColor: string,
    tertiraryColor: string,
    textColor: string,
    secondaryTextColor: string
}

interface IFonts {
    fontFamily: string,
    secondaryFontFamily: string,
    fontSizeSmall: string,
    fontSizeMedium: string,
    fontSizeLarge: string,
    fontSizeExtraLarge: string
}

export const lightColors: IColors = {
    primaryColor: "#A0153E",
    secondaryColor: "#FF204E",
    tertiraryColor: "#00224D",
    textColor: "#ffffff",
    secondaryTextColor: "#000000",
}

export const darkColors: IColors = {
    primaryColor: "#A0153E",
    secondaryColor: "#FF204E",
    tertiraryColor: "#00224D",
    textColor: "#ffffff",
    secondaryTextColor: "#000000",
}

export const fonts: IFonts = {
    fontFamily: "'Raleway', sans-serif",
    secondaryFontFamily: "'Kanit', sans-serif",
    fontSizeSmall: "4.5rem",
    fontSizeMedium: "3rem",
    fontSizeLarge: "2.4rem",
    fontSizeExtraLarge: "1.6rem"
}

