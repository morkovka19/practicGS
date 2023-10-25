import { BaseThemeState, Button, EnumLike, OptionizedCSS, StyleDefinition, extractCSSOption, scale, typography, useThemeCSS } from "@greensight/gds";
import { ButtonStateFull, State } from "../types";
import { SVGRIcon } from "@greensight/gds/types/src/types/Utils";
import { ReactNode, FC, Ref, useMemo, forwardRef } from "react";
import { colors } from "src/scripts/gds";
import { Variant, Size } from "../enums";

interface ButtonTheme<V extends EnumLike, S extends EnumLike> {
    button: StyleDefinition<ButtonStateFull<V, S>>;
    icon: StyleDefinition<ButtonStateFull<V, S>>;
}

interface ButtonProps<V extends EnumLike, S extends EnumLike>
    extends Partial<BaseThemeState<V, S, ButtonTheme<V, S>>>, 
        Partial<State> {
    children?: ReactNode;
    Icon?: SVGRIcon | FC<any>;
    external?: boolean;
    block: false, // theme, variant, size будут // будет типизированы дальше, поэтому не имеют значения по-умолчанию
    iconAfter: boolean, // важно дать значения по-умолчанию для параметров состояния,
    hidden?: boolean, // чтобы избежать null check внутри темы
    type: string,
    css: {}
}

const BaseButton = <V extends EnumLike, S extends EnumLike>(
    {
        children,
        block = false,
        theme, // theme, variant, size будут
        size, // будет типизированы дальше, поэтому не имеют значения по-умолчанию
        variant,
        Icon,
        iconAfter = false, // важно дать значения по-умолчанию для параметров состояния,
        hidden = false, // чтобы избежать null check внутри темы
        type = 'button',
        external = false,
        disabled = false,
        rounded = true,
        css
    }: ButtonProps<V, S>,
    ref: Ref<HTMLButtonElement>,
) =>{
    const state = useMemo<ButtonStateFull<V, S>>(
        () => ({
            disabled,
            hidden,
            size,
            variant,
            block,
            iconAfter,
            rounded,
        }),
        [block, disabled, hidden, iconAfter, size, variant, rounded],
    );

    if (!theme) {
        throw new Error('[Button] theme is required');
    }

    const { button: totalCSS, icon: iconCSS } = useThemeCSS(theme!, state);
    
}


export function createButtonWithTheme<T, U>(basic: ButtonTheme<typeof Variant, typeof Size>, primary: Variant, sm: Size) {
    throw new Error("Function not implemented.");
}

// export const createButtonWithTheme = <V extends EnumLike, S extends EnumLike>(
//     defaultTheme: ButtonTheme<V, S>, // тема по-умолчанию
//     defaultVariant: V | keyof V, // вариант по-умолчанию
//     defaultSize: S | keyof S, // размер по-умолчанию
// ) => {
//     const ButtonRef = forwardRef(BaseButton) as typeof BaseButton;
//     type ButtonReturn = ReturnType<typeof ButtonRef>;

//     const ThemedButton = (({ theme = defaultTheme, variant = defaultVariant, size = defaultSize, ...props }, ref) => (
//         <ButtonRef ref={ref} theme={theme} variant={variant} size={size} {...props} />
//     )) as (props: ButtonProps<V, S>, ref: Ref<HTMLButtonElement>) => ButtonReturn;

//     (ThemedButton as any).displayName = 'Button';

//     return forwardRef(ThemedButton) as typeof ThemedButton;
// };

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
                ':hover': {
                    backgroundColor: colors.black
                }
            },
        };

        return {
            /// common styles...
            ...extractCSSOption(size, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
    icon: state => {
        const sized: OptionizedCSS<typeof Size> = {
            sm: {
                width:"16px",
                height: "16px",
                // ...(typography('buttonSm') as any),
            },
            md: {
                padding:  `${scale(1, true) + 0.5}px ${scale(1)}px`,
                // ...(typography('buttonMd') as any)
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