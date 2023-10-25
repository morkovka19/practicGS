import tokens from '../../public/tokens.json';
import { ComponentsTheme, Theme, createTheme, useTheme as useGDSTheme, typography as GDStypography } from "@greensight/gds";
import { global } from './themes/global';
import { CSSObject } from '@emotion/core';
export type ColorsTheme = typeof colors;
export type TypographyParam = keyof typeof tokens.typography.styles;

const colors = tokens.colors;

export interface ExtendedTheme extends Omit<Theme, 'colors'> {
    components?: ComponentsTheme;
    colors?: ColorsTheme;
}

const settings: ExtendedTheme = {
    global
};

const theme = createTheme({
    tokens,
    settings,
}) as ExtendedTheme;

const typography = (name: TypographyParam = 'body') => GDStypography(name, theme) as CSSObject;
const useTheme = () => useGDSTheme() as ExtendedTheme;

import {
    // ...
    createMediaQueries,
} from '@greensight/gds';


const {
    layout: { breakpoints },
} = tokens;

export const MEDIA_QUERIES = createMediaQueries(breakpoints);

export * from '@greensight/gds';
export { typography, theme, useTheme, colors };
