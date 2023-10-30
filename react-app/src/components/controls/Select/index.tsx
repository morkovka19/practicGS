import { EnumLike, useThemeCSS } from "@greensight/gds";
import { Ref, useMemo, forwardRef} from "react";
import { Size, Variant } from "./enums";
import { SELECT_THEMES} from "./themes/basic";
import { SelectProps, SelectStateFull, SelectTheme } from "./types";

export const BaseSelect = <V extends EnumLike, S extends EnumLike>(
    {
        theme, // theme, variant, size будут
        size, // будет типизированы дальше, поэтому не имеют значения по-умолчанию
        variant,
        Icon,
        value = 'Not selected',
        disabled = true,
        label,
        optionsArr,
        open,
        handleClickSelected,
        handleClickOption,
    }: SelectProps<V, S>,
    ref: Ref<HTMLSelectElement>) => {

    const state = useMemo<SelectStateFull<V, S>>(
        () => ({
            disabled,
            size,
            variant,
            value,
            label,
            open
        }),
        [disabled, size, variant, label, value, open],
    );

    if (!theme) {
        throw new Error('[Select] theme is required');
    }

    const { select: totalCSS, icon: iconCSS, option: optionCSS, label: labelCSS, optionsGroup: optionsGroupCSS, selectContainer: selectContainerCSS } = useThemeCSS(theme!, state);

    const onClickOption = (e: any) =>{
        handleClickOption(e?.target?.textContent);
    }


    return (
        <div css={selectContainerCSS as any} onClick={handleClickSelected}>
            <span css={labelCSS as any}>{label}</span>
            <div css={totalCSS as any}>{value ? value : 'Not selected'}<Icon css={iconCSS as any} /></div>
            <ul css={optionsGroupCSS as any}>
                {[...optionsArr].map((item, i) => (
                    <li key={i} css={optionCSS as any} onClick={onClickOption}>{item}</li>
                ))}
            </ul>
        </div>
    )
}



const SelectRef = forwardRef(BaseSelect) as typeof BaseSelect;

export const createSelectWithTheme = <V extends EnumLike, S extends EnumLike>(
    defaultTheme: SelectTheme<V, S>, // тема по-умолчанию
    defaultVariant: V | keyof V, // вариант по-умолчанию
    defaultSize: S | keyof S, // размер по-умолчанию
) => {
    type SelectReturn = ReturnType<typeof SelectRef>;

    const ThemedSelect = (({ theme = defaultTheme, variant = defaultVariant, size = defaultSize, ...props }, ref) => (
        <SelectRef theme={theme} variant={variant} size={size} {...props} />
    )) as (props: SelectProps<V, S>, ref: Ref<HTMLButtonElement>) => SelectReturn;

    (ThemedSelect as any).displayName = 'Button';

    return forwardRef(ThemedSelect) as typeof ThemedSelect;
};

export const Select = createSelectWithTheme<typeof Variant, typeof Size>(
    SELECT_THEMES.basic,
    Variant.primary,
    Size.md
)
