import { OptionizedCSS, extractCSSOption, scale } from '@greensight/gds';
import { MEDIA_QUERIES, colors, shadows, typography } from 'src/scripts/gds';
import { SelectTheme } from '../types';
import { Size, Variant } from '../enums';

const basicTheme: SelectTheme<typeof Variant, typeof Size> = {
    select: state => {
        const sized: OptionizedCSS<typeof Size> = {
            md: {
                minWidth: '100%',
                padding: `${scale(1)}px ${scale(1, true)}px`,
                boxSizing: 'border-box',
                position: 'relative',
                border: `1px solid ${colors.grey400}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                ...typography('desktop/bodyS'),
            },
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                backgroundColor: colors.white,
                color: colors.black,
                borderRadius: scale(1, true),
                ...(state.disabled && {
                    color: colors.grey600,
                }),
            },
        };

        return {
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
    option: state => {
        const sized: OptionizedCSS<typeof Size> = {
            md: {
                padding: `${scale(1)}px ${scale(2)}px`,
                ...typography('desktop/bodyS'),
            },
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                color: colors.black,
                backgroundColor: colors.white,

                ':hover': {
                    backgroundColor: colors.blue,
                    color: colors.white,
                    cursor: 'pointer',
                },
            },
        };
        return {
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
    icon: state => {
        const sized: OptionizedCSS<typeof Size> = {
            md: {
                width: scale(2),
                height: scale(2),
                ...(state.open && {
                    transform: 'rotate(180deg)',
                }),
            },
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                backgroundColor: colors.white,
                color: colors.black,
                ...(state.disabled && {
                    color: colors.grey600,
                }),
            },
        };

        return {
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },

    label: state => {
        const sized: OptionizedCSS<typeof Size> = {
            md: {
                ...typography('desktop/bodyXSbold'),
            },
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                color: colors.black,
            },
        };

        return {
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },

    optionsGroup: state => {
        const sized: OptionizedCSS<typeof Size> = {
            md: {
                width: '100%',
                position: 'absolute',
                top: scale(8),
                boxShadow: shadows.big,
                zIndex: 2,
                borderRadius: scale(1, true),
                display: 'none',
                ...(state.open && {
                    display: 'block',
                }),
            },
        };

        return {
            ...extractCSSOption(sized, state.size),
        };
    },
    selectContainer: state => {
        const size: OptionizedCSS<typeof Size> = {
            md: {
                position: 'relative',
                width: '100%',
                [MEDIA_QUERIES.sm]: {
                    width: '100%',
                },
            },
        };
        
        return {
            ...extractCSSOption(size, state.size),
        };
    },
};

export const SELECT_THEMES = {
    basic: basicTheme,
};
