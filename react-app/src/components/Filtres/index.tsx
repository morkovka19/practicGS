import { Button } from "@components/Button";
import { Select } from "@components/Select";
import { Container, Layout, Section } from "@greensight/gds";
import { MAJOR_STEP } from "src/utils/constants";

export default function Filters() {
    return (
        <Section css={{ marginTop: `${MAJOR_STEP * 5}px`, width: '48%' }} container={false}>
            <Container css={{display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
                <Layout type={'flex'} direction="row" gap={16}>
                    <Layout.Item>
                        <Select css={{height: "100%"}}>
                            <option>полная занятост</option>
                            <option>полная занятост</option>
                            <option>полная занятост</option>
                        </Select>
                    </Layout.Item>

                    <Layout.Item>
                        <select css={{height: "100%"}}>
                            <option>полная занятост</option>
                            <option>полная занятост</option>
                            <option>полная занятост</option>
                        </select>
                    </Layout.Item>

                </Layout>
                <Button variant="primary" size="md">Search</Button>
            </Container>
        </Section>
    )
}
