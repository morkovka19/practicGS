import Footer from "@components/Footer";
import FormSection from "@components/FormSection/FormSection";
import { Container } from "@greensight/gds";
import tokens from '../../../public/tokens.json'

export default function FooterContainer() {
    return (
        <Container  css={{ minWidth: '100%', margin: 0, padding: 0, backgroundColor: tokens.colors.grey100 }}>
            <FormSection />
            <Footer />
        </Container>
    )
}
