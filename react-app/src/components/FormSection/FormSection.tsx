import Form from "@components/Form";
import { Layout, Section, scale } from "@greensight/gds";
import FormTitle from "@components/FormTitle";

export default function FormSection() {
    return (
        <Section container={false} css={{marginTop: `${scale(8)}px`}}>
            <Layout type="flex" direction="column" align="center" css={{ rowGap: `${scale(7)}px` }}>{' '}
                    <FormTitle />
                    <Form />
            </Layout>
        </Section>
    )
}
