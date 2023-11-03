import { Children, cloneElement, isValidElement } from 'react';
import { Input } from '@components/controls/Input';
import { FormFieldProps } from './types';

export const FormField = ({ name, children, ...props }: FormFieldProps) => {
    const inputProps = {
        type: 'text',
        name,
        ...props,
    };

    return (
        <div css={{ width: '100%' }}>
            {children ? (
                <div css={{width: '100%'}}>
                    {Children.map(children, child => {
                        if (isValidElement(child)) {
                            const formikProps = {
                                id: name,
                                ...inputProps,
                                ...child.props,
                            };
                            return cloneElement(child, { ...formikProps });
                        }
                    })}
                </div>
            ) : (
                cloneElement(<Input {...inputProps} />)
            )}
        </div>
    );
};
