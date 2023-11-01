import { BaseThemeState, EnumLike, StyleDefinition } from "@greensight/gds";
import { ReactNode } from "react";

export interface State{
    focus: boolean,
    textArea: boolean,
    error: string,
    touched:  boolean
}

export type InputStateFull<V extends EnumLike, S extends EnumLike> = BaseThemeState<V, S> & State

export interface InputTheme <V extends EnumLike, S extends EnumLike>{
    label: StyleDefinition<InputStateFull<V, S>>;
    input: StyleDefinition<InputStateFull<V, S>>;
    inputBlock: StyleDefinition<InputStateFull<V, S>>;
    error: StyleDefinition<InputStateFull<V, S>>;
}

export interface InputProps<V extends EnumLike, S extends EnumLike> extends  Partial<BaseThemeState<V, S, InputTheme<V, S>>>,
Partial<State>{
    nameInput?: string,
    children?: ReactNode,
    placeholder: string,
    inputId: string,
    touched?: boolean,
    error?: string,
}
