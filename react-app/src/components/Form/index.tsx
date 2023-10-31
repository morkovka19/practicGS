import { Button } from "@components/controls/Button";
import { Input } from "@components/controls/Input";
import { scale } from "@greensight/gds";
import { Formik, Form} from "formik";
import { regEmail, regPhone } from "src/utils/regs";
import FornLinkContainer from "@components/FormLinkContainer";

export default function MyForm() {
    const validateName = (value: string) =>{
        if (!value){
            return 'Required';
        }
        else if (value.length < 2 || value.length > 20) return "Invalid name";
    }

    const validateEmail = (value: string) =>{
        if (!value) return "Required";
       else if (!regEmail.test(value)) return "Invalid email";
    }

    const validatePhone = (value: string) =>{
        if (!value) return "Required";
        else if (!regPhone.test(value)) return "Invalid phone";
    }

    const validateComment = (value: string) =>{
        if (!value) return "Required";
        else if (value.length < 20) return "Invalid comment"
    }

    return (
        <Formik initialValues={{
            name: '',
            email: '',
            phone: '',
            comment: ''
        }}
        onSubmit = {values => {
            alert(`submit:\n${values.name }\n${values.email}\n${values.phone}\n${values.comment}`)
        }}>
            {({errors, touched}) => (
                 <Form css={{width: "90%", margin: '0 auto'}}>
                 <div css={{ rowGap: `${scale(4)}px`,
                     width: '100%',
                      display: 'flex',
                      flexDirection: "column" }}>
                         <div css={{ rowGap: `${scale(2)}px`, display: 'flex', flexDirection: 'column' }}>
                             <Input variant="primary" size="md" nameInput="Your name" placeholder="Please introduce yourself" inputId="name" error={errors.name} touched={touched.name} validate={validateName}/>
                             <Input  variant="primary" size="md" nameInput="Email" placeholder="ivanov@gmail.com" inputId="email" error={errors.email} touched={touched.email} validate={validateEmail}/>
                             <Input nameInput="Phone number" variant="primary" size="md" placeholder="+7 (999) 000 00 00" inputId="phone" error={errors.phone} touched={touched.phone} validate={validatePhone}/>
                             <Input nameInput="Comment" placeholder="Message text" variant="primary" size="md" inputId="comment" textArea error={errors.comment} touched={touched.comment} validate={validateComment}/>
                         </div>
                         <div css={{ rowGap: `${scale(2)}px`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                             <Button block variant="primary" size="md" type="submit">Send</Button>
                             <FornLinkContainer />
                         </div>
                 </div>
             </Form>
            )}
       
        </Formik>
    )
}
