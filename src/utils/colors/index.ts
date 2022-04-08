const mainColors = {
    green1: '#0BCAD4',
    green2: '#EDFCFD',
    dark1: '#112340',
    dark2: '#495A75',
    dark3: '#8092AF',
    grey1: '#7D8797',
    grey2: '#E9E9E9',
    blue1: '#0066CB',
    white: '#fff',
};

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    background: mainColors.white,
    black: 'black',
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        tertiary: mainColors.dark2,
        white: mainColors.white,
        menuActive: mainColors.green1,
        menuInactive: mainColors.dark2,
    },
    button: {
        primary: {
            background: mainColors.green1,
            text: mainColors.white,
        },
        secondary: {
            background: mainColors.white,
            text: mainColors.dark1,
        },
        dark: {
            background: mainColors.dark2,
            text: mainColors.white,
        },
    },
    border: mainColors.grey2,
    borderActive: mainColors.blue1,
    cardLight: mainColors.green2,
};
