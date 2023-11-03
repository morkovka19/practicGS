import { EnumLike, useThemeCSS } from '@greensight/gds';
import { Ref, useMemo, forwardRef } from 'react';
import { Size, Variant } from './enums';
import { SELECT_THEMES } from './themes/basic';
import { SelectProps, SelectStateFull, SelectTheme } from './types';
import { CSSObject } from '@emotion/core';

export const BaseSelect = <V extends EnumLike, S extends EnumLike>(
    {
        theme,
        size,
        variant,
        Icon,
        disabled = true,
        label,
        optionsArr = new Set(),
        open = false,
        handleClickSelected,
        meta,
        helpers,
        field,
    }: SelectProps<V, S>,
    ref: Ref<HTMLSelectElement>
) => {
    const state = useMemo<SelectStateFull<V, S>>(
        () => ({
            disabled,
            size,
            variant,
            label,
            open,
        }),
        [disabled, size, variant, label, open]
    );
    if (!theme) {
        throw new Error('[Select] theme is required');
    }
    const {
        select: totalCSS,
        icon: iconCSS,
        option: optionCSS,
        label: labelCSS,
        optionsGroup: optionsGroupCSS,
        selectContainer: selectContainerCSS,
        disabledSelect: disabledSelectCSS,
    } = useThemeCSS(theme!, state);

    return (
        <div css={selectContainerCSS as CSSObject} onClick={handleClickSelected}>
            <span css={labelCSS as CSSObject}>{label}</span>
            <div css={meta.value ? totalCSS as CSSObject : disabledSelectCSS as CSSObject}>
                {meta.value || 'Not selected'}
                {Icon && <Icon css={iconCSS as CSSObject} />}
            </div>
            <ul css={optionsGroupCSS as CSSObject}>
                {[...optionsArr].map((item, i) => (
                    <li key={i} css={optionCSS as CSSObject} onClick={() => helpers.setValue(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const SelectRef = forwardRef(BaseSelect) as typeof BaseSelect;

export const createSelectWithTheme = <V extends EnumLike, S extends EnumLike>(
    defaultTheme: SelectTheme<V, S>,
    defaultVariant: V | keyof V,
    defaultSize: S | keyof S
) => {
    type SelectReturn = ReturnType<typeof SelectRef>;
    const ThemedSelect = (({ theme = defaultTheme, variant = defaultVariant, size = defaultSize, ...props }, ref) => (
        <SelectRef theme={theme} variant={variant} size={size} {...props} />
    )) as (props: SelectProps<V, S>, ref: Ref<HTMLButtonElement>) => SelectReturn;
    (ThemedSelect as any).displayName = 'Button';

    return forwardRef(ThemedSelect) as typeof ThemedSelect;
};

export const Select = createSelectWithTheme<typeof Variant, typeof Size>(SELECT_THEMES.basic, Variant.primary, Size.md);
