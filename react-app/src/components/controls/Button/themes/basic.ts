import { OptionizedCSS, extractCSSOption, scale, typography} from "@greensight/gds";
import { colors } from "src/scripts/gds";
import { Variant, Size } from "../enums";
import { ButtonTheme } from "../types"


const basicTheme: ButtonTheme<typeof Variant, typeof Size> = {
    button: state => {
        const size: OptionizedCSS<typeof Size> = {
            sm: {
                padding: `${scale(1, true) + 0.5}px ${scale(1)}px`,
                ...(typography('buttonSm') as any),
            },
            md: {
                padding:  `${scale(2, true) + 0.5}px ${scale(2)}px`,
                ...(typography('buttonMd') as any)
            },
        };

        const variant: OptionizedCSS<typeof Variant> = {
            "primary": {
                backgroundColor: colors.blue,
                color: colors.white,
                size: 44,
                ':hover': {
                    backgroundColor: colors.blueHover,
                },
                ...(state.disabled && {
                    backgroundColor: colors.grey200,
                    color: colors.grey800,
                }),
                ...(state.rounded && {
                    borderRadius: scale(1, true),
                }),
                ...(state.block) && {
                    width: '77%',
                },
            },
            "secondary": {
                backgroundColor: colors.grey900,
                color: colors.white,
                borderRadius: scale(1, true),
                marginLeft: "auto",
                padding: `${scale(1)}px ${scale(4)}px`,
                fontSize: '15px',
                fontWeight: '700',
                ':hover': {
                    backgroundColor: colors.black
                }
            },
            "notactive": {
                backgroundColor: colors.grey200,
                color: colors.grey800,
                size: 44,
                ':hover': {
                    backgroundColor: colors.blueHover,
                },
            },

            "link": {
                backgroundColor: "none",
                color: colors.blue,
                fontSize: '14px',
                width: '20%',
                textAlign: 'center',
                margin: 'auto',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                gap: '4px',
                ...(state.hidden && {
                    display: "none"
                }),
                ...(state.block && {
                    position: 'absolute',
                    left: '0',
                    top: `${scale(8)}px`,
                    width: '100%',
                    justifyContent: 'start',
                    columnGap:  `${scale(1)}`
                })
            }
        };

        return {
            ...extractCSSOption(size, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
    icon: state => {
        const sized: OptionizedCSS<typeof Size> = {
            sm: {
                width: `${scale(2)}px`,
                height: `${scale(2)}px`,
                ...(typography('buttonSm') as any),
            },
            md: {
                padding:  `${scale(1, true) + 0.5}px ${scale(1)}px`,
                ...(typography('buttonMd') as any)
            },
        };

        const variant: OptionizedCSS<typeof Variant>={
            link: {
                ...(state.rounded && {
                    transform: 'rotate(180deg)'
                })
            },
            primary: {
                display: 'none'
            },
            "secondary": {
                display: 'none'
            },
            "notactive": {
                display: 'none'
            }
        }
        return{
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant),
        }
        
    },
};

export const BUTTON_THEMES = {
    basic: basicTheme
}