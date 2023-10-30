import Footer from "@components/Footer";
import FormSection from "@components/FormSection/FormSection";
import { Container, Layout, scale } from "@greensight/gds";
import { colors } from "src/scripts/gds";

export default function FooterContainer() {
    return (
        <div css={{ width: '100%'}}>
            <Layout type="flex" direction="column" align="center" justify="start" css={{ minWidth: '100%', margin: 0, padding: 0, backgroundColor: colors.grey100 }}>
                <FormSection />
                <Footer />
            </Layout>
        </div>
    )
}
