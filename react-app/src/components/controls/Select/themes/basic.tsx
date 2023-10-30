import { OptionizedCSS, extractCSSOption, scale} from "@greensight/gds";
import { MEDIA_QUERIES, colors } from "src/scripts/gds";
import {SelectTheme} from "../types";
import { Size, Variant } from "../enums";
import tokens from '../../../../../public/tokens.json'

const basicTheme: SelectTheme<typeof Variant, typeof Size> = {
    select: state => {
        const sized: OptionizedCSS<typeof Size> = {
            md: {
                minWidth: "100%",
                padding: `${scale(1)}px ${scale(1, true)}px`,
                boxSizing: 'border-box',
                position: 'relative',
                fontSize: '14px',
                border: `1px solid ${colors.grey400}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }
        };
        const variant: OptionizedCSS<typeof Variant> = {
            "primary": {
                backgroundColor: colors.white,
                color: colors.black,
                borderRadius: '4px',
                ...(state.disabled && {
                    color: colors.grey600,
                })
            }
        };
        return {
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant)
        };
    },
    option: state => {
        const sized: OptionizedCSS<typeof Size> = {
            md: {
                padding: `${scale(1)}px ${scale(2)}px`,
                fontSize: '14px',
                fornWeight: '400',
            }
        }
        const variant: OptionizedCSS<typeof Variant> =  {
            primary: {
                color: colors.black,
                backgroundColor: colors.white,

                ":hover": {
                    backgroundColor: colors.blue,
                    color: colors.white,
                    cursor: "pointer"
                }
            }
        }
        return {
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant)
        };
    },
    icon: state => {
        const sized: OptionizedCSS<typeof Size> = {
            md: {
                width: `${scale(2)}px`,
                height: `${scale(2)}px`,
                ...(state.open && {
                    transform: 'rotate(180deg)'
                })
            }
        };
        const variant: OptionizedCSS<typeof Variant> = {
            "primary": {
                backgroundColor: colors.white,
                color: colors.black,
                ...(state.disabled && {
                    color: colors.grey600,
                })
            }
        };
        return {
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant)
        };
    },

    label: state => {
        const sized: OptionizedCSS<typeof Size> = {
            md: {
                fontSize: '12px',
                fontWeight: '500'
            }
        }
        const variant: OptionizedCSS<typeof Variant> = {
            "primary": {
                color: colors.black,
            }
        }

        return {
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant)
        }
    },

    optionsGroup: state =>{
        const sized: OptionizedCSS<typeof Size> = {
            md: {
                width: "100%",
                position: 'absolute',
                top: `${scale(8)}px`,
                boxShadow: tokens.shadows.big,
                zIndex: '1',
                borderRadius: '4px',
                display: 'none',

                ...(state.open && {
                    display:  'block'
                })
            }
        }

        return {
            ...extractCSSOption(sized, state.size),
        }
    },
    selectContainer: state =>{
        const size: OptionizedCSS<typeof Size> = {
            "md" : {
                position: 'relative',
                width: "40%",
                [MEDIA_QUERIES.sm]: {
                    width: '100%'
                }
            }
        }
        return {
            ...extractCSSOption(size, state.size)
        }
    }
}

export const SELECT_THEMES = {
    basic: basicTheme
}
