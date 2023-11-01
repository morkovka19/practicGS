import { Button } from '@components/controls/Button';
import { Input } from '@components/controls/Input';
import { scale } from '@greensight/gds';
import { Formik, Form } from 'formik';
import { regPhone } from 'src/utils/regs';
import FornLinkContainer from '@components/FormLinkContainer';
import * as yup from 'yup';

export default function MyForm() {
    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .required('Required')
            .min(2, 'Invalid name (min length 2)')
            .max(50, 'Invalid name (max length 50)'),
        email: yup.string().required('Required').email('Invalid email'),
        phone: yup.string().required('Required').matches(regPhone, 'Invavid phone'),
        comment: yup.string().required('Required').min(20, 'Min length 20'),
    });

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                name: '',
                email: '',
                phone: '',
                comment: '',
            }}
            onSubmit={values => {
                alert(`submit:\n${values.name}\n${values.email}\n${values.phone}\n${values.comment}`);
            }}
        >
            {({ errors, touched }) => (
                <Form css={{ width: '90%', margin: '0 auto' }}>
                    <div css={{ rowGap: scale(4), width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div css={{ rowGap: scale(2), display: 'flex', flexDirection: 'column' }}>
                            <Input
                                variant="primary"
                                size="md"
                                nameInput="Your name"
                                placeholder="Please introduce yourself"
                                inputId="name"
                                error={errors.name}
                                touched={touched.name}
                            />
                            <Input
                                variant="primary"
                                size="md"
                                nameInput="Email"
                                placeholder="ivanov@gmail.com"
                                inputId="email"
                                error={errors.email}
                                touched={touched.email}
                            />
                            <Input
                                nameInput="Phone number"
                                variant="primary"
                                size="md"
                                placeholder="+7 (999) 000 00 00"
                                inputId="phone"
                                error={errors.phone}
                                touched={touched.phone}
                            />
                            <Input
                                nameInput="Comment"
                                placeholder="Message text"
                                variant="primary"
                                size="md"
                                inputId="comment"
                                textArea
                                error={errors.comment}
                                touched={touched.comment}
                            />
                        </div>
                        <div
                            css={{
                                rowGap: `${scale(2)}px`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Button block variant="primary" size="md" type="submit">
                                Send
                            </Button>
                            <FornLinkContainer />
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
