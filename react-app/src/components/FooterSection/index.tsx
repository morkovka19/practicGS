import Footer from "@components/Footer";
import FormSection from "@components/FormSection/FormSection";
import { colors } from "src/scripts/gds";

export default function FooterContainer() {
    return (
            <div css={{ display: 'flex',flexDirection: 'column', minWidth: '100%', margin: "0 auto", padding: 0, backgroundColor: colors.grey100, alignItems: 'center' }}>
                <FormSection />
                <Footer />
            </div>
    )
}
