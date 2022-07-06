import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createUseStyles, Styles, ThemeProvider as JssThemeProvider } from 'react-jss';
import { createStylesOptions, ITheme, IThemeContext, IThemeProvider, ThemeType } from './types';
import { GlobalStyles } from './GlobalStyles';
import { defaultTheme } from './defaultTheme';
import { Classes } from 'jss';
import merge from 'lodash/merge';

export const SomeContext = React.createContext({
  state: 0,
  update: (num: number) => {console.log('num', num)},
});

export const SomeContextProvider = (props: any) => {
  const {children} = props;
  const [state, setState] = useState(0);
  const update = (num: number) => {
    setState(num);
  }
  return (
    <SomeContext.Provider value={{ state, update }}>
      {children}
    </SomeContext.Provider>
  )
}

export const useSomeState = () => useContext(SomeContext);

const ThemeContext = React.createContext<IThemeContext>({
  theme: defaultTheme,
  updateTheme: () => console.log('ThemeProvider is not rendered yet'),
});

// const ThemeProvider = React.memo(
//   ({ theme: initial, children }: IThemeProvider) => {
//     const [theme, setTheme] = useState<ThemeType>(merge(defaultTheme, initial));
//     const updateTheme = useCallback(<T,>(updatedTheme: T) => {
//       setTheme(currentTheme => {
//         console.log('update called', merge(currentTheme, updatedTheme));
//         return merge(currentTheme, updatedTheme)});
//     }, []);
//
//     const memoizedValue = useMemo((): IThemeContext => {
//       return {
//         theme,
//         updateTheme,
//       };
//     }, [theme, updateTheme]);
//
//     return (
//       <ThemeContext.Provider value={memoizedValue}>
//         <JssThemeProvider theme={memoizedValue}>
//           <GlobalStyles>
//             {children}
//           </GlobalStyles>
//         </JssThemeProvider>
//       </ThemeContext.Provider>
//     );
//   },
// );

const ThemeProvider = ({ theme: initial, children }: IThemeProvider) => {
    const [theme, setTheme] = useState(merge(defaultTheme, initial));
    const [key, setKey] = useState(0);
    console.log('ThemeProvider', theme);
    const updateTheme = (updatedTheme: any) => {
      setTheme(currentTheme => {
        console.log('update called', merge(currentTheme, updatedTheme));
        // setKey((key) => key +1)
        return merge(currentTheme, updatedTheme)});
    }
    useEffect(() => {
      console.log('!!!');
    }, [theme]);
    return (
      <ThemeContext.Provider key={key} value={{
        theme,
        updateTheme,
      }}>
        {/*<JssThemeProvider theme={theme}>*/}
        {/*  <GlobalStyles>*/}
            {children}
          {/*</GlobalStyles>*/}
        {/*</JssThemeProvider>*/}
      </ThemeContext.Provider>
    );
  };
// ThemeProvider.displayName = 'ThemeProvider';

const useTheme = () => useContext(ThemeContext);

function createStyles<TStyles extends string = string, TProps = unknown>(
  styles: (theme: ThemeType) => Styles<TStyles, TProps>,
  options?: createStylesOptions,
): (data?: TProps) => Classes<TStyles> {
  return createUseStyles((providedTheme) => {
    const theme = { ...defaultTheme, ...providedTheme };
    
    return styles(theme);
  }, options);
}

export {
  defaultTheme,
  ThemeProvider,
  createStyles,
  useTheme,
}
