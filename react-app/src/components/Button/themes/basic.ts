import { EnumLike, OptionizedCSS, StyleDefinition, extractCSSOption, scale, typography} from "@greensight/gds";
import { ButtonStateFull} from "../types";
import { colors } from "src/scripts/gds";
import { Variant, Size } from "../enums";

interface ButtonTheme<V extends EnumLike, S extends EnumLike> {
    button: StyleDefinition<ButtonStateFull<V, S>>;
    icon: StyleDefinition<ButtonStateFull<V, S>>;
}

export function createButtonWithTheme<T, U>(basic: ButtonTheme<typeof Variant, typeof Size>, primary: Variant, sm: Size) {
    throw new Error("Function not implemented.");
};

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
                borderRadius: scale(1, true),
                size: 44,
                ':hover': {
                    backgroundColor: colors.blueHover,
                },
                ...(state.disabled && {
                    backgroundColor: colors.grey200,
                    color: colors.grey800,
                }),
            },
            "secondary": {
                backgroundColor: colors.grey900,
                color: colors.white,
                borderRadius: scale(1, true),
                ':hover': {
                    backgroundColor: colors.black
                }
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
                width:"16px",
                height: "16px",
                ...(typography('buttonSm') as any),
            },
            md: {
                padding:  `${scale(1, true) + 0.5}px ${scale(1)}px`,
                ...(typography('buttonMd') as any)
            },
        };
        return{
            ...extractCSSOption(sized, state.size),
        }
        
    },
};

export const BUTTON_THEMES = {
    basic: basicTheme
}