import MyForm from "@components/Form";
import { Container, Section, scale } from "@greensight/gds";
import FormTitle from "@components/FormTitle";
import { MEDIA_QUERIES } from "src/scripts/gds";

export default function FormSection() {
    return (
        <Section container={false} css={{marginTop: `${scale(8)}px`,
            width: '100%',
            maxWidth: `${scale(74)}px`,
            [MEDIA_QUERIES.sm]: {
                width: '90%'
            }}}>
            <div css={{ rowGap: `${scale(5)}px`, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
        [MEDIA_QUERIES.sm]: {
            rowGap: `${scale(3)}px`,
        } }}>
            <Container css={{display: 'flex', flexDirection: 'column', gap: `${scale(4)}px`, padding: 0, width: '100%'}}>
                    <FormTitle />
                    <MyForm />
            </Container>
            </div>
        </Section>
    )
}
