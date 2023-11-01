import { Button } from '@components/controls/Button';
import { Input } from '@components/controls/Input';
import { scale } from '@greensight/gds';
import { Formik, Form } from 'formik';
import { regPhone } from 'src/utils/regs';
import FornLinkContainer from '@components/FormLinkContainer';
import * as yup from 'yup';
import { ReactNode } from 'react';

export default function MyForm({schema, values, handleSubmit, baseForm} : {schema: any, values: any, handleSubmit: (values: any) => void, baseForm: ({ errors, touched }: { errors: any; touched: any; }) => ReactNode }) {
    return (
        <Formik
            validationSchema={yup.object().shape(schema)}
            initialValues={values}
            onSubmit={handleSubmit}
        >
           {baseForm}
        </Formik>
    );
}
