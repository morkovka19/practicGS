import { OptionizedCSS, extractCSSOption, scale } from "@greensight/gds";
import { Size, Variant } from "../enums";
import { InputTheme } from "../types";
import { colors } from "src/scripts/gds";

const basicTheme: InputTheme<typeof Variant, typeof Size> = {
    input: state => {
        const size: OptionizedCSS<typeof Size> = {
            md: {
                width: '100%',
                padding: `${scale(1, true)}px ${scale(3, true)}px`,
                fontSize: '14px',
                fontWeight: '400',

                ...(state.textArea && {
                    padding: `${scale(3, true)}px`,
                    height: `${scale(8)}px`,
                    resize: "none"
                })
            },
            sm: {

            }
        }
        const variant: OptionizedCSS<typeof Variant> = {
            "primary": {
                borderRadius: '4px',
                border: `1px solid ${colors.grey400}`,
                color: colors.black,
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '140%',
                "::placeholder" : {
                    color: colors.grey600,
                },
            }
        }
        return {
            ...extractCSSOption(size, state.size),
            ...extractCSSOption(variant, state.variant)
        }
    },
    label: state => {
        const size: OptionizedCSS<typeof Size> = {
            md: {
                fontSize: '12px',
                fortWeight: '500',
            },
            sm: {

            }
        }
        const variant: OptionizedCSS<typeof Variant> = {
            "primary" : {
            color: colors.black,
            }
        }
        return {
            ...extractCSSOption(size, state.size),
            ...extractCSSOption(variant, state.variant)
        }
    },
    inputBlock: state => {
        const size: OptionizedCSS<typeof Size> = {
            md: {

            },
            sm: {

            }

        }
        const variant: OptionizedCSS<typeof Variant> = {
            "primary": {
                display: "flex",
                flexDirection: 'column',
                width: '100%',
                boxSizing: 'border-box',
                margin: '0 auto'
            }
        }
        return {
            ...extractCSSOption(size, state.size),
            ...extractCSSOption(variant, state.variant),

        }
    }
}


export const INPUT_THEMES = {
    basic: basicTheme
}
