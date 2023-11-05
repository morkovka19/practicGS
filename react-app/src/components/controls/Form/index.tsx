import { Form as FormFormik , Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { ReactElement, cloneElement } from 'react';
import FormField  from './Field';
import Button from '../Button';

const Form = ({
    schema,
    values,
    handleSubmit,
    children,
}: {
    schema?: yup.AnyObject;
    values: Object;
    handleSubmit: ((values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>) & ((values: any) => void);
    children: ReactElement;
}) => {
    return (
        <Formik validationSchema={schema} initialValues={values} onSubmit={handleSubmit}>
            {({ errors, touched }) => <FormFormik>{children && cloneElement(children, { errors, touched })}</FormFormik>}
        </Formik>
    );
};

Form.Field = FormField;

export default Form;