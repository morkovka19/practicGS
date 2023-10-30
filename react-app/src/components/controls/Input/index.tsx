import { EnumLike, useThemeCSS } from "@greensight/gds";
import { Ref, forwardRef, useMemo } from "react";
import { InputProps, InputStateFull, InputTheme } from "./types";
import { Size, Variant } from "./enums";
import { INPUT_THEMES } from "./themes/basic";

export const BaseInput = <V extends EnumLike, S extends EnumLike>({
    focus=false,
    textArea=false,
    theme,
    nameInput='',
    placeholder,
    inputId,
    variant,
    size
}: InputProps<V, S>, ref: Ref<HTMLInputElement>) => {
    const state  = useMemo<InputStateFull<V, S>>(
        () => ({
            focus,
            textArea,
            variant,
            size
        }),
        [focus, size, variant, textArea]
    );

    if (!theme) {
        throw new Error('[Input] theme is required');
    };

    const {input: inputCSS, label: labelCSS, inputBlock: blockCSS} = useThemeCSS(theme!, state);

    return (
        <div css={blockCSS as any}>
            <label css={labelCSS as any} htmlFor={inputId}>{nameInput}</label>
            {textArea ?
                <textarea css={inputCSS as any} placeholder={placeholder} id={inputId}/> :
                <input css={inputCSS as any} placeholder={placeholder} id={inputId}/>
        }

        </div>
    )

}

const InputRef = forwardRef(BaseInput) as typeof BaseInput;

export const createInputWithTheme = <V extends EnumLike, S extends EnumLike>(
    defaultTheme: InputTheme<V, S>, // тема по-умолчанию
    defaultVariant: V | keyof V, // вариант по-умолчанию
    defaultSize: S | keyof S, // размер по-умолчанию
) => {
    type InputReturn = ReturnType<typeof InputRef>;
    const ThemeInput = (({ theme = defaultTheme, variant = defaultVariant, size = defaultSize, ...props }, ref) => (
        <InputRef theme={theme} variant={variant} size={size} {...props} />
    )) as (props: InputProps<V, S>, ref: Ref<HTMLButtonElement>) => InputReturn;

    (ThemeInput as any).displayName = 'Input';

    return forwardRef(ThemeInput) as typeof ThemeInput;
};

export const Input = createInputWithTheme<typeof Variant, typeof Size>(
    INPUT_THEMES.basic,
    Variant.primary,
    Size.md
)
