import Footer from '@components/Footer';
import FormSection from '@components/FormSection/FormSection';
import { colors } from 'src/scripts/gds';

export default function FooterContainer() {
    return (
        <div
            css={{
                minWidth: '100%',
                margin: '0 auto',
                padding: 0,
                backgroundColor: colors.grey100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <FormSection />
            <Footer />
        </div>
    );
}
