import { Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { ReactNode } from 'react';

export default function MyForm({
    schema,
    values,
    handleSubmit,
    baseForm,
}: {
    schema: yup.ObjectShape;
    values: Object;
    handleSubmit: ((values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>) & ((values: any) => void);
    baseForm: ({ errors, touched }: { errors: any; touched: any }) => ReactNode;
}) {
    return (
        <Formik validationSchema={yup.object().shape(schema)} initialValues={values} onSubmit={handleSubmit}>
            {baseForm}
        </Formik>
    );
}
