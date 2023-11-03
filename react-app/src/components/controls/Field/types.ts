import { CSSObject } from '@emotion/core';
import { HTMLProps } from 'react';

export interface FormFieldProps extends Omit<HTMLProps<HTMLInputElement>, 'label' | 'size'> {
    name: string;
    css?: CSSObject;
    variant?: 'primary' | undefined;
    size?: 'sm' | 'md' | undefined;
    placeholder?: string;
    label?: string;
    error?: string;
    touched?: string;
    textArea?: boolean;
    Icon?: SVGAElement;
    optionsArr?: Set<string>;
    handleClickSelected?: () => void;
    handleClickOption?: (value: string) => void;
}
