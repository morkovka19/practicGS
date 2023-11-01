import { createFutureButtonWithTheme } from '@greensight/gds';
import { CSSObject } from '@emotion/core';
import { TypographyParam } from 'src/scripts/gds';
import { Variant, Size } from './enums';
import { BUTTON_THEMES } from './themes/basic';

function custonTypography(
    name:
        | 'buttonLg'
        | 'buttonMd'
        | 'buttonSm'
        | 'captionUppercase'
        | 'caption'
        | 'smallBold'
        | 'small'
        | 'bodyBold'
        | 'body'
        | 'subheading'
        | 'title'
        | 'headline'
        | 'h4'
        | 'h3'
        | 'h2'
        | 'h1'
): CSSObject {
    throw new Error(`Function not implemented. name: ${name}`);
}

export const Button = createFutureButtonWithTheme<typeof Variant, typeof Size, TypographyParam>(
    BUTTON_THEMES.basic,
    Variant.primary,
    Size.sm,
    custonTypography
);
