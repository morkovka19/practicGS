import { CSSObject } from '@emotion/core';
import { BaseThemeState, EnumLike, StyleDefinition } from '@greensight/gds';
import { SVGRIcon } from '@greensight/gds/types/src/types/Utils';
import { FC, ReactNode } from 'react';

export interface State {
    disabled: boolean;
    open: boolean;
}

export type SelectStateFull<V extends EnumLike, S extends EnumLike> = BaseThemeState<V, S> & State;

export interface SelectTheme<V extends EnumLike, S extends EnumLike> {
    select: StyleDefinition<SelectStateFull<V, S>>;
    option: StyleDefinition<SelectStateFull<V, S>>;
    icon: StyleDefinition<SelectStateFull<V, S>>;
    label: StyleDefinition<SelectStateFull<V, S>>;
    optionsGroup: StyleDefinition<SelectStateFull<V, S>>;
    selectContainer: StyleDefinition<SelectStateFull<V, S>>;
}

export interface SelectProps<V extends EnumLike, S extends EnumLike>
    extends Partial<BaseThemeState<V, S, SelectTheme<V, S>>>,
        Partial<State> {
    children?: ReactNode;
    Icon: SVGRIcon | FC<any>;
    iconRight?: boolean;
    value?: string;
    css?: CSSObject;
    label: string;
    optionsArr: Set<string>;
    open: boolean;
    handleClickSelected: () => void;
    handleClickOption: (e: any) => void;
}
