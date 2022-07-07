const theme = {
  // Example how we can extend theme object:
  margins: {
    small: 8,
    medium: 16,
    large: 24,
  },
  // Example how we can redefine default theme object properties:
  // primary: {
  //   main: 'red',
  //   light: 'blue',
  //   dark: 'grey',
  //   contrast: 'white',
  // },
};

type ProjectThemeType = typeof theme;

declare global {
  namespace DesignSystem {
    interface IProjectTheme extends ProjectThemeType {}
  }
}

export default theme;
