import { BaseThemeState, EnumLike, StyleDefinition } from '@greensight/gds';

export interface State {
    // скрыт ли текст кнопки
    hidden: boolean;
    // выключена ли кнопка
    disabled: boolean;
    // растягивать ли кнопку
    block: boolean;
    // иконка справа?
    iconAfter: boolean;
    // включено скругление иконки?
    rounded: boolean;
}

export type ButtonStateFull<V extends EnumLike, S extends EnumLike> = BaseThemeState<V, S> & State;

export interface ButtonTheme<V extends EnumLike, S extends EnumLike> {
    button: StyleDefinition<ButtonStateFull<V, S>>;
    icon: StyleDefinition<ButtonStateFull<V, S>>;
}
