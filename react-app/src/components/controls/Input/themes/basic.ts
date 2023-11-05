import { OptionizedCSS, extractCSSOption, scale } from '@greensight/gds';
import { typography } from 'src/scripts/gds';
import { Size, Variant } from '../enums';
import { InputTheme } from '../types';
import { colors } from 'src/scripts/gds';

const basicTheme: InputTheme<typeof Variant, typeof Size> = {
    input: state => {
        const size: OptionizedCSS<typeof Size> = {
            md: {
                width: '100%',
                padding: `${scale(2, true)}px ${scale(3, true)}px`,
                ...typography('desktop/bodyS'),
                ...(state.textArea && {
                    padding: scale(3, true),
                    height: scale(9),
                    resize: 'none',
                }),
            },
            sm: {
                ...typography('desktop/bodyS'),
            },
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                borderRadius: scale(1, true),
                border: `1px solid ${colors.grey400}`,
                color: colors.black,
                ...typography('desktop/bodyS'),
                ':focus': {
                    outline: 'none',
                    borderColor: colors.blueHover,
                },
                '::placeholder': {
                    color: colors.grey600,
                    ...typography('desktop/bodyS'),
                },

                ...(state.meta.error &&
                    state.meta.touched && {
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
            md: typography('desktop/bodyXSbold'),
            sm: typography('desktop/bodyXSbold'),
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                color: colors.black,
                ...(state.meta.error &&
                    state.meta.touched && {
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
            sm: {
                width: scale(10),
            },
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
            sm: {
                position: 'relative',
            },
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                color: colors.error,
                ...typography('desktop/bodyXSbold'),
                display: 'none',

                ...(state.meta.error &&
                    state.meta.touched && {
                        display: 'block',
                        top: scale(7),
                        ...(state.textArea && {
                            top: scale(11),
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
