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
    primaryColor: "#F3F8FF",
    secondaryColor: "#7E30E1",
    tertiraryColor: "#49108B",
    textColor: "#000000",
    secondaryTextColor: "#ffffff",
}

export const darkColors: IColors = {
    primaryColor: "#191825",
    secondaryColor: "#49108B",
    tertiraryColor: "#7E30E1",
    textColor: "#ffffff",
    secondaryTextColor: "#000000",
}

export const fonts: IFonts = {
    fontFamily: "'Poppins', sans-serif",
    secondaryFontFamily: "'Raleway', sans serif",
    fontSizeSmall: "1.6rem",
    fontSizeMedium: "2.4rem",
    fontSizeLarge: "3rem",
    fontSizeExtraLarge: "4.5rem"
}

