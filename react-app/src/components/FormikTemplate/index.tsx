import { Form, Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { ReactElement, cloneElement } from 'react';
import { CSSObject } from '@emotion/core';

export default function FormikTemplate({
    schema,
    values,
    handleSubmit,
    children,
}: {
    schema?: yup.AnyObject;
    values: Object;
    handleSubmit: ((values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>) & ((values: any) => void);
    children: ReactElement;
}) {
    return (
        <Formik validationSchema={schema} initialValues={values} onSubmit={handleSubmit}>
            {({ errors, touched }) => <Form>{children && cloneElement(children, { errors, touched })}</Form>}
        </Formik>
    );
}
