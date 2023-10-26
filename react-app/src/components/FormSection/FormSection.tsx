import Form from "@components/Form";
import { Section } from "@greensight/gds";
import tokens from '../../../public/tokens.json'

export default function FormSection(){
    return (
        <Section css={{width: '100%', backgroundColor: `${tokens.colors.grey100}`, margin: '0'}} container={false}>
            <Form />
        </Section>
    )
}