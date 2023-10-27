import Footer from "@components/Footer";
import FormSection from "@components/FormSection/FormSection";
import { Container } from "@greensight/gds";

export default function FooterContainer(){
    return (
        <Container css={{width: '100%', margin: '0', padding: 0 }}>
            <FormSection />
            <Footer />
      </Container>  
    )
}