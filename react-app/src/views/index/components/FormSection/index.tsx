import { Container, Section, scale } from '@greensight/gds';
import { MEDIA_QUERIES, colors, typography } from 'src/scripts/gds';
import { regPhone } from 'src/utils/regs';
import * as yup from 'yup';
import Form from '@components/controls/Form';

export default function FormSection() {
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

    return (
        <Section
            container={false}
            css={{
                paddingTop: scale(8),
                paddingBottom: scale(11),
                width: '100%',
                backgroundColor: colors.grey100,
                [MEDIA_QUERIES.sm]: {
                    paddingBottom: scale(4),
                    paddingTop: scale(4)
                }
            }}
        >
            <div
                css={{
                    rowGap: scale(5),
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    [MEDIA_QUERIES.sm]: {
                        rowGap: scale(3),
                    },
                }}
            >
                <Container
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: scale(4),
                        maxWidth: scale(74),
                        padding: 0,
                        width: '100%',
                    }}
                >
                    <div
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: scale(2),
                            alignItems: 'center',
                            justifyContent: 'start',
                            width: '100%',
                        }}
                    >
                        <h3
                            css={{
                                ...typography('desktop/h2'),
                                [MEDIA_QUERIES.sm]: typography('mobile/h2'),
                            }}
                        >
                            Leave a request
                        </h3>
                        <p
                            css={{
                                textAlign: 'center',
                                ...typography('desktop/bodyL'),
                                [MEDIA_QUERIES.sm]: typography('desktop/bodyM'),
                            }}
                        >
                            We will advise you and help you start a new project
                        </p>
                    </div>
                    <Form
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
                    >
                        <div
                            css={{
                                rowGap: scale(4),
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                maxWidth: scale(75),
                                margin: '0 auto',
                            }}
                        >
                            <div css={{ rowGap: scale(2), display: 'flex', flexDirection: 'column' }}>
                                <Form.Field
                                    variant="primary"
                                    size="md"
                                    label="Your name"
                                    placeholder="Please introduce yourself"
                                    name="name"
                                />
                                <Form.Field
                                    variant="primary"
                                    size="md"
                                    label="Email"
                                    placeholder="ivanov@gmail.com"
                                    name="email"
                                />
                                <Form.Field
                                    label="Phone number"
                                    variant="primary"
                                    size="md"
                                    placeholder="+7 (999) 000 00 00"
                                    name="phone"
                                />
                                <Form.Field
                                    label="Comment"
                                    placeholder="Message text"
                                    variant="primary"
                                    size="md"
                                    name="comment"
                                    textArea
                                />
                            </div>
                            <div
                                css={{
                                    rowGap: scale(2),
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Form.Button block variant="primary" size="md" type="submit">
                                    Send
                                </Form.Button>
                                <Container css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span css={{ textAlign: 'center' }}>
                                        By clicking "Send" you confirm your consent to the
                                    </span>
                                    <span>
                                        <a href="#" css={{ color: colors.blue, textAlign: 'center' }}>
                                            processing of personal data
                                        </a>
                                    </span>
                                </Container>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>
        </Section>
    );
}
