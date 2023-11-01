import { Container } from '@greensight/gds';
import { colors } from 'src/scripts/gds';

export default function FormLinkContainer() {
    return (
        <Container css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span css={{ textAlign: 'center' }}>By clicking "Send" you confirm your consent to the</span>
            <span>
                <a href="#" css={{ color: colors.blue, textAlign: 'center' }}>
                    processing of personal data
                </a>
            </span>
        </Container>
    );
}
