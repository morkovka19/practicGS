import { regPhone } from 'src/utils/regs';
import * as yup from 'yup';
import FormikTemplate from '@components/FormikTemplate';
import { FormFields } from '@components/FormComponents/FormFields';

const schema = {
    name: yup
        .string()
        .required('Required')
        .min(2, 'Invalid name (min length 2)')
        .max(50, 'Invalid name (max length 50)'),
    email: yup.string().required('Required').email('Invalid email'),
    phone: yup.string().required('Required').matches(regPhone, 'Invavid phone'),
    comment: yup.string().required('Required').min(20, 'Min length 20'),
};
export default function MyForm() {
    return (
        <FormikTemplate
            schema={yup.object().shape(schema)}
            values={{
                name: '',
                email: '',
                phone: '',
                comment: '',
            }}
            handleSubmit={values => {
                alert(`submit:\n${values.name}\n${values.email}\n${values.phone}\n${values.comment}`);
            }}
            children={<FormFields errors={undefined} touched={undefined} />}
        />
    )
        }
        
