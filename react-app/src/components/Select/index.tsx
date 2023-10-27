import { EnumLike, useThemeCSS } from "@greensight/gds"
import { SelectProps, SelectTheme } from "./themes/basic"
import { Ref, forwardRef, useMemo } from "react"
import { SelectStateFull } from "./types";

// export const Seleect = <A extends EnumLike, O extends EnumLike>({
//     block=false,
//     theme,
//     open,
//     active,
//     label="",
//     icon,
//     css,
//     ...props
// }: SelectProps<A, O>, ref: Ref<HTMLSelectElement>) => {
//     return (

//     )
// }


export const SelectBasa= <A extends EnumLike, O extends EnumLike>(
    {
        hasChildren,
        block = false,
        theme,
        children,
        open,
        active,
        ...props
    }: SelectProps<A, O>,
    ref: Ref<HTMLButtonElement>,
) => {

    const state = useMemo<SelectStateFull<A, O>>(
        () => ({ hasChildren, block, open, active }),
        [block, hasChildren, open, active],
    );

    if (!theme){
        throw new Error('[Select] theme is required');
    }

    const { select: totalCSS, icon: iconCSS, label: labelCSS} = useThemeCSS(theme!, state);
    return (
        <select></select>
    )
}


const SelectRef = forwardRef(SelectBasa) as typeof SelectBasa;

export const createSelectWithTheme = <A extends EnumLike, O extends EnumLike>(
    defaultTheme: SelectTheme<A, O>, // тема по-умолчанию
    defaultOpen: A | keyof O, // вариант по-умолчанию
    defaultActive: A | keyof O, // размер по-умолчанию
) => {
    type SelectReturn = ReturnType<typeof SelectRef>;

    const ThemedSelect = (({ theme = defaultTheme, open = defaultOpen, active = defaultActive, ...props }, ref) => (
        <SelectRef {...props} />
    )) as (props: SelectProps<A, O>, ref: Ref<HTMLSelectElement>) => SelectReturn;

    (ThemedSelect as any).displayName = 'Select';

    return forwardRef(ThemedSelect) as typeof ThemedSelect;
};
