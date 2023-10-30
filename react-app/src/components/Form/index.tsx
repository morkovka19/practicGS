import { Button } from "@components/controls/Button";
import { Input } from "@components/controls/Input";
import { Container, Layout, scale } from "@greensight/gds";
import { colors } from "src/scripts/gds";

export default function Form() {
    return (
        <form css={{width: "90%", margin: '0 auto'}}>
            <div css={{ rowGap: `${scale(4)}px`,
                width: '100%',
                 display: 'flex',
                 flexDirection: "column" }}>
                    <div css={{ rowGap: `${scale(2)}px`, display: 'flex', flexDirection: 'column' }}>
                        <Input variant="primary" size="md" nameInput="Your name" placeholder="Please introduce yourself" inputId="name" />
                        <Input  variant="primary" size="md" nameInput="Email" placeholder="ivanov@gmail.com" inputId="email" />
                        <Input nameInput="Phone number" variant="primary" size="md" placeholder="+7 (999) 000 00 00" inputId="phone" />
                        <Input nameInput="Comment" placeholder="Message text" variant="primary" size="md" inputId="comment" textArea />
                    </div>
                    <div css={{ rowGap: `${scale(2)}px`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button block variant="primary" size="md">Send</Button>
                        <Container css={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                            <span css={{textAlign: 'center'}}>By clicking "Send" you confirm your consent to the</span>
                            <span><a href="#" css={{color: colors.blue, textAlign: 'center'}}>processing of personal data</a></span>
                        </Container>
                    </div>
            </div>
        </form>
    )
}
