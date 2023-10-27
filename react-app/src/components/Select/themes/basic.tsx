import { BaseThemeState, EnumLike, OptionizedCSS, StyleDefinition, extractCSSOption } from "@greensight/gds";
import { SelectState, SelectStateFull } from "../types";
import { ReactNode } from "react";
import { Active, Open } from "../enums";

export interface SelectTheme<A extends EnumLike, O extends EnumLike> {
    select: StyleDefinition<SelectStateFull<A,O>>;
    label: StyleDefinition<SelectStateFull<A, O>>;
    icon:  StyleDefinition<SelectStateFull<A, O>>;
}


export interface SelectProps<A extends EnumLike, O extends EnumLike>
    extends Partial<BaseThemeState<A, O, SelectTheme<A, O>>>, // важный момент
        Partial<SelectState> { // важный момент
    children?: ReactNode,
    hasChildren?: boolean,
    block?: boolean,
    open: string,
    active: string
}

const basicTheme: SelectTheme<typeof Active, typeof Open> = {
    select: state => {
        const open: OptionizedCSS<typeof Open> = {
            "open": {},
            "close": {},
        };

        return {
            /// common styles...
            ...extractCSSOption(open, state.size)
        };
    },
    label: {},
    icon: {}
}

export const BUTTON_THEMES = {
    basic: basicTheme,
}
