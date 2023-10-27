import { BaseThemeState, EnumLike } from "@greensight/gds";
import { Active, Open } from "./enums";

export interface SelectState{
    hasChildren?: boolean,
    block: boolean
}



export type SelectStateFull<A extends EnumLike, O extends EnumLike> = BaseThemeState<A, O> & SelectState
