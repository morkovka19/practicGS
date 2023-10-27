import Form from "@components/Form";
import { Container, Layout, Section } from "@greensight/gds";
import tokens from '../../../public/tokens.json'
import FormTitle from "@components/FormTitle";
import FormContainer from "@components/FormContainer";
import { MAJOR_STEP } from "src/utils/constants";
import { Button } from "@components/Button";

export default function FormSection() {
    return (
        <Section container={false}>
            <Container css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: `${MAJOR_STEP * 7}px`, paddingTop: `${MAJOR_STEP * 5}px` }}>
                    <FormTitle />
                    <Form />
            </Container>
        </Section>
    )
}
