import React from 'react';

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

declare global {
  namespace DesignSystem {
    interface IProjectTheme {}
  }
}

export type ThemeType = ITheme & DesignSystem.IProjectTheme;

type UpdateTheme = RecursivePartial<ThemeType> & Record<string, any>;

export interface IThemeContext {
  theme: ThemeType;
  updateTheme: (updatedTheme: UpdateTheme) => void;
}

export interface IThemeProvider {
  theme: UpdateTheme;
  children: React.ReactNode,
}

export type createStylesOptions = {
  name?: string;
  index?: number;
}

interface IPalette {
  main: string,
  dark: string,
  light: string,
  contrast: string,
}

interface IDefaultPalette {
  main: string,
  dark: string,
  light: string,
  extraLight: string,
}

export interface ITheme {
  primary: IPalette,
  secondary: IPalette,
  error: IPalette,
  success: IPalette,
  default: IDefaultPalette,
  background: {
    default: string,
  },
  text: {
    primary: string,
    secondary: string,
    disabled: string,
    hint: string,
  }
  font: string,
}
