import { EnumLike, useThemeCSS } from '@greensight/gds';
import { Ref, forwardRef, useMemo } from 'react';
import { InputProps, InputStateFull, InputTheme } from './types';
import { Size, Variant } from './enums';
import { INPUT_THEMES } from './themes/basic';
import { Field } from 'formik';

export const BaseInput = <V extends EnumLike, S extends EnumLike>(
    {
        focus = false,
        textArea = false,
        theme,
        nameInput = "",
        placeholder,
        inputId,
        variant,
        size,
        error = "",
        touched = false,
    }: InputProps<V, S>,
    ref: Ref<HTMLInputElement>
) => {
    const state = useMemo<InputStateFull<V, S>>(
        () => ({
            focus,
            textArea,
            variant,
            size,
            error,
            touched,
        }),
        [focus, size, variant, textArea, error, touched]
    );

    if (!theme) {
        throw new Error('[Input] theme is required');
    }

    const { input: inputCSS, label: labelCSS, inputBlock: blockCSS, error: errorCSS } = useThemeCSS(theme!, state);

    return (
        <div css={blockCSS as any}>
            <label css={labelCSS as any} htmlFor={inputId}>
                {nameInput}
            </label>
            <Field
                css={inputCSS as any}
                placeholder={placeholder}
                id={inputId}
                name={inputId}
                as={textArea ? 'textarea' : 'input'}
            />
            <span css={errorCSS as any}>{error}</span>
        </div>
    );
};

const InputRef = forwardRef(BaseInput) as typeof BaseInput;

export const createInputWithTheme = <V extends EnumLike, S extends EnumLike>(
    defaultTheme: InputTheme<V, S>,
    defaultVariant: V | keyof V,
    defaultSize: S | keyof S
) => {
    type InputReturn = ReturnType<typeof InputRef>;
    const ThemeInput = (({ theme = defaultTheme, variant = defaultVariant, size = defaultSize, ...props }, ref) => (
        <InputRef theme={theme} variant={variant} size={size} {...props} />
    )) as (props: InputProps<V, S>, ref: Ref<HTMLButtonElement>) => InputReturn;

    (ThemeInput as any).displayName = 'Input';

    return forwardRef(ThemeInput) as typeof ThemeInput;
};

export const Input = createInputWithTheme<typeof Variant, typeof Size>(INPUT_THEMES.basic, Variant.primary, Size.md);
