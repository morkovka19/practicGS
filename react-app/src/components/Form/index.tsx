import { Button } from "@components/controls/Button";
import { Container, Layout, scale } from "@greensight/gds";
import { colors } from "src/scripts/gds";

export default function Form() {
    return (
        <form css={{width: "100%"}}>
            <Layout type="flex" direction="column" css={{ rowGap: `${scale(4)}px`, minWidth: '100%' }}>
                <Layout.Item>
                    <Layout type="flex" direction="column" css={{ rowGap: `${scale(4)}px` }}>
                        <Container css={{ display: 'flex', flexDirection: 'column', width: "100%"}}>
                            <label css={{fontSize: '12px', fontWeight: 500}}>Your name</label>
                            <input css={{width: "100%"}} />
                        </Container>
                        <Container css={{ display: 'flex', flexDirection: 'column' , width: "100%"}}>
                            <label css={{fontSize: '12px', fontWeight: 500}}>Email</label>
                            <input css={{width: "100%"}} />
                        </Container>
                        <Container css={{ display: 'flex', flexDirection: 'column', width: "100%"}}>
                            <label css={{fontSize: '12px', fontWeight: 500}}>Phone number</label>
                            <input css={{width: "100%"}} />
                        </Container>
                        <Container css={{ display: 'flex', flexDirection: 'column', width: "100%"}}>
                            <label css={{fontSize: '12px', fontWeight: 500}}>Comment</label>
                            <textarea />
                        </Container>
                    </Layout>
                </Layout.Item>
                <Layout.Item>
                    <Container css={{ rowGap: `${scale(2)}px`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button block variant="primary" size="md">Send</Button>
                        <Container css={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                            <span>By clicking "Send" you confirm your consent to the</span>
                            <span><a href="#" css={{color: colors.blue}}>processing of personal data</a></span>
                        </Container>
                    </Container>
                </Layout.Item>
            </Layout>
        </form>
    )
}
