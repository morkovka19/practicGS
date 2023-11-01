import { OptionizedCSS, extractCSSOption, scale } from '@greensight/gds';
import { Size, Variant } from '../enums';
import { InputTheme } from '../types';
import { colors } from 'src/scripts/gds';

const basicTheme: InputTheme<typeof Variant, typeof Size> = {
    input: state => {
        const size: OptionizedCSS<typeof Size> = {
            md: {
                width: '100%',
                padding: `${scale(1, true)}px ${scale(3, true)}px`,
                fontSize: '14px',
                fontWeight: 400,

                ...(state.textArea && {
                    padding: scale(3, true),
                    height: scale(8),
                    resize: 'none',
                }),
            },
            sm: {},
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                borderRadius: scale(1, true),
                border: `1px solid ${colors.grey400}`,
                color: colors.black,
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '140%',
                ':focus': {
                    outline: 'none',
                    borderColor: colors.blueHover,
                },
                '::placeholder': {
                    color: colors.grey600,
                },

                ...(state.error &&
                    state.touched && {
                        borderColor: colors.error,
                    }),
            },
        };
        return {
            ...extractCSSOption(size, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
    label: state => {
        const size: OptionizedCSS<typeof Size> = {
            md: {
                fontSize: scale(3, true),
                fortWeight: 500,
            },
            sm: {},
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                color: colors.black,

                ...(state.error &&
                    state.touched && {
                        color: colors.error,
                    }),
            },
        };
        return {
            ...extractCSSOption(size, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
    inputBlock: state => {
        const size: OptionizedCSS<typeof Size> = {
            md: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                boxSizing: 'border-box',
                margin: '0 auto',
                position: 'relative',
            },
            sm: {},
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {},
        };
        return {
            ...extractCSSOption(size, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
    error: state => {
        const size: OptionizedCSS<typeof Size> = {
            md: {
                position: 'absolute',
            },
            sm: {},
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                color: colors.error,
                fontSize: scale(3, true),
                display: 'none',

                ...(state.error &&
                    state.touched && {
                        display: 'block',
                        top: scale(6),
                        ...(state.textArea && {
                            top: scale(21, true),
                        }),
                    }),
            },
        };
        return {
            ...extractCSSOption(size, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
};

export const INPUT_THEMES = {
    basic: basicTheme,
};
