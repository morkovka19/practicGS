import { BUTTON_THEMES } from "../Button/themes/basic";
import {  createFutureButtonWithTheme } from "@greensight/gds";
import { Variant, Size } from "./enums";
import { TypographyParam } from "src/scripts/gds";
import { CSSObject } from "@emotion/core";

function custonTypography(name: "buttonLg" | "buttonMd" | "buttonSm" | "captionUppercase" | "caption" | "smallBold" | "small" | "bodyBold" | "body" | "subheading" | "title" | "headline" | "h4" | "h3" | "h2" | "h1"): CSSObject {
    throw new Error("Function not implemented.");
}

export const Button = createFutureButtonWithTheme<typeof Variant, typeof Size, TypographyParam>(
    BUTTON_THEMES.basic,
    Variant.primary,
    Size.sm,
    custonTypography
);