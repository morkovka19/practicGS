import FormLinkContainer from '@components/FormComponents/FormLinkContainer';
import { scale } from '@greensight/gds';
import { Button } from '@components/controls/Button';
import { FormField } from '@components/controls/Field';

export const FormFields = ({ errors, touched }: { errors: any; touched: any }) => {
    return (
        <div css={{ rowGap: scale(4), 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column' 
        }}>
            <div css={{ rowGap: scale(2), 
                display: 'flex', 
                flexDirection: 'column' 
                }}>
                <FormField 
                     variant="primary"
                     size="md"
                     label="Your name"
                     placeholder="Please introduce yourself"
                     name="name"
                     error={errors?.name}
                     touched={touched?.name}
                />
                <FormField
                    variant="primary"
                    size="md"
                    label="Email"
                    placeholder="ivanov@gmail.com"
                    name="email"
                    error={errors.email}
                    touched={touched.email}
                />
                <FormField
                    label="Phone number"
                    variant="primary"
                    size="md"
                    placeholder="+7 (999) 000 00 00"
                    name="phone"
                    error={errors.phone}
                    touched={touched.phone}
                />
                <FormField
                    label="Comment"
                    placeholder="Message text"
                    variant="primary"
                    size="md"
                    name="comment"
                    textArea
                    error={errors.comment}
                    touched={touched.comment}
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
                <Button block variant="primary" size="md" type="submit">
                    Send
                </Button>
                <FormLinkContainer />
            </div>
        </div>
    );
};
