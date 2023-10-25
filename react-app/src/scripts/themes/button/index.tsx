import tokens from '../../../../public/tokens.json';
import { scale } from '@greensight/gds';

export const Button = {
    base: {
        default: {
            round: true,
            half: true,
        },
    },
    themes: {
        primary: {
            default: {
                color: tokens.colors.white,
                bg: tokens.colors.brand,
            },
            hover: {
                bg: tokens.colors.brandHover,
            },
            active: {
                border: 'transparent',
                shadow: tokens.shadows.inner,
            },
            disabled: {
                bg: tokens.colors.grey70,
                color: tokens.colors.grey40,
            },
        },
        secondary: {
            default: {
                color: tokens.colors.brand,
                border: tokens.colors.brand,
                bg: tokens.colors.white,
            },
            hover: {
                color: tokens.colors.brandHover,
                border: tokens.colors.brandHover,
            },
            active: {
                bg: tokens.colors.grey90,
                border: 'transparent',
                shadow: tokens.shadows.inner,
            },
            disabled: {
                border: tokens.colors.grey60,
                color: tokens.colors.grey40,
            },
        },
    },
    sizes: {
        lg: {
            height: scale(8),
            padding: scale(3),
            iconSize: scale(4),
            iconOffset: scale(1),
            typography: 'buttonLg',
        },
        md: {
            height: scale(6),
            padding: scale(3),
            iconSize: scale(3),
            iconOffset: scale(1),
            typography: 'buttonMd',
        },
        sm: {
            height: scale(5),
            padding: scale(2),
            iconSize: scale(2),
            iconOffset: scale(1),
            typography: 'buttonSm',
        },
    },
}
