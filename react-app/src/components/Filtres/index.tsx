import { Button } from "@components/Button";
import { Container, Layout, Section } from "@greensight/gds";
import { MAJOR_STEP } from "src/utils/constants";

export default function Filters(){
    return (
        <Section css={{marginTop: `${MAJOR_STEP * 5}px`, backgroundColor: 'red'}}>
            <Container>
                <Layout type={'flex'} inline>
                    <select>form</select>
                    <select>position</select>
                </Layout>
                <Button variant="primary" size="md">Search</Button>
            </Container>
        </Section>
    )
}