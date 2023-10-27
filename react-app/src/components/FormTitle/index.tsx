import { Container, Layout } from "@greensight/gds";
import tokens from '../../../public/tokens.json'
import { MAJOR_STEP } from "src/utils/constants";

export default function FormTitle() {
    return (
        <Container css={{ display: 'flex', flexDirection: 'column', rowGap: `${MAJOR_STEP * 2}px`, alignItems: 'center', justifyContent: "start", width: '100%'}}>
            <h2 css={{fontSize: '34px', fontWeight: 500}}>Leave a request</h2>
            <p>We will advise you and help you start  a new project</p>
        </Container>
    )
}
