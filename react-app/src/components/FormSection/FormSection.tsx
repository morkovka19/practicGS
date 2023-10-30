import Form from "@components/Form";
import { Layout, Section, scale } from "@greensight/gds";
import FormTitle from "@components/FormTitle";
import { MEDIA_QUERIES } from "src/scripts/gds";

export default function FormSection() {
    return (
        <Section container={false} css={{marginTop: `${scale(8)}px`,
            width: '50%',
            maxWidth: `${scale(74)}px`,
            [MEDIA_QUERIES.sm]: {
                width: '90%'
            }}}>
            <div css={{ rowGap: `${scale(5)}px`, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
        [MEDIA_QUERIES.sm]: {
            rowGap: `${scale(3)}px`,
        } }}>
                    <FormTitle />
                    <Form />
            </div>
        </Section>
    )
}
