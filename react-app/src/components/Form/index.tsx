import { Button } from "@components/Button";
import tokens from '../../../public/tokens.json'
import { Container, Layout } from "@greensight/gds";
import { MAJOR_STEP } from "src/utils/constants";

export default function Form() {
    return (
        <form css={{width: "40%"}}>
            <Layout type="flex" direction="column" css={{ rowGap: `${MAJOR_STEP * 4}px`, minWidth: '100%' }}>
                <Layout.Item>
                    <Layout type="flex" direction="column" css={{ rowGap: `${MAJOR_STEP * 4}px` }}>
                        <Container css={{ display: 'flex', flexDirection: 'column', width: "100%"}}>
                            <label css={{fontSize: '12px', fontWeight: 500}}>Your name</label>
                            <input></input>
                        </Container>
                        <Container css={{ display: 'flex', flexDirection: 'column' , width: "100%"}}>
                            <label css={{fontSize: '12px', fontWeight: 500}}>Email</label>
                            <input></input>
                        </Container>
                        <Container css={{ display: 'flex', flexDirection: 'column', width: "100%"}}>
                            <label css={{fontSize: '12px', fontWeight: 500}}>Phone number</label>
                            <input></input>
                        </Container>
                        <Container css={{ display: 'flex', flexDirection: 'column', width: "100%"}}>
                            <label css={{fontSize: '12px', fontWeight: 500}}>Comment</label>
                            <textarea></textarea>
                        </Container>
                    </Layout>
                </Layout.Item>
                <Layout.Item>
                    <Container css={{ rowGap: `${MAJOR_STEP * 2}px`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button variant="primary" size="md">Send</Button>
                        <Container css={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                            <span>By clicking "Send" you confirm your consent to the</span>
                            <span><a href="#" >processing of personal data</a></span>
                        </Container>
                    </Container>
                </Layout.Item>
            </Layout>
        </form>
    )
}
